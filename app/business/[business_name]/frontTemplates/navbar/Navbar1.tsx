import { NavMenu } from "@/app/dashboard/drag/DropArea/header/Navbar1";
import { StorageComponentsType } from "@/app/dashboard/drag/DropArea/type";
import React, { FC } from "react";

type ComponentInfoType = {
  data: StorageComponentsType;
};

const Navbar1: FC<ComponentInfoType> = ({ data }) => {
  const { navbarType } = data;
  return (
    <div className="w-full relative group px-5">
      <NavMenu data={navbarType!} />
    </div>
  );
};

export default Navbar1;
