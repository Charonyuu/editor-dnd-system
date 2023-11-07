import React, { ChangeEvent, useEffect, useReducer, useState } from "react";

import { Button } from "@/components/ui/button";
import DragItemOptions from "../../../DragItemOptions";
import PictureCrop from "@/components/PictureCrop";

import { BsImage } from "react-icons/bs";
import { TbLink } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";
import SideMenu from "@/components/SideMenu";
import { ImageType } from "@/Types/imageType";
import useImageEdit from "./useImageEdit";

type Props = {
  onComplete: () => void;
  onCancel: () => void;
  setData: React.Dispatch<React.SetStateAction<ImageType[]>>;
  data: ImageType[];
  id: number;
};

export default function ImageEditModal({
  id,
  data,
  onComplete,
  onCancel,
  setData,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const { updataList, addList, deleteList } = useImageEdit(setData);

  function handleSave() {
    onComplete();
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
        className=" overflow-hidden "
      >
        <div className="flex h-full overflow-auto pb-4">
          <div className="w-[400px] p-2 ">
            {data.map((item) => (
              <div
                key={item.id}
                className="pl-2 mb-2 border-l-4 rounded-sm border-solid border-black flex "
              >
                <div>
                  <div className="flex">
                    <BsImage className="text-[22px] mr-2" />
                    <div className="border border-black border-solid group w-full h-auto relative rounded-md flex items-center justify-center">
                      {item.img ? (
                        <img
                          src={item.img}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <p>圖片(建議16:9)</p>
                      )}
                      <PictureCrop
                        onComplete={(image) => {
                          updataList(item.id, "img", image);
                        }}
                        aspectRatio={4}
                      />
                    </div>
                  </div>
                  <div className="flex mb-2 items-center">
                    <TbLink className="text-[22px] mr-2" />
                    <input
                      type="text"
                      placeholder="請輸入網址(選填)"
                      value={item.url}
                      className="border-black border-b border-solid  "
                      onChange={(e) =>
                        updataList(item.id, "url", e.target.value)
                      }
                    />
                  </div>
                </div>
                <div className="pt-2 text-red-600 cursor-pointer">
                  <AiFillDelete onClick={() => deleteList(item.id)} />
                </div>
              </div>
            ))}
            <Button onClick={addList}>增加</Button>
          </div>
        </div>
      </SideMenu>
    </>
  );
}
