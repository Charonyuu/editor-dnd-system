export type ImageInfoType = {
  id: string;
  file: File;
};

export type form = {
  title?: string;
  content?: string;
  image?: File;
  url?: string;
};

export type ComponentInfoType = {
  component: FC;
  id: number;
  type: string;
  title?: string;
  content?: string;
  images?: ImageInfoType[];
  url?: string;
  forms?: form[];
};
