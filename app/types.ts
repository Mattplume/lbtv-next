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
 
// app/types.ts
// export interface DerbysMagazineSlice {
//   slice_type: "derbys_magazine_slice";
//   slice_label: string | null;
//   primary: {
//     poster: {
//       url: string;
//       alt?: string;
//     };
//     magazineUrl: string;
//   };
// }
