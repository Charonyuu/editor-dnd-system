// 模板的Props
export type TempContainerProps = {
  id: number
}

// image[]的type
export type ImageInfoType = {
  id: string;
  file: File;
};


// 文章的props
export type form = {
  title?: string;
  content?: string;
  image?: File;
  url?: string;
};

// 編輯模式components[]的type
export type ComponentInfoType = {
  component: FC;
  id: number;
  type: string;
  title?: string;
  content?: string;
  images?: ImageInfoType[];
  url?: string;
  forms?: form[];
  image?: File;
  bg?: File;
};
