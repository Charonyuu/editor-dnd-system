import React, { FC, useLayoutEffect, useRef, useState } from "react";
import TextEditModal from "./TextEditModal";
import { TempContainerProps } from "@/Types/type";
import { TextType } from "../../../../../Types/textType";
import { useDragContext } from "../../DragProvider";
import TextType1 from "@/components/Drags/Text/TextType";

const Text1: FC<TempContainerProps> = ({ id, ComponentData }) => {
  const { setComponents } = useDragContext();
  const originalDataRef = useRef<TextType>(
    ComponentData?.textType![0] || {
      textAlign: "left",
      text: "",
    }
  );
  const [data, setData] = useState<TextType>(originalDataRef.current);

  function onComplete(setting: TextType) {
    originalDataRef.current = setting;
    setComponents((prev) => {
      const componentsTemp = [...prev];
      const index = componentsTemp.findIndex((ele) => ele.id === id);
      componentsTemp[index] = { ...componentsTemp[index], textType: [setting] };
      return componentsTemp;
    });
  }

  function onCancel() {
    setData(originalDataRef.current);
  }

  return (
    <div className="w-full relative group px-5 py-1">
      <TextType1 data={data} />
      <TextEditModal
        onComplete={onComplete}
        onCancel={onCancel}
        data={data}
        setData={setData}
        id={id}
      />
    </div>
  );
};
export default Text1;
