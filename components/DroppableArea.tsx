import { useRouter } from "next/navigation";
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
    const router = useRouter()
    const preventDefault = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const handleSave = () => {
        const saveJson = components.map((ele) => {
            const { component, ...otherEle } = ele
            let images
            let image
            let bg
            if (otherEle.images) {
                images = otherEle.images.map((item) => {
                    return URL.createObjectURL(item?.file)
                })
            }
            if (otherEle.image) {
                image = URL.createObjectURL(otherEle.image)
            }
            if (otherEle.bg) {
                bg = URL.createObjectURL(otherEle.bg)
            }
            return { ...otherEle, images, image, bg }
        })
        localStorage.setItem("preview", JSON.stringify(saveJson))
        console.log(saveJson)
    }

    const handlePreview = () => {
        handleSave()
        router.push('/preview')
    }

    return (
        <div
            onDrop={onDrop}
            onDragOver={preventDefault}
            className="w-full h-screen bg-black relative overflow-auto p-5"
        >
            {components.map((Comp) => (
                <div
                    className="relative border border-solid rounded-xl overflow-hidden mb-2"
                    key={Comp.id}
                >
                    <CompTool id={Comp.id} />
                    {/* {focus === Comp.id ? <CompTool id={Comp.id} /> : null} */}
                    <Comp.component id={Comp.id} />
                </div>
            ))}
            <div className="fixed bottom-4 left-1/2 -translate-x-1/2 text-white bg-red-600 px-4 rounded-lg font-semibold flex items-center">
                <div
                    className="cursor-pointer border-r border-solid border-white pr-2"
                    onClick={clear}
                >
                    清除
                </div>
                <div
                    className="ml-2 cursor-pointer border-r border-solid border-white pr-2"
                    onClick={handleSave}
                >
                    儲存
                </div>
                <div
                    className="ml-2 cursor-pointer border-r border-solid border-white pr-2"
                    onClick={handlePreview}
                >
                    預覽
                </div>
                <div
                    className="ml-2 cursor-pointer"
                    onClick={() => console.log("components", components)}
                >
                    Console
                </div>
            </div>
        </div>
    );
};

export default DroppableArea;
