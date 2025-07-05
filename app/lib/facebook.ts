const FACEBOOK_API_BASE = "https://graph.facebook.com/v15.0";

// On initialise le token avec la variable d'environnement, s'il existe.
let cachedToken: string | null = process.env.FB_PAGE_ACCESS_TOKEN || null;
let tokenExpiration: number | null = null;

/**
 * Rafraîchit le token longue durée en utilisant le bon endpoint Threads/Facebook.
 */
async function refreshLongLivedToken(): Promise<void> {
  if (!cachedToken) {
    throw new Error("Aucun token d'accès de page disponible.");
  }
  const url = `https://graph.threads.net/refresh_access_token?grant_type=th_refresh_token&access_token=${cachedToken}`;
  const res = await fetch(url);
  const data = await res.json();

  if (!data.access_token || !data.expires_in) {
    console.log("data", data);
    throw new Error("Impossible de rafraîchir le token longue durée.");
  }

  cachedToken = data.access_token;
  tokenExpiration = Date.now() + data.expires_in * 1000;
  console.log(
    "Token longue durée rafraîchi automatiquement. Nouvelle expiration :",
    new Date(tokenExpiration)
  );
}

/**
 * Retourne un token valide en renouvelant le token si nécessaire.
 * Rafraîchit automatiquement si le token expire dans moins de 7 jours.
 */
async function getFacebookToken(): Promise<string> {
  const SEVEN_DAYS = 7 * 24 * 3600 * 1000;
  if (!cachedToken || !tokenExpiration) {
    throw new Error(
      "Aucun token longue durée valide. Intervention humaine requise."
    );
  }
  if (Date.now() >= tokenExpiration) {
    throw new Error(
      "Token longue durée expiré. Intervention humaine requise pour en générer un nouveau."
    );
  }
  if (tokenExpiration - Date.now() < SEVEN_DAYS) {
    console.log(
      "Token longue durée bientôt expiré, rafraîchissement proactif..."
    );
    await refreshLongLivedToken();
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
interface NextFetchOptions extends RequestInit {
  next?: {
    revalidate: number;
  };
}

export async function getFacebookVideos(
  playlistId: string,
  afterCursor: string = ""
) {
  const token = await getFacebookToken();
  const params = new URLSearchParams({
    fields:
      "id,title,description,length,embed_html,thumbnails,created_time,views",
    access_token: token,
    limit: "30",
  });
  if (afterCursor) {
    params.append("after", afterCursor);
  }
  const url = `${FACEBOOK_API_BASE}/${playlistId}/videos?${params.toString()}`;

  const options: NextFetchOptions = { next: { revalidate: 3600 } };
  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error("Erreur lors de la récupération des vidéos Facebook");
  }
  return res.json();
}
