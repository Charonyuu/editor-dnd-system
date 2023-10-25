import React, { useRef, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import PictureModal from "./PictureModal";

type Props = {
  onComplete: (image: string) => void;
  aspectRatio: number;
};

type CropType = {
  isOpen: boolean;
  file: string ;
};

export default function PictureCrop({ onComplete, aspectRatio }: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [crop, setCrop] = useState<CropType>({
    isOpen: false,
    file: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    let files: FileList | null = e.target.files;
    const reader = new FileReader();
    reader.onload = () => {
       if (typeof reader.result === "string") {
         setCrop({
           isOpen: true,
           file: reader.result,
         });
       }
    };
    if (files && files[0]) {
      reader.readAsDataURL(files[0]);
    }
  }
  function closeModal() {
    setCrop({
      isOpen: false,
      file: "",
    });
  }

  return (
    <>
      <div
        className="group-hover:flex absolute top-0 left-0 hidden bg-black bg-opacity-40 items-center justify-center w-full h-full object-cover cursor-pointer"
        onClick={() => {
          inputRef.current?.click();
        }}
      >
        <BiImageAdd />
        <input type="file" onChange={handleChange} hidden ref={inputRef} />
      </div>
      {crop.isOpen ? (
        <PictureModal
          selectedFile={crop.file}
          onComplete={onComplete}
          closeModal={closeModal}
          aspectRatio={aspectRatio}
        />
      ) : null}
    </>
  );
}
