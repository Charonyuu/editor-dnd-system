import { NavBarType } from "../app/dashboard/drag/DropArea/header/type";

import { SaveTextType } from "../app/dashboard/drag/DropArea/textType/type";
import { ImageType } from "./imageType";

// 模板的Props
export type TempContainerProps = {
  id: number;
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
  images?: ImageType[];
  image?: ImageType;
};

// 編輯模式components[]的type
export type ComponentInfoType = StorageComponentsType & {
  component: FC;
  _id?: string;
};
