import React, { ChangeEvent, useEffect, useState } from "react";

import ColorChooser from "../../component/ColorChooser";
import Modal from "@/components/Modal";

import { MdOutlineFormatColorText } from "react-icons/md";
import { IoColorPaletteOutline } from "react-icons/io5";
import {
  BsTextCenter,
  BsTextLeft,
  BsTextParagraph,
  BsTextRight,
} from "react-icons/bs";
import { TbEdit } from "react-icons/tb";
import { PiTextTBold } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { twMerge } from "tailwind-merge";
import { SaveTextType, TextType } from "../type";
import CompOptions from "../../CompOptions";

type Props = {
  onComplete: (data: SaveTextType) => void;
  data: SaveTextType;
  id: number;
};

export default function TextEditModal({ onComplete, data, id }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [setting, setSetting] = useState<TextType>({
    ...data,
    content: data.content.join("\n"),
  });

  useEffect(() => {
    setSetting({
      ...data,
      content: data.content.join("\n"),
    });
  }, [data]);

  console.log(setting);
  // 處理選擇變更的函數
  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSetting((prev) => ({ ...prev, animation: event.target.value }));
  };

  const animationType = [
    { type: "", name: "無" },
    { type: "leftFadeIn", name: "左側漸入" },
    { type: "rightFadeIn", name: "右側漸入" },
    { type: "bottomFadeIn", name: "下方漸入" },
  ];

  function handleSave() {
    onComplete({ ...setting, content: setting.content.split("\n") });
    setIsOpen(false);
  }

  function handleCancel() {
    // 確認取消
    setIsOpen(false);
  }

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="group-hover:flex absolute top-0 left-0 hidden bg-black bg-opacity-40 items-center justify-center w-full h-full object-cover cursor-pointer"
      >
        <div className="text-white">
          <TbEdit className="text-[30px]" />
          <p>編輯</p>
        </div>
        <CompOptions id={id} />
      </div>
      {isOpen ? (
        <Modal close={handleCancel}>
          <div className="flex items-center justify-between px-2">
            <Button onClick={() => setIsOpen(false)}>取消</Button>
            <Button onClick={handleSave}>儲存</Button>
          </div>
          <div className="flex">
            <div className="w-[400px] p-2">
              <div className="flex items-center">
                <PiTextTBold className="text-[25px] mr-1" />
                <input
                  className="bg-[#4f4f4f] rounded-md w-full pl-1 text-white"
                  placeholder="請輸入標題(非必填)"
                  defaultValue={setting.title}
                  onChange={(e) =>
                    setSetting((prev) => ({ ...prev, title: e.target.value }))
                  }
                />
              </div>
              <div className="flex items-center">
                <MdOutlineFormatColorText className="text-[25px] mr-1" />
                <ColorChooser
                  selectedColor={setting.titleColor}
                  setColor={(color) =>
                    setSetting((prev) => ({ ...prev, titleColor: color }))
                  }
                />
              </div>
              <div className="flex items-start justify-start">
                <BsTextParagraph className="text-[25px] mr-1" />
                <textarea
                  placeholder="請輸入內容(非必填)"
                  defaultValue={setting.content}
                  className="bg-[#4f4f4f] rounded-md w-full pl-1 text-white"
                  rows={6}
                  onChange={(e) =>
                    setSetting((prev) => ({ ...prev, content: e.target.value }))
                  }
                />
              </div>
              <div className="flex items-center">
                <IoColorPaletteOutline className="text-[25px] mr-1" />
                <ColorChooser
                  selectedColor={setting.contentColor}
                  setColor={(color) =>
                    setSetting((prev) => ({ ...prev, contentColor: color }))
                  }
                />
              </div>
              <p>動畫效果:</p>
              {animationType.map((data) => (
                <label className="mr-2">
                  <input
                    type="radio"
                    value={data.type}
                    checked={setting.animation === data.type}
                    onChange={handleRadioChange}
                  />
                  {data.name}
                </label>
              ))}

              <p>對齊:</p>
              <div className="flex items-center">
                <div
                  className={twMerge(
                    " p-1 mr-2 rounded-md cursor-pointer",
                    setting.textAlign === "left"
                      ? "bg-gray-500 "
                      : "bg-gray-300 hover:bg-gray-500"
                  )}
                  onClick={() =>
                    setSetting((prev) => ({ ...prev, textAlign: "left" }))
                  }
                >
                  <BsTextLeft className="text-[20px]" />
                </div>
                <div
                  className={twMerge(
                    " p-1 mr-2 rounded-md cursor-pointer",
                    setting.textAlign === "center"
                      ? "bg-gray-500 "
                      : "bg-gray-300 hover:bg-gray-500"
                  )}
                  onClick={() =>
                    setSetting((prev) => ({ ...prev, textAlign: "center" }))
                  }
                >
                  <BsTextCenter className="text-[20px]" />
                </div>
                <div
                  className={twMerge(
                    " p-1 mr-2 rounded-md cursor-pointer",
                    setting.textAlign === "right"
                      ? "bg-gray-500 "
                      : "bg-gray-300 hover:bg-gray-500"
                  )}
                  onClick={() =>
                    setSetting((prev) => ({ ...prev, textAlign: "right" }))
                  }
                >
                  <BsTextRight className="text-[20px]" />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <p>示意圖</p>

              <div className="w-full " style={{ textAlign: setting.textAlign }}>
                <p style={{ color: setting.titleColor }}>{setting.title}</p>
                <div style={{ color: setting.contentColor }}>
                  {setting.content.split("\n").map((content, index) => (
                    <p key={index}>{content || "\u00A0"}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Modal>
      ) : null}
    </>
  );
}
