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