import React from "react";
import { useDragContext } from "../DragProvider";
import { ComponentInfoType } from "../../../../Types/type";
import { SettingType } from "@/Types/settingType";

export default function useOption(id: number) {
  const { components, setComponents } = useDragContext();

  const Index = components.findIndex((item) => item.id === id);
  const item = components[Index];
  const CanMoveUp = Index > 0;
  const CanMoveDown = Index < components.length - 1;

  function handleSortUp(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
    setComponents((prev: ComponentInfoType[]) => {
      const newIndex = Index - 1;
      if (newIndex < 0) return prev; // 索引小於0，不作任何變動

      const newComponents = [...prev];
      [newComponents[Index], newComponents[newIndex]] = [
        newComponents[newIndex],
        newComponents[Index],
      ];
      return newComponents;
    });
  }

  function handleSortDown(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
    setComponents((prev: ComponentInfoType[]) => {
      const newIndex = Index + 1;
      if (newIndex >= prev.length) return prev; // 索引大於等於components的長度，不作任何變動

      const newComponents = [...prev];
      [newComponents[Index], newComponents[newIndex]] = [
        newComponents[newIndex],
        newComponents[Index],
      ];
      return newComponents;
    });
  }

  function handleSetting(setting: SettingType) {
    setComponents((prev: ComponentInfoType[]) => {
      const temp = [...prev];
      temp[Index] = { ...temp[Index], setting };
      return temp;
    });
  }

  function handleDelete(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
    setComponents((prev: ComponentInfoType[]) => {
      const temp = prev.filter((item) => item.id !== id);
      return temp;
    });
  }
  function handleCopy() {
    setComponents((prev: ComponentInfoType[]) => {
      const temp = [...prev];
      temp.splice(Index, 0, { ...item, id: Date.now() });
      return temp;
    });
  }

  return {
    handleSortUp,
    handleSortDown,
    handleSetting,
    handleDelete,
    handleCopy,
    item,
    CanMoveUp,
    CanMoveDown,
  };
}
