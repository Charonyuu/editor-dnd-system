"use client"

import React, { FC } from 'react';
import DroppableArea from "@/components/DroppableArea";
import DraggableList from '@/components/DraggableList';
import DragComponentProvider from '@/components/Provider/DragProvider';






const Main: FC = () => {
    return (
        <DragComponentProvider>
            <div className="flex">
                <DroppableArea />
                <DraggableList />
            </div>
        </DragComponentProvider>
    );
}

export default Main;
