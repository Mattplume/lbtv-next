export interface VideoNews {
  id: string;
  description: string;
  thumbnails: {
    data: {
      uri: string;
    }[];
  };
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

export interface PageHeaderInfos {
  title: string;
  description: string;
}

export interface DerbyMagazineInfos {
  poster: {
    url: string;
    alt: string;
  };
  url: string;
}

// Types pour l'API route de refresh du token Facebook
export interface FacebookTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export interface VercelEnvResponse {
  envs: {
    id: string;
    key: string;
    value: string;
    target: string[];
  }[];
}
