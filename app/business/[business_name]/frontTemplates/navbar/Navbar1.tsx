import { StorageComponentsType } from "@/Types/type";
import { NavMenu } from "@/components/Drags/Navbar/NavBar1";
import React, { FC } from "react";

type ComponentInfoType = {
  data: StorageComponentsType;
};

const Navbar1: FC<ComponentInfoType> = ({ data }) => {
  const { navbarType } = data;
  return <NavMenu data={navbarType!} />;
};

export default Navbar1;
