import React, { FC } from 'react';
import Image from 'next/image';

interface DraggableComponentProps {
    data: {
        img: string;
        type: string;
        name: string;
    }
    onDragStart: (e: React.DragEvent, type: string) => void;
}

const DraggableComponent: FC<DraggableComponentProps> = ({ data, onDragStart }) => {
    const { img, type, name } = data
    return (
        <div
            draggable
            onDragStart={(e) => onDragStart(e, type)}
            className='m-2 border border-solid border-black rounded-xl overflow-hidden flex flex-col items-center'
        >
            <Image src={img} width={132} height={93.5} alt="Image" />
            <p>{name}</p>
        </div>
    );
};

export default DraggableComponent;

