import { SettingType } from "@/Types/settingType";
import EditModal from "@/components/EditModal";
import React, { ChangeEvent, useEffect, useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import ColorChooser from "../../../../components/customEditTool/ColorChooser";
import NumberInput from "@/components/customEditTool/NumberInput";
import Radio from "@/components/customEditTool/Radio";
import AlignList from "@/components/customEditTool/FlexAlignList";
import { useDragContext } from "../DragProvider";
import SideMenu from "@/components/SideMenu";
import { ComponentInfoType } from "@/Types/type";

type Props = {
  id: number;
  item: ComponentInfoType;
};

export default function SettingModal({ id, item }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const { setComponents, components } = useDragContext();
  function handleClose() {
    setIsOpen(false);
  }
  function handleOpen() {
    setIsOpen(true);
  }

  function handleInputChange(type: string, value: string | number | boolean) {
    setSetting((prev) => ({ ...prev, [type]: value }));
  }
  const [setting, setSetting] = useState<SettingType>(
    item.setting || {
      bgColor: "#FFFFFF",
      paddingX: 0,
      paddingY: 0,
      width: 100,
      align: "flex-start",
      animation: "none",
    }
  );

  const animationType = [
    { type: "none", name: "無" },
    { type: "leftFadeIn", name: "左側漸入" },
    { type: "rightFadeIn", name: "右側漸入" },
    { type: "bottomFadeIn", name: "下方漸入" },
  ];

  function handleSave() {
    setComponents((prevComponents) => {
      // 通过映射前一个状态创建一个新数组
      return prevComponents.map((component) => {
        if (component.id === id) {
          // 使用扩展运算符创建一个新对象
          return { ...component, setting: setting };
        }
        return component;
      });
    });
    setIsOpen(false);
  }

  return (
    <div>
      <div
        className="flex items-center flex-col text-white p-1 rounded-lg mx-2 cursor-pointer"
        onClick={handleOpen}
      >
        <AiOutlineSetting fontSize="20px" />
        <p>設定</p>
      </div>
      <SideMenu
        isOpen={isOpen}
        handleClose={handleClose}
        handleSave={handleSave}
      >
        <div className="w-full px-2 mt-2">
          <p>左右內邊距：</p>
          <NumberInput
            number={setting.paddingX}
            setNumber={(value) => handleInputChange("paddingX", value)}
            max={100}
          />
          <p>上下內邊距：</p>
          <NumberInput
            number={setting.paddingY}
            setNumber={(value) => handleInputChange("paddingY", value)}
            max={100}
          />
          <p>背景顏色：</p>
          <ColorChooser
            selectedColor={setting.bgColor}
            setColor={(color) => handleInputChange("bgColor", color)}
          />
          <p>寬度：</p>
          <NumberInput
            number={setting.width}
            setNumber={(value) => handleInputChange("width", value)}
            max={100}
            unit="%"
          />
          <p>動畫效果：</p>
          {animationType.map((item) => (
            <Radio
              value={item.type}
              checked={item.type === setting.animation}
              onChange={(e) => handleInputChange("animation", e.target.value)}
              name={`${id}_radio`}
              radioName={item.name}
            />
          ))}
          <p>對齊：</p>
          <AlignList
            type="align"
            handleChange={handleInputChange}
            currentValue={setting.align}
          />
        </div>
      </SideMenu>
    </div>
  );
}
