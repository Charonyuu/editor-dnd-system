import React, {
  SetStateAction,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

import ColorChooser from "../../../../../../components/customEditTool/ColorChooser";

import { MdOutlineFormatColorText } from "react-icons/md";
import { IoColorPaletteOutline } from "react-icons/io5";
import { TbLink } from "react-icons/tb";
import { PiTextTBold, PiImageBold } from "react-icons/pi";
import { BiImageAdd } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { NavBarType } from "../type";
import { Input } from "@/components/ui/input";
import useNavBarEdit from "./useNavBarEdit";
import DragItemOptions from "../../../DragItemOptions";
import Radio from "@/components/customEditTool/Radio";
import SideMenu from "@/components/SideMenu";

type Props = {
  onComplete: () => void;
  data: NavBarType;
  setData: React.Dispatch<SetStateAction<NavBarType>>;
  id: number;
};

export default function NavBarEditModal({
  onComplete,
  data,
  setData,
  id,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const logoRef = useRef<HTMLInputElement | null>(null);
  const {
    setLogo,
    setColor,
    setBgColor,
    addNav,
    addChild,
    updateNav,
    updateChild,
  } = useNavBarEdit(setData);

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const url = URL.createObjectURL(e.target.files[0]);
      setLogo(url);
    }
  };
  // 處理選擇變更的函數

  function handleSave() {
    onComplete();
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
    updateNav(id, type, value);
  };

  const handleChildrenInputChange = (
    navId: number,
    childId: string,
    type: string,
    value: string | boolean | number
  ) => {
    updateChild(navId, childId, type, value);
  };
  return (
    <>
      {!isOpen ? (
        <DragItemOptions id={id} openModal={() => setIsOpen(true)} />
      ) : null}
      <SideMenu
        isOpen={isOpen}
        handleClose={handleCancel}
        handleSave={handleSave}
      >
        <div className="flex">
          <div className="w-[400px] p-2 overflow-auto flex-1">
            <div className="flex items-center">
              <PiImageBold className="text-[25px] mr-1" />
              <div className="w-[100px] h-[40px] relative group">
                <img src={data.logo} className="w-full h-full object-cover " />
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
                selectedColor={data.color}
                setColor={(color) => setColor(color)}
              />
            </div>
            <div className="flex items-center">
              <IoColorPaletteOutline className="text-[25px] mr-1" />
              <ColorChooser
                selectedColor={data.bgColor}
                setColor={(color) => setBgColor(color)}
              />
            </div>
            {data.navs.map((nav) => (
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
                <Radio
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
                  radioName="點擊網址"
                />
                <Radio
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
                  radioName="點擊下拉選單"
                />
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
                    <Button onClick={() => addChild(nav.id)}>
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
            <Button onClick={addNav}>新增一個導覽</Button>
          </div>
        </div>
      </SideMenu>
    </>
  );
}
