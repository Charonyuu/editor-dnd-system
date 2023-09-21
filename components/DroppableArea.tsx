import React, { FC, useState } from "react";
import CompTool from "./CompTool";
import { ComponentInfoType } from "./type";

interface DroppableAreaProps {
    clear: () => void;
    onDrop: (e: React.DragEvent) => void;
    components: ComponentInfoType[];
}

const DroppableArea: FC<DroppableAreaProps> = ({
    clear,
    onDrop,
    components,
}) => {
    const [focus, setFocus] = useState(-1);
    const preventDefault = (e: React.DragEvent) => {
        e.preventDefault();
    };
    const handleFocus = (id: number) => {
        setFocus(id);
    };
    const handleBlur = () => {
        setFocus(-1);
    };
    const handleSave = () => {
        console.log(components)
    }

    return (
        <div
            onDrop={onDrop}
            onDragOver={preventDefault}
            className="w-full h-screen bg-black relative overflow-auto"
            onClick={handleBlur}
        >
            {components.map((Comp) => (
                <div
                    className="relative"
                    key={Comp.id}
                    onClick={(e) => {
                        e.stopPropagation();
                        handleFocus(Comp.id);
                    }}
                >
                    {focus === Comp.id ? <CompTool id={Comp.id} /> : null}
                    <Comp.component id={Comp.id} />
                </div>
            ))}
            <div className="fixed bottom-4 left-1/2 -translate-x-1/2 text-red-600 font-semibold flex items-center">
                <div
                    className=" cursor-pointer"
                    onClick={clear}
                >
                    清除測試
                </div>
                <div
                    className="ml-2 cursor-pointer"
                    onClick={handleSave}
                >
                    儲存
                </div>
            </div>
        </div>
    );
};

export default DroppableArea;
