"use client";

import { FC, useLayoutEffect, useState } from "react";
import NavBarEditModal from "./NavBarEditModal";
import { NavBarType } from "./type";
import { TempContainerProps } from "../../../../../Types/type";
import { useDragContext } from "../../DragProvider";
import { NavMenu } from "@/components/Drags/Navbar/NavBar1";

const Navbar1: FC<TempContainerProps> = ({ id }) => {
  const { components, setComponents } = useDragContext();
  const [data, setData] = useState<NavBarType>({
    bgColor: "",
    color: "",
    logo: "",
    navs: [
      {
        id: Date.now(),
        name: "",
        url: "",
        isDropDown: false,
        childrens: [{ id: Date.now().toString(), name: "", url: "" }],
      },
    ],
  });
  useLayoutEffect(() => {
    const data = components.find((ele) => ele.id === id);
    if (data?.navbarType) {
      setData(data.navbarType);
    }
  }, []);
  function onComplete(setting: NavBarType) {
    setData(setting);
    setComponents((prev) => {
      const componentsTemp = [...prev];
      const index = componentsTemp.findIndex((ele) => ele.id === id);
      componentsTemp[index] = { ...componentsTemp[index], navbarType: setting };
      return componentsTemp;
    });
  }
  return (
    <div className="w-full relative group px-5">
      <NavMenu data={data} />
      <NavBarEditModal data={data} onComplete={onComplete} id={id} />
    </div>
  );
};

export default Navbar1;
