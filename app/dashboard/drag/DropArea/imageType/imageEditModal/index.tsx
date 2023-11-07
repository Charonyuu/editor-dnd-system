import React, { ChangeEvent, useEffect, useReducer, useState } from "react";

import { Button } from "@/components/ui/button";
import DragItemOptions from "../../../DragItemOptions";
import PictureCrop from "@/components/PictureCrop";
import { reducer } from "./Action";
import ImageType1 from "@/components/Drags/Images/ImageType1";
import { BsImage } from "react-icons/bs";
import { TbLink } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";
import SideMenu from "@/components/SideMenu";

export type imageEditType = {
  id: number;
  url: string;
  img: string;
  title: string;
  textAlign: string;
};

type Props = {
  onComplete: (data: imageEditType[]) => void;
  data: imageEditType[];
  id: number;
};

export default function ImageEditModal({ id, data, onComplete }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [state, dispatch] = useReducer(reducer, data);
  useEffect(() => {
    dispatch({ type: "INIT_DATA", payload: data });
  }, [data]);
  function handleSave() {
    onComplete(state);
    setIsOpen(false);
  }

  function handleCancel() {
    // 確認取消
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
            {state.map((item) => (
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
                          dispatch({
                            type: "UPDATE_LIST",
                            payload: {
                              id: item.id,
                              type: "img",
                              value: image,
                            },
                          });
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
                      onChange={(e) => {
                        dispatch({
                          type: "UPDATE_LIST",
                          payload: {
                            id: item.id,
                            type: "url",
                            value: e.target.value,
                          },
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="pt-2 text-red-600 cursor-pointer">
                  <AiFillDelete
                    onClick={() =>
                      dispatch({
                        type: "DELETE_DATA",
                        payload: { id: item.id },
                      })
                    }
                  />
                </div>
              </div>
            ))}
            <Button onClick={() => dispatch({ type: "ADD_LIST" })}>增加</Button>
          </div>
        </div>
      </SideMenu>
    </>
  );
}
