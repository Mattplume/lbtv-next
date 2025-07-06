import { NextRequest, NextResponse } from "next/server";
import { FacebookTokenResponse, VercelEnvResponse } from "../../types";

const VERCEL_TOKEN = process.env.VERCEL_TOKEN;
const PROJECT_ID = process.env.VERCEL_PROJECT_ID;
const ENV_VAR_NAME = "FB_PAGE_ACCESS_TOKEN";
const REFRESH_SECRET = process.env.REFRESH_SECRET; // à définir dans tes variables d'env

let cachedToken: string | null = process.env.FB_PAGE_ACCESS_TOKEN || null;
let tokenExpiration: number | null = null;

async function refreshLongLivedToken(): Promise<{
  token: string;
  expires: number;
}> {
  if (!cachedToken) {
    throw new Error("Aucun token d'accès de page disponible.");
  }
  const url = `https://graph.threads.net/refresh_access_token?grant_type=th_refresh_token&access_token=${cachedToken}`;
  const res = await fetch(url);
  const data: FacebookTokenResponse = await res.json();
  if (!data.access_token || !data.expires_in) {
    throw new Error("Impossible de rafraîchir le token longue durée.");
  }
  cachedToken = data.access_token;
  tokenExpiration = Date.now() + data.expires_in * 1000;
  return { token: cachedToken!, expires: tokenExpiration! };
}

async function getEnvVarId() {
  const res = await fetch(
    `https://api.vercel.com/v10/projects/${PROJECT_ID}/env`,
    {
      headers: { Authorization: `Bearer ${VERCEL_TOKEN}` },
    }
  );
  const data: VercelEnvResponse = await res.json();
  const envVar = data.envs.find((e) => e.key === ENV_VAR_NAME);
  return envVar?.id;
}

async function updateEnvVar(newValue: string) {
  const envVarId = await getEnvVarId();
  if (!envVarId)
    throw new Error("Variable d'environnement non trouvée sur Vercel");
  const res = await fetch(
    `https://api.vercel.com/v10/projects/${PROJECT_ID}/env/${envVarId}`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${VERCEL_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        value: newValue,
        target: ["production", "preview", "development"],
      }),
    }
  );
  if (!res.ok)
    throw new Error(
      "Erreur lors de la mise à jour de la variable d'environnement"
    );
  return await res.json();
}

// (Optionnel) Déclencher un redeploy Vercel
enum DeployTarget {
  Production = "production",
  Preview = "preview",
}
async function triggerVercelRedeploy(
  target: DeployTarget = DeployTarget.Production
) {
  const res = await fetch(`https://api.vercel.com/v13/deployments`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${VERCEL_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      project: PROJECT_ID,
      target,
      // Tu peux ajouter d'autres options ici si besoin
    }),
  });
  if (!res.ok) throw new Error("Erreur lors du redeploy Vercel");
  return await res.json();
}

export async function GET(req: NextRequest) {
  // Sécurité : vérifie le secret
  const secret =
    req.nextUrl.searchParams.get("secret") ||
    req.headers.get("x-refresh-secret");
  if (!REFRESH_SECRET || secret !== REFRESH_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    // 1. Rafraîchir le token longue durée
    const { token, expires } = await refreshLongLivedToken();
    // 2. Mettre à jour la variable d'env sur Vercel
    await updateEnvVar(token);
    // 3. Déclencher un redeploy (optionnel)
    await triggerVercelRedeploy();
    return NextResponse.json({
      success: true,
      token,
      expiresAt: new Date(expires).toISOString(),
      message:
        "Token rafraîchi et variable d'environnement mise à jour sur Vercel. Pense à redeployer pour prise en compte immédiate.",
    });
  } catch (e: unknown) {
    const errorMessage =
      e instanceof Error ? e.message : "Une erreur inconnue est survenue";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
