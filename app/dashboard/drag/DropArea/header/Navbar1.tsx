"use client";

import { FC, useLayoutEffect, useRef, useState } from "react";
import NavBarEditModal from "./NavBarEditModal";
import { NavBarType } from "./type";
import { TempContainerProps } from "../../../../../Types/type";
import { useDragContext } from "../../DragProvider";
import { NavMenu } from "@/components/Drags/Navbar/NavBar1";

const Navbar1: FC<TempContainerProps> = ({ id, ComponentData }) => {
  const { components, setComponents } = useDragContext();
  const originalDataRef = useRef<NavBarType>(
    ComponentData?.navbarType || {
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
    }
  );
  const [data, setData] = useState<NavBarType>(originalDataRef.current);

  function onComplete() {
    setComponents((prev) => {
      const componentsTemp = [...prev];
      const index = componentsTemp.findIndex((ele) => ele.id === id);
      componentsTemp[index] = { ...componentsTemp[index], navbarType: data };
      return componentsTemp;
    });
  }
  return (
    <div className="w-full relative group px-5">
      <NavMenu data={data} />
      <NavBarEditModal
        data={data}
        setData={setData}
        onComplete={onComplete}
        id={id}
      />
    </div>
  );
};

export default Navbar1;
