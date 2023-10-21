"use client";

import React, { createContext, useState, useContext, FC } from "react";
import { useEffect } from "react";
import { tempBoxs } from "../../../../components/templates";
import {
  ComponentInfoType,
  StorageComponentsType,
} from "../../../../components/type";
import useGetDrag from "./useGetDrag";

type DragContextType = {
  components: ComponentInfoType[];
  setComponents: React.Dispatch<React.SetStateAction<ComponentInfoType[]>>;
};

const DragContext = createContext<DragContextType | null>(null);

export const useDragContext = () => {
  const context = useContext(DragContext);
  if (!context) {
    throw new Error("useDrag must be used within a DragProvider");
  }
  return context;
};

type ProviderProps = {
  children: React.ReactNode;
};

export default function DragComponentProvider({ children }: ProviderProps) {
  const { components, setComponents } = useGetDrag();
  return (
    <DragContext.Provider value={{ components, setComponents }}>
      {children}
    </DragContext.Provider>
  );
}
