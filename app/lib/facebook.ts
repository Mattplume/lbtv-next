const FACEBOOK_API_BASE = "https://graph.facebook.com/v15.0";
const APP_ID = process.env.FB_APP_ID;
const APP_SECRET = process.env.FB_APP_SECRET;
let cachedToken: string | null = process.env.FB_PAGE_ACCESS_TOKEN || null;
let tokenExpiration: number | null = null;

/**
 * Vérifie si le token actuel est encore valide.
 */
function isTokenValid(): boolean {
  return cachedToken !== null && tokenExpiration !== null && Date.now() < tokenExpiration;
}

/**
 * Récupère un token longue durée.
 */
async function fetchLongLivedToken(): Promise<void> {
  if (!cachedToken) {
    throw new Error("Aucun token d'accès de page disponible.");
  }

  const url = `${FACEBOOK_API_BASE}/oauth/access_token?grant_type=fb_exchange_token&client_id=${APP_ID}&client_secret=${APP_SECRET}&fb_exchange_token=${cachedToken}`;
  const res = await fetch(url);
  const data = await res.json();

  if (!data.access_token || !data.expires_in) {
    throw new Error("Impossible d'obtenir le token longue durée.");
  }

  cachedToken = data.access_token;
  tokenExpiration = Date.now() + data.expires_in * 1000; // Conversion en ms
  console.log("Nouveau token récupéré !");
}

/**
 * Récupère le token valide (le régénère si nécessaire).
 */
async function getFacebookToken(): Promise<string> {
  if (!isTokenValid()) {
    console.log("Token expiré ou inexistant, renouvellement...");
    await fetchLongLivedToken();
  }
  return cachedToken!;
}

/**
 * Récupère les vidéos d'une playlist spécifique.
 */
export async function getFacebookVideos(playlistId: string) {
  const token = await getFacebookToken();
  const url = `${FACEBOOK_API_BASE}/${playlistId}/videos?fields=id,description,length,embed_html,thumbnails,created_time,views&access_token=${token}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Erreur lors de la récupération des vidéos Facebook");
  }
  return res.json();
}

