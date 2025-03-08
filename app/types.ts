export interface VideoNews {
  id: string;
  description: string;
  thumbnails: VideoThumbail;
  views: number;
  length: number;
  created_time: string;
  embed_html: string;
}

 type VideoThumbail = {
   data: VideoData[];
 }

type VideoData = {
  uri: string;
}
 
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
}
