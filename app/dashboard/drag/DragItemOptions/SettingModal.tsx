import { SettingType } from "@/Types/settingType";
import EditModal from "@/components/EditModal";
import React, { useEffect, useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";

type Props = {
  id: number;
};

export default function SettingModal({ id }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  function handleClose() {
    setIsOpen(false);
  }
  function handleOpen() {
    setIsOpen(true);
  }

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) {
    setSetting((prev) => ({ ...prev, [type]: e.target.value }));
  }
  const [setting, setSetting] = useState<SettingType>({
    bgColor: "#FFFFFF",
    padding: 0,
    width: 100,
    align: "left",
    animation: "none",
  });

  // useEffect(()=>{

  // },[id])

  return (
    <div>
      <div
        className="flex items-center flex-col text-white p-1 rounded-lg mx-2 cursor-pointer"
        onClick={handleOpen}
      >
        <AiOutlineSetting fontSize="20px" />
        <p>設定</p>
      </div>
      {isOpen ? (
        <EditModal handleClose={handleClose}>
          <div className="w-[400px]">
            <p>內邊距：</p>
            <input />
            <p>背景顏色：</p>
            <input />
            <p>動畫效果：</p>
            <input />
            <p>寬度：</p>
            <input />
            <p>對齊：</p>
            <input />
          </div>
        </EditModal>
      ) : null}
    </div>
  );
}
