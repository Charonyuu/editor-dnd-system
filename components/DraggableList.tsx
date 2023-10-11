"use client"

import DraggableComponent from './DraggableComponent';
import React, { FC } from 'react';
import { tempImageList } from './templates';



const DraggableList: FC = () => {
    const handleDragStart = (e: React.DragEvent, CompType: string) => {
        e.dataTransfer.setData("component_type", CompType);
    };
    return (
        <div className='w-[150px] h-screen overflow-auto flex-shrink-0 flex flex-col items-center'>
            {tempImageList.map((data) => (
                <DraggableComponent key={data.type} data={data} onDragStart={handleDragStart} />
            ))}

        </div>
    );
};

export default DraggableList;

