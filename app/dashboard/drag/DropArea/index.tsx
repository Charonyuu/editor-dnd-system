"use client";

import { useRouter } from "next/navigation";
import React, { FC } from "react";
import CompTool from "./CompTool";
import { useDragContext } from "../DragProvider";
import { tempBoxs } from "./templates";
import { uploadFile } from "@/lib/uploadFile";
import axios from "axios";
import { APIURL } from "@/constant";
import { useToast } from "@/components/ui/use-toast";

const DroppableArea: FC = () => {
  const router = useRouter();
  const { toast } = useToast();
  const { components, setComponents } = useDragContext();
  const preventDefault = (e: React.DragEvent) => {
    e.preventDefault();
  };
  const handleOnDrop = (e: React.DragEvent) => {
    const CompType = e.dataTransfer.getData("component_type");
    const Component = {
      component: tempBoxs[CompType as keyof typeof tempBoxs],
      id: Date.now(),
      type: CompType,
    };

    setComponents([...components, Component]);
  };

  const handleClear = () => {
    setComponents([]);
  };

  const handleSave = async () => {
    try {
      console.log(components);
      const saveJson = await Promise.all(
        components.map(async (ele) => {
          let { component, ...otherEle } = ele;
          let result = { ...otherEle };
          let images;
          let image;
          let bg;
          if (otherEle.images) {
            images = await Promise.all(
              otherEle.images.map(async (file) => {
                // 如果是字符串，直接返回
                if (!file.image.includes("blob")) return file;

                // 如果是File（或Blob），读取为DataURL
                const image = await uploadFile(file.image);
                return { ...file, image };
              })
            );
            result = { ...result, images };
          }
          if (otherEle.image) {
            console.log(otherEle.image);
            if (!otherEle.image.image.includes("blob"))
              return (result = { ...result, image: otherEle.image });

            const fileName = await uploadFile(otherEle.image.image);
            return (result = {
              ...result,
              image: { ...otherEle.image, image: fileName },
            });
          }
          // if (otherEle.bg) {
          //   if (typeof otherEle.bg === "string")
          //     return (result = { ...result, bg: otherEle.bg });

          //   bg = await uploadFile(otherEle.bg as File);
          //   result = { ...result, bg };
          // }
          return result;
        })
      );
      // localStorage.setItem("preview", JSON.stringify(saveJson))
      await axios.post(
        `${APIURL}/saveDrags`,
        { data: saveJson },
        {
          withCredentials: true, // 啟用credentials（包括cookies）
        }
      );
      toast({
        title: "儲存完成",
        description: "可以在自己頁面觀看喔",
      });
      console.log(saveJson);
    } catch (error) {
      console.error("发生错误：", error);
    }
  };

  const handlePreview = async () => {
    const saveJson = await Promise.all(
      components.map(async (ele) => {
        let { component, ...otherEle } = ele;
        let images;
        let image;
        let bg;
        // if (otherEle.images) {
        //   images = await Promise.all(
        //     otherEle.images.map(async (item) => {
        //       // 如果是字符串，直接返回
        //       if (typeof item === "string") return item;

        //       // 如果是File（或Blob），读取为DataURL
        //       return new Promise((resolve) => {
        //         const reader = new FileReader();
        //         reader.onload = () => resolve(reader.result);
        //         reader.readAsDataURL(item as File);
        //       });
        //     })
        //   );
        // }
        // if (otherEle.image) {
        //   image = await new Promise((resolve) => {
        //     if (typeof otherEle.image === "string")
        //       return resolve(otherEle.image);

        //     const reader = new FileReader();
        //     reader.onload = () => resolve(reader.result);
        //     reader.readAsDataURL(otherEle.image as File); // 使用 as File 进行类型断言
        //   });
        // }
        // if (otherEle.bg) {
        //   bg = await new Promise((resolve) => {
        //     if (typeof otherEle.bg === "string") return resolve(otherEle.bg);

        //     const reader = new FileReader();
        //     reader.onload = () => resolve(reader.result);
        //     reader.readAsDataURL(otherEle.bg as File); // 使用 as File 进行类型断言
        //   });
        // }
        return { ...otherEle, images, image, bg };
      })
    );
    localStorage.setItem("preview", JSON.stringify(saveJson));
    router.push("/preview");
  };

  return (
    <div
      onDrop={handleOnDrop}
      onDragOver={preventDefault}
      className="w-full h-screen bg-black relative overflow-auto p-5"
    >
      {components.map((Comp) => (
        <div
          className="relative border border-solid rounded-xl overflow-hidden mb-2 flex items-center"
          key={Comp.id}
        >
          <Comp.component id={Comp.id} />
          <CompTool id={Comp.id} />
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
