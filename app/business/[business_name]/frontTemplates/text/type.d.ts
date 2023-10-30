export type TextType = {
  title: string;
  titleColor: string;
  content: string;
  contentColor: string;
  animation: string;
  textAlign: "left" | "right" | "center";
};

export type SaveTextType = {
  title: string;
  titleColor: string;
  content: string[];
  contentColor: string;
  animation: string;
  textAlign: "left" | "right" | "center";
};
