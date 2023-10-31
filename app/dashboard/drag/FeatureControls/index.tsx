import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { useDragContext } from "../DragProvider";
import { uploadFile } from "@/lib/uploadFile";
import axios from "axios";
import { APIURL } from "@/constant";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

export default function FeatureControls() {
  const router = useRouter();
  const { toast } = useToast();
  const { components, setComponents, bgColor } = useDragContext();

  const handleClear = () => {
    setComponents([]);
  };

  const handleSave = async () => {
    try {
      const saveJson = await Promise.all(
        components.map(async (ele) => {
          let { component, ...otherEle } = ele;
          let result = { ...otherEle };
          let images;
          if (otherEle.images) {
            images = await Promise.all(
              otherEle.images.map(async (item) => {
                // 如果是字符串，直接返回
                if (!item.img.includes("blob")) return item;

                // 如果是File（或Blob），读取为DataURL
                const image = await uploadFile(item.img);
                return { ...item, img: image };
              })
            );
            result = { ...result, images };
          }
          console.log(result);

          return result;
        })
      );
      console.log("saveJson", saveJson);
      await axios.post(
        `${APIURL}/saveDrags`,
        { data: { bgColor: bgColor, drags: saveJson } },
        {
          withCredentials: true, // 啟用credentials（包括cookies）
        }
      );
      toast({
        title: "儲存完成",
        description: "可以在自己頁面觀看喔",
      });
    } catch (error) {
      console.error("发生错误：", error);
    }
  };

  const handlePreview = async () => {
    localStorage.setItem("preview", JSON.stringify(components));
    router.push("/preview");
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 px-4 rounded-lg font-semibold flex items-center">
      <Button className=" mx-2 py-1 h-fit" onClick={handleClear}>
        清除
      </Button>
      <Button className=" mx-2 py-1 h-fit" onClick={handleSave}>
        儲存
      </Button>
      <Button className=" mx-2 py-1 h-fit" onClick={handlePreview}>
        預覽
      </Button>
      <Button
        className="mx-2 py-1 h-fit"
        onClick={() => console.log("components", components)}
      >
        Console
      </Button>
    </div>
  );
}
