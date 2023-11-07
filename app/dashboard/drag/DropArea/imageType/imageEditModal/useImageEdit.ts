import { ImageType } from "@/Types/imageType";
import React from "react";

export default function useImageEdit(
  setData: React.Dispatch<React.SetStateAction<ImageType[]>>
) {
  function updataList(
    id: number,
    type: string,
    value: string | boolean | number
  ) {
    return setData((prev) =>
      prev.map((item: ImageType) => {
        return item.id === id ? { ...item, [type]: value } : item;
      })
    );
  }
  function addList() {
    const newItem = {
      id: Date.now(),
      img: "",
      url: "",
      title: "",
      textAlign: "",
    };
    setData((prev) => [...prev, newItem]);
  }

  function deleteList(id: number) {
    setData((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  }

  return { updataList, addList, deleteList };
}
