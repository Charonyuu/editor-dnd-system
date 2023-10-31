"use client";

import React, { createContext, useState, useContext, FC } from "react";
import useGetDrag from "./useGetDrag";
import { ComponentInfoType } from "../../../../Types/type";

type DragContextType = {
  components: ComponentInfoType[];
  setComponents: React.Dispatch<React.SetStateAction<ComponentInfoType[]>>;
  bgColor: string;
  setBgColor: React.Dispatch<React.SetStateAction<string>>;
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
  const { components, setComponents, bgColor, setBgColor } = useGetDrag();
  return (
    <DragContext.Provider
      value={{ components, setComponents, bgColor, setBgColor }}
    >
      {children}
    </DragContext.Provider>
  );
}
