import { NavBarType } from "../app/dashboard/drag/DropArea/header/type";

import { SaveTextType } from "./textType";
import { ImageType } from "./imageType";
import { SettingType } from "./settingType";

// 模板的Props
export type TempContainerProps = {
  id: number;
  ComponentData?: ComponentInfoType;
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
  setting: SettingType;
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
