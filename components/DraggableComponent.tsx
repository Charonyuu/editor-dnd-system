import React, { FC } from 'react';
import Image from 'next/image';

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
            <Image src={img} width={132} height={93.5} alt="Image" />
        </div>
    );
};

export default DraggableComponent;

