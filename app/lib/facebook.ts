const FACEBOOK_API_BASE = "https://graph.facebook.com/v15.0";
const APP_ID = process.env.FB_APP_ID;
const APP_SECRET = process.env.FB_APP_SECRET;

// On initialise le token avec la variable d'environnement, s'il existe.
let cachedToken: string | null = process.env.FB_PAGE_ACCESS_TOKEN || null;
let tokenExpiration: number | null = null;

/**
 * Vérifie si le token est encore valide.
 */
function isTokenValid(): boolean {
  return cachedToken !== null && tokenExpiration !== null && Date.now() < tokenExpiration;
}

/**
 * Renouvelle le token longue durée en utilisant le token actuel.
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
  tokenExpiration = Date.now() + data.expires_in * 1000; // Conversion en millisecondes
  console.log("Nouveau token récupéré !");
}

/**
 * Retourne un token valide en renouvelant le token si nécessaire.
 */
async function getFacebookToken(): Promise<string> {
  if (!isTokenValid()) {
    console.log("Token expiré ou inexistant, renouvellement...");
    await fetchLongLivedToken();
  }
  return cachedToken!;
}

/**
 * Récupère les vidéos d'une playlist Facebook, avec pagination optionnelle.
 *
 * @param playlistId L'ID de la playlist.
 * @param afterCursor (optionnel) Le curseur pour la pagination.
 * @returns La réponse JSON de l'API Facebook.
 */
export async function getFacebookVideos(playlistId: string, afterCursor: string = "") {
  const token = await getFacebookToken();
  const params = new URLSearchParams({
    fields: "id,title,description,length,embed_html,thumbnails,created_time,views",
    access_token: token,
    limit: "30",
  });
  if (afterCursor) {
    params.append("after", afterCursor);
  }
  const url = `${FACEBOOK_API_BASE}/${playlistId}/videos?${params.toString()}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Erreur lors de la récupération des vidéos Facebook");
  }
  return res.json();
}
