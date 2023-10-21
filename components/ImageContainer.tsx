import React, { SetStateAction } from "react";
import { useRef, useState } from "react";
import { ImageInfoType } from "./type";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDragContext } from "../app/dashboard/drag/DragProvider";
import { useEffect } from "react";
import { DialogClose } from "@radix-ui/react-dialog";
import { APIURL } from "@/constant";

type AddImageProps = {
  id: number;
  index: number;
  item: File | string;
  setItems: React.Dispatch<SetStateAction<ImageInfoType[]>>;
};

export default function ImageContainer({
  id,
  index,
  item,
  setItems,
}: AddImageProps) {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [url, setUrl] = useState("");
  const { components, setComponents } = useDragContext();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const file = files[0]; // Convert FileList to File[]

      setItems((prev) => {
        const temp = [...prev];
        const index = temp.findIndex((ele) => ele === item);
        console.log(index);
        temp[index] = file;
        return temp;
      }); // Now setImage expects File[] which is what we are giving
    }
  };

  const handleSaveURL = () => {
    setComponents((prev) => {
      const Index = prev.findIndex((ele) => ele.id === id);
      if (Index === -1) return prev; // 如果没有找到，返回prev
      prev[Index].url![index] = url; // 如果url存在，更新它

      return prev;
    });
  };

  useEffect(() => {
    const Index = components.findIndex((ele) => ele.id === id);
    setUrl(components[Index].url![index]);
  }, []);
  console.log(item);
  const image =
    typeof item !== "string" ? URL.createObjectURL(item) : APIURL + item;

  return (
    <div
      className="w-[200px] h-[200px] bg-gray-500 rounded-lg relative overflow-hidden cursor-pointer my-2 mr-2"
      onClick={() => imageInputRef.current?.click()}
    >
      <img
        src={image}
        className="w-full h-full object-cover"
        draggable="false"
      />
      <input type="file" hidden ref={imageInputRef} onChange={handleChange} />
      <div
        className="absolute bottom-[10px] left-1/2 -translate-x-1/2 "
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">添加網址</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>設定網址</DialogTitle>
              <DialogDescription>
                點擊照片會幫使用者開啟此網址,不設定則不會
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="url" className="text-right">
                  URL
                </Label>
                <Input
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  id="url"
                  placeholder="輸入網址"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button onClick={handleSaveURL}>Save changes</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
