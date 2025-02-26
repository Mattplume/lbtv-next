export interface VideoNews {
  id: string;
  picture: string;
  description: string;
  thumbnails: VideoThumbail;
  views: number;
  length: number;
}

 type VideoThumbail = {
   data: VideoData[];
 }

type VideoData = {
  uri: string;
 }