// 模板的Props
export type TempContainerProps = {
  id: number;
};

// image[]的type
export type ImageInfoType = File | string;

type imageType = {
  url?: string;
  id?: string;
  image: string;
};

type StorageimageType = {
  url?: string;
  id?: string;
  image: string;
};
// 文章的props
export type form = {
  title?: string;
  content?: string;
  image?: File;
  url?: string;
};

// 存在後端的東西
export type StorageComponentsType = {
  id: number;
  type: string;
  title?: string;
  content?: string;
  images?: StorageimageType[];
  url?: string[];
  forms?: form[];
  image?: StorageimageType;
  bg?: StorageimageType;
};

// 編輯模式components[]的type
export type ComponentInfoType = {
  component: FC;
  _id?: string;
  id: number;
  type: string;
  title?: string;
  content?: string;
  images?: imageType[];
  url?: string[];
  forms?: form[];
  image?: imageType;
  bg?: imageType;
};
