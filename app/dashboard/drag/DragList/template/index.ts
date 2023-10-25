export type templateListType = {
  img: string;
  type: string;
  name: string;
};

export type tempImageListType = {
  header: templateListType[];
  image: templateListType[];
  text: templateListType[];
  common: templateListType[];
};

export const headerList = [];

export const wordList = [
  { img: "/tempImages/type5.jpg", type: "text1", name: "文字區塊" },
  { img: "/tempImages/type5.jpg", type: "text2", name: "圖片文字" },
];

export const imageList = [
  { img: "/tempImages/image/image1.png", type: "image1", name: "滿版橫幅" },
  { img: "/tempImages/image/image2.png", type: "image2", name: "雙邊橫幅" },
  { img: "/tempImages/type7.jpg", type: "image3", name: "圖片輪播" },
  { img: "/tempImages/type7.jpg", type: "image4", name: "圖片九宮格" },
  { img: "/tempImages/type7.jpg", type: "image5", name: "多格商品列表" },
];

export const commonList = [];

export const tempImageList: tempImageListType = {
  header: headerList,
  image: imageList,
  text: wordList,
  common: commonList,
};

//   { img: "/tempImages/type1.jpg", type: "type1", name: "簡介區塊" },
//   { img: "/tempImages/type5.jpg", type: "type2", name: "文字區塊" },
//   { img: "/tempImages/type7.jpg", type: "type3", name: "照片列表" },
//   { img: "/tempImages/type8.jpg", type: "type4", name: "文章區塊" },
