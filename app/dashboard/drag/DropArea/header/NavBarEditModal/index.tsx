import React, { useEffect, useReducer, useRef, useState } from "react";

import ColorChooser from "../../component/ColorChooser";
import Modal from "@/components/Modal";

import { MdOutlineFormatColorText } from "react-icons/md";
import { IoColorPaletteOutline } from "react-icons/io5";
import {  TbLink } from "react-icons/tb";
import { PiTextTBold, PiImageBold } from "react-icons/pi";
import { BiImageAdd } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { NavBarType } from "../type";
import { Input } from "@/components/ui/input";
import { reducer } from "./Action";
import DragItemOptions from "../../../DragItemOptions";
import { NavMenu } from "@/components/Drags/Navbar/NavBar1";

type Props = {
  onComplete: (data: NavBarType) => void;
  data: NavBarType;
  id: number;
};

export default function NavBarEditModal({ onComplete, data, id }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const logoRef = useRef<HTMLInputElement | null>(null);
  const [state, dispatch] = useReducer(reducer, data);

  useEffect(() => {
    dispatch({ type: "INIT_DATA", payload: data });
  }, [data]);

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const url = URL.createObjectURL(e.target.files[0]);
      dispatch({ type: "SET_LOGO", payload: url });
    }
  };
  // 處理選擇變更的函數

  function handleSave() {
    onComplete(state);
    setIsOpen(false);
  }

  function handleCancel() {
    // 確認取消
    setIsOpen(false);
  }

  const handleInputChange = (
    id: number,
    type: string,
    value: string | boolean | number
  ) => {
    dispatch({ type: "UPDATE_NAV", payload: { id, type, value } });
  };

  const handleChildrenInputChange = (
    navId: number,
    childId: string,
    type: string,
    value: string | boolean | number
  ) => {
    dispatch({
      type: "UPDATE_CHILD",
      payload: { navId, childId, type, value },
    });
  };
  return (
    <>
      <DragItemOptions id={id} openModal={() => setIsOpen(true)} />
      {isOpen ? (
        <Modal close={handleCancel}>
          <div className="flex items-center justify-between px-2">
            <Button onClick={() => setIsOpen(false)}>取消</Button>
            <Button onClick={handleSave}>儲存</Button>
          </div>
          <div className="flex">
            <div className="w-[400px] p-2 overflow-auto flex-1">
              <div className="flex items-center">
                <PiImageBold className="text-[25px] mr-1" />
                <div className="w-[100px] h-[40px] relative group">
                  <img
                    src={state.logo}
                    className="w-full h-full object-cover "
                  />
                  <div
                    onClick={() => logoRef.current?.click()}
                    className="border border-solid border-white px-3 py-1 flex w-full h-full absolute left-0 top-0 justify-center items-center cursor-pointer"
                  >
                    <BiImageAdd />
                  </div>
                  <input
                    ref={logoRef}
                    hidden
                    type="file"
                    onChange={handleLogoChange}
                  />
                </div>
              </div>
              <div className="flex items-center">
                <MdOutlineFormatColorText className="text-[25px] mr-1" />
                <ColorChooser
                  selectedColor={state.color}
                  setColor={(color) =>
                    dispatch({ type: "SET_COLOR", payload: color })
                  }
                />
              </div>
              <div className="flex items-center">
                <IoColorPaletteOutline className="text-[25px] mr-1" />
                <ColorChooser
                  selectedColor={state.bgColor}
                  setColor={(color) =>
                    dispatch({ type: "SET_BGCOLOR", payload: color })
                  }
                />
              </div>
              {state.navs.map((nav) => (
                <div key={nav.id}>
                  <div className="flex items-center">
                    <PiTextTBold className="text-[25px] mr-1" />
                    <Input
                      key={nav.id}
                      placeholder="請輸入標籤名稱"
                      value={nav.name}
                      className="my-2"
                      onChange={(event) =>
                        handleInputChange(nav.id, "name", event.target.value)
                      }
                    />
                  </div>
                  <label className="mr-2">
                    <input
                      type="radio"
                      value={"url"}
                      checked={nav.isDropDown === false}
                      onChange={(event) =>
                        handleInputChange(
                          nav.id,
                          "isDropDown",
                          event.target.value === "dropdown"
                        )
                      }
                      name={`${nav.id}_radio`}
                    />
                    點擊網址
                  </label>
                  <label className="mr-2">
                    <input
                      type="radio"
                      value={"dropdown"}
                      checked={nav.isDropDown === true}
                      onChange={(event) =>
                        handleInputChange(
                          nav.id,
                          "isDropDown",
                          event.target.value === "dropdown"
                        )
                      }
                      name={`${nav.id}_radio`}
                    />
                    點擊下拉選單
                  </label>
                  {nav.isDropDown ? (
                    <>
                      {nav.childrens?.map((children) => (
                        <>
                          <div className="flex items-center">
                            <PiTextTBold className="text-[25px] mr-1" />
                            <Input
                              key={children.id}
                              placeholder="請輸入名稱"
                              value={children.name}
                              className="my-2"
                              onChange={(event) =>
                                handleChildrenInputChange(
                                  nav.id,
                                  children.id,
                                  "name",
                                  event.target.value
                                )
                              }
                            />
                          </div>
                          <div className="flex items-center">
                            <TbLink className="text-[25px] mr-1" />
                            <Input
                              key={children.id}
                              placeholder="請輸入網址"
                              value={children.url}
                              className="my-2"
                              onChange={(event) =>
                                handleChildrenInputChange(
                                  nav.id,
                                  children.id,
                                  "url",
                                  event.target.value
                                )
                              }
                            />
                          </div>
                        </>
                      ))}
                      <Button
                        onClick={() =>
                          dispatch({
                            type: "ADD_CHILD",
                            payload: { navId: nav.id },
                          })
                        }
                      >
                        新增一個children
                      </Button>
                    </>
                  ) : (
                    <div className="flex items-center">
                      <TbLink className="text-[25px] mr-1" />
                      <Input
                        key={nav.id}
                        placeholder="請輸入網址"
                        value={nav.url}
                        className="my-2"
                        onChange={(event) =>
                          handleInputChange(nav.id, "url", event.target.value)
                        }
                      />
                    </div>
                  )}
                </div>
              ))}
              <Button onClick={() => dispatch({ type: "ADD_NAV" })}>
                新增一個導覽
              </Button>
            </div>
            <div className="flex-1">
              <p>示意圖</p>
              <NavMenu data={state} />
            </div>
          </div>
        </Modal>
      ) : null}
    </>
  );
}
