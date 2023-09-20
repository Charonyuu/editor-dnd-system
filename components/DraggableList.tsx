"use client"

import DraggableComponent from './DraggableComponent';
import React, { FC } from 'react';
import { tempImageList } from './templates';


interface DraggableComponentProps {
    handleDragStart: (e: React.DragEvent, data: string) => void;
}

const DraggableList: FC<DraggableComponentProps> = ({ handleDragStart }) => {
    return (
        <div className='w-[150px] h-screen overflow-auto flex-shrink-0 flex flex-col items-center'>
            {tempImageList.map((data) => (
                <DraggableComponent key={data.type} img={data.img} type={data.type} onDragStart={handleDragStart} />
            ))}

        </div>
    );
};

export default DraggableList;

