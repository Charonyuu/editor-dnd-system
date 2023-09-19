"use client"
import React, { FC } from 'react';

interface DraggableComponentProps {
    img: string;
    type: string;
    onDragStart: (e: React.DragEvent, type: string) => void;
}

const DraggableComponent: FC<DraggableComponentProps> = ({ img, type, onDragStart }) => {
    return (
        <div
            draggable
            onDragStart={(e) => onDragStart(e, type)}
            className='m-2 border border-solid border-black'
        >
            <img src={img} />
        </div>
    );
};

export default DraggableComponent;

