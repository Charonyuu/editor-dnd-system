import React, { ChangeEvent, useEffect, useState } from "react";

import Modal from "@/components/EditModal";

import "react-quill/dist/quill.snow.css";
import { BsTextCenter, BsTextLeft, BsTextRight } from "react-icons/bs";
import { twMerge } from "tailwind-merge";
import { TextType } from "../../../../../../Types/textType";
import DragItemOptions from "../../../DragItemOptions";
import Quill from "@/components/customEditTool/Quill";
import AlignList from "@/components/customEditTool/FlexAlignList";
import SideMenu from "@/components/SideMenu";
import TextAlignList from "@/components/customEditTool/TextAlignList";

type Props = {
  onComplete: (data: TextType) => void;
  onCancel: () => void;
  setData: React.Dispatch<React.SetStateAction<TextType>>;
  data: TextType;
  id: number;
};

export default function TextEditModal({
  onComplete,
  onCancel,
  setData,
  data,
  id,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  function handleChange(type: string, value: string | number | boolean) {
    setData((prev) => ({ ...prev, [type]: value }));
  }

  function handleSave() {
    onComplete(data);
    setIsOpen(false);
  }

  function handleCancel() {
    // 確認取消
    onCancel();
    setIsOpen(false);
  }

  return (
    <>
      <DragItemOptions id={id} openModal={() => setIsOpen(true)} />
      <SideMenu
        isOpen={isOpen}
        handleClose={handleCancel}
        handleSave={handleSave}
      >
        <div className="flex">
          <div className="w-[400px] p-2">
            <Quill
              value={data.text}
              setValue={(input) => handleChange("text", input)}
            />
            <p>對齊:</p>
            <TextAlignList
              type="textAlign"
              handleChange={handleChange}
              currentValue={data.textAlign}
            />
          </div>
        </div>
      </SideMenu>
    </>
  );
}
