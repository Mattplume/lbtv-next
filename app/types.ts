export interface VideoNews {
  id: string;
  description: string;
  thumbnails: VideoThumbail;
  views: number;
  length: number;
  created_time: string;
  embed_html: string;
}

export type PagePropsType = {
  newsId: string;
};

export type SearchParamsType = {
  embed_html?: string;
  description?: string;
  views?: string;
  created_time?: string;
};

type VideoThumbail = {
  data: VideoData[];
};

type VideoData = {
  uri: string;
};

export interface PageHeaderInfos {
  title: string;
  description: string;
}

export interface DerbyMagazineInfos {
  poster: Poster;
  url: string;
}

type Poster = {
  url: string;
  alt: string;
};

// Types pour l'API route de refresh du token Facebook
export interface FacebookTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export interface VercelEnvVar {
  id: string;
  key: string;
  value: string;
  target: string[];
}

export interface VercelEnvResponse {
  envs: VercelEnvVar[];
}

export interface RefreshTokenResponse {
  success: boolean;
  token: string;
  expiresAt: string;
  message: string;
}

export interface ErrorResponse {
  error: string;
}
