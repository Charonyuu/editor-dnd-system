import { NavBarType } from "./header/type";
import { SaveTextType } from "./textType/type";

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
  navbarType?: NavBarType;
  textType?: SaveTextType[];
  images?: StorageimageType[];
  image?: StorageimageType;
};

// 編輯模式components[]的type
export type ComponentInfoType = {
  component: FC;
  _id?: string;
  id: number;
  type: string;
  navbarType?: NavBarType;
  textType?: SaveTextType[];
  images?: imageType[];
  image?: imageType;
};
