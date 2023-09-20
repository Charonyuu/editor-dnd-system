import React, { FC } from 'react';

interface DroppableAreaProps {
    clear: () => void
    onDrop: (e: React.DragEvent, index?: number) => void;
    components: FC[];
}

const DroppableArea: FC<DroppableAreaProps> = ({ clear, onDrop, components }) => {
    const preventDefault = (e: React.DragEvent) => {
        e.preventDefault();
    };

    return (
        <div
            // onDrop={e => onDrop(e)}
            onDragOver={preventDefault}
            className='w-full h-screen bg-gray-400 relative overflow-auto'
        >
            {components.map((Comp, index) => (
                <div
                    key={index}
                    onDrop={e => onDrop(e, index)}
                    onDragOver={preventDefault}
                >
                    <Comp />
                </div>
            ))}
            <div className='fixed bottom-4 left-1/2 -translate-x-1/2 text-red-600 font-semibold cursor-pointer' onClick={clear}>清除測試</div>
        </div>
    );
};

export default DroppableArea;
