"use client"

import React, { createContext, useState, useContext, FC } from 'react';
import { useEffect } from 'react';
import { tempBoxs } from './templates';
import { ComponentInfoType, StorageComponentsType } from './type';


type DragContextType = {
    components: ComponentInfoType[];
    setComponents: React.Dispatch<React.SetStateAction<ComponentInfoType[]>>;
};

const DragContext = createContext<DragContextType | null>(null);

export const useDragComponent = () => {
    const context = useContext(DragContext);
    if (!context) {
        throw new Error('useDrag must be used within a DragProvider');
    }
    return context;
};

type ProviderProps = {
    children: React.ReactNode
}

export default function DragComponentProvider({ children }: ProviderProps) {
    const [components, setComponents] = useState<ComponentInfoType[]>([]);
    useEffect(() => {
        const Json = typeof window !== "undefined" && localStorage.getItem("preview")
        if (!Json || JSON.parse(Json).length === 0) return
        const JsonParse = JSON.parse(Json)
        const SaveResult = JsonParse.map((ele: StorageComponentsType) => {
            return { ...ele, component: tempBoxs[ele.type as keyof typeof tempBoxs] }
        })
        setComponents(SaveResult)
    }, [])
    return (
        <DragContext.Provider value={{ components, setComponents }}>
            {children}
        </DragContext.Provider>
    );
}
