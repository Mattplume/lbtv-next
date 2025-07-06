const FACEBOOK_API_BASE = "https://graph.facebook.com/v15.0";

/**
 * Rafraîchit le token longue durée en utilisant le bon endpoint Threads/Facebook.
 * Cette fonction doit être appelée uniquement par l'API de refresh dédiée.
 */
export async function refreshLongLivedToken(
  currentToken: string
): Promise<{ token: string; expires: number }> {
  if (!currentToken) {
    throw new Error("Aucun token d'accès de page disponible.");
  }
  const url = `https://graph.threads.net/refresh_access_token?grant_type=th_refresh_token&access_token=${currentToken}`;
  const res = await fetch(url);
  const data = await res.json();

  if (!data.access_token || !data.expires_in) {
    console.log("data", data);
    throw new Error("Impossible de rafraîchir le token longue durée.");
  }

  // C'est à l'API de refresh de mettre à jour la variable d'env sur Vercel
  return {
    token: data.access_token,
    expires: Date.now() + data.expires_in * 1000,
  };
}

/**
 * Retourne le token Facebook stocké dans les variables d'environnement Vercel.
 * Ne fait aucun cache mémoire (compatibilité serverless).
 */
export async function getFacebookToken(): Promise<string> {
  const token = process.env.FB_PAGE_ACCESS_TOKEN;
  if (!token) {
    throw new Error(
      "Aucun token longue durée valide. Intervention humaine requise."
    );
  }
  return token;
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
    const text = await res.text();
    console.error("Réponse Facebook non OK :", text);
    throw new Error("Erreur lors de la récupération des vidéos Facebook");
  }
  return res.json();
}
