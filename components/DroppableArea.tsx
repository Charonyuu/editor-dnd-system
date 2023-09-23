import { useRouter } from "next/navigation";
import React, { FC } from "react";
import CompTool from "./CompTool";
import { useDragComponent } from "./DragProvider";
import { tempBoxs } from "./templates";

const DroppableArea: FC = () => {
    const router = useRouter()
    const { components, setComponents } = useDragComponent()
    const preventDefault = (e: React.DragEvent) => {
        e.preventDefault();
    };
    const handleOnDrop = (e: React.DragEvent) => {
        const CompType = e.dataTransfer.getData("component_type");
        const Component = { component: tempBoxs[CompType as keyof typeof tempBoxs], id: Date.now(), type: CompType };

        setComponents([...components, Component]);
    };

    const handleClear = () => {
        setComponents([])
    }

    const handleSave = async () => {
        const saveJson = await Promise.all(
            components.map(async (ele) => {
                let { component, ...otherEle } = ele
                let images
                let image
                let bg
                if (otherEle.images) {
                    images = await Promise.all(
                        otherEle.images.map(async (item) => {
                            // 如果是字符串，直接返回
                            if (typeof item === "string") return item;

                            // 如果是File（或Blob），读取为DataURL
                            return new Promise((resolve) => {
                                const reader = new FileReader();
                                reader.onload = () => resolve(reader.result);
                                reader.readAsDataURL(item as File);
                            });
                        })
                    );
                }
                if (otherEle.image) {
                    image = await new Promise((resolve) => {
                        if (typeof otherEle.image === "string") return resolve(otherEle.image);

                        const reader = new FileReader();
                        reader.onload = () => resolve(reader.result);
                        reader.readAsDataURL(otherEle.image as File); // 使用 as File 进行类型断言
                    });
                }
                if (otherEle.bg) {
                    bg = await new Promise((resolve) => {
                        if (typeof otherEle.bg === "string") return resolve(otherEle.bg);

                        const reader = new FileReader();
                        reader.onload = () => resolve(reader.result);
                        reader.readAsDataURL(otherEle.bg as File); // 使用 as File 进行类型断言
                    });
                }
                return { ...otherEle, images, image, bg }
            })
        );
        localStorage.setItem("preview", JSON.stringify(saveJson))
        console.log(saveJson)
    }

    const handlePreview = () => {
        handleSave()
        router.push('/preview')
    }

    return (
        <div
            onDrop={handleOnDrop}
            onDragOver={preventDefault}
            className="w-full h-screen bg-black relative overflow-auto p-5"
        >
            {components.map((Comp) => (
                <div
                    className="relative border border-solid rounded-xl overflow-hidden mb-2"
                    key={Comp.id}
                >
                    <CompTool id={Comp.id} />
                    <Comp.component id={Comp.id} />
                </div>
            ))}
            <div className="fixed bottom-4 left-1/2 -translate-x-1/2 text-white bg-red-600 px-4 rounded-lg font-semibold flex items-center">
                <div
                    className="cursor-pointer border-r border-solid border-white pr-2"
                    onClick={handleClear}
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
