const FACEBOOK_API_BASE = "https://graph.facebook.com/v15.0";

// On initialise le token avec la variable d'environnement
const cachedToken: string | null = process.env.FB_PAGE_ACCESS_TOKEN || null;

/**
 * Retourne le token d'accès de page.
 */
async function getFacebookToken(): Promise<string> {
  if (!cachedToken) {
    throw new Error("Aucun token d'accès de page disponible.");
  }
  return cachedToken;
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

  console.log(`[Facebook API] Appel pour le playlist ${playlistId}`);

  const options: NextFetchOptions = { next: { revalidate: 60 } }; // Cache réduit à 1 minute pour tester
  const res = await fetch(url, options);

  console.log(
    `[Facebook API] Réponse pour ${playlistId}: ${res.status} ${res.statusText}`
  );

  if (!res.ok) {
    const errorText = await res.text();
    console.error(`[Facebook API] Erreur pour ${playlistId}:`, errorText);
    throw new Error(
      `Erreur lors de la récupération des vidéos Facebook: ${res.status} ${res.statusText}`
    );
  }

  const data = await res.json();
  console.log(
    `[Facebook API] Succès pour ${playlistId}: ${data.data?.length || 0} vidéos`
  );

  return data;
}
