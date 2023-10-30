import React, { FC, useLayoutEffect, useState } from "react";
import TextEditModal from "./TextEditModal";
import { TempContainerProps } from "../type";
import { SaveTextType, TextType } from "./type";
import { useDragContext } from "../../DragProvider";

const Text1: FC<TempContainerProps> = ({ id }) => {
  const { components, setComponents } = useDragContext();
  const [data, setData] = useState<SaveTextType>({
    title: "標題",
    titleColor: "#FFFFFF",
    content: ["內文...."],
    contentColor: "#FFFFFF",
    animation: "",
    textAlign: "left",
  });
  useLayoutEffect(() => {
    const data = components.find((ele) => ele.id === id);
    if (data?.textType) {
      setData(data.textType[0]);
    }
  }, []);
  function onComplete(setting: SaveTextType) {
    setData(setting);
    setComponents((prev) => {
      const componentsTemp = [...prev];
      const index = componentsTemp.findIndex((ele) => ele.id === id);
      componentsTemp[index] = { ...componentsTemp[index], textType: [setting] };
      return componentsTemp;
    });
  }
  return (
    <div
      className="w-full relative group px-5 py-1"
      style={{ textAlign: data.textAlign }}
    >
      <p style={{ color: data.titleColor }}>{data.title}</p>
      <div style={{ color: data.contentColor }}>
        {data.content.map((content, index) => (
          <p key={index}>{content || "\u00A0"}</p>
        ))}
      </div>

      {/* <div>
        {content.map((word, index) => (
          <p className="text-sm" key={index}>
            {word}
          </p>
        ))}
      </div> */}
      <TextEditModal onComplete={onComplete} data={data} id={id}/>
    </div>
  );
};
export default Text1;
