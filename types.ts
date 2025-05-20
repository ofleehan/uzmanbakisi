
export interface VideoItem {
  id: string;
  title: string;
  channel: string;
  thumbnailUrl: string;
  youtubeLink: string;
  instagramLink: string;
  description: string;
}

export enum LayoutMode {
  GRID = 'grid',
  SPHERE = 'sphere',
}
