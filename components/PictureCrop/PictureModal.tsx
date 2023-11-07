import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { FC, useState } from "react";
import { Button } from "../ui/button";
import ReactDOM from "react-dom";

type PictureModalProps = {
  selectedFile: string;
  closeModal: () => void;
  onComplete: (image: string) => void;
  aspectRatio: number;
};

const PictureModal: FC<PictureModalProps> = ({
  selectedFile,
  aspectRatio,
  onComplete,
  closeModal,
}) => {
  const [cropper, setCropper] = useState<any>();

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      const originalCanvas = cropper.getCroppedCanvas();
      let width = originalCanvas.width;
      let height = originalCanvas.height;

      let scale = 1;

      if (width > 1080) {
        scale = 1080 / width;
        width = 1080;
        height = height * scale;
      }

      // 創建一個新的 canvas 來保存壓縮後的圖像
      const compressedCanvas = document.createElement("canvas");
      const compressedContext = compressedCanvas.getContext("2d");
      compressedCanvas.width = width;
      compressedCanvas.height = height;
      // 使用 drawImage 方法將原始 canvas 的內容繪製到新 canvas 上，實現壓縮
      if (!compressedContext) return;
      compressedContext.drawImage(originalCanvas, 0, 0, width, height);

      // 獲取壓縮後的圖像（這里用的是 toDataURL，但你也可以用 toBlob）
      compressedCanvas.toBlob((blob: any) => {
        const imageUrl = URL.createObjectURL(blob);
        // 你現在可以使用這個 imageUrl
        console.log("Blob URL:", imageUrl);
        onComplete(imageUrl);
        closeModal();
      }, "image/webp");
      // setPicture(cropper.getCroppedCanvas().toDataURL());
      console.log(cropper.getCroppedCanvas());
    }
  };

  return ReactDOM.createPortal(
    <div className="text-black fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-[999]">
      <div className="bg-black border border-solid border-blue-900 p-2 rounded-lg">
        <div className="cropper ">
          <Cropper
            style={{ height: 300, width: 380 }}
            zoomTo={0}
            initialAspectRatio={1}
            preview=".img-preview"
            src={selectedFile}
            viewMode={1}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            aspectRatio={aspectRatio}
            background={false}
            responsive={true}
            autoCropArea={1}
            checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
            onInitialized={(instance: any) => {
              setCropper(instance);
            }}
            guides={true}
          />
        </div>
        <div className="w-full flex mt-2 justify-around">
          <Button onClick={closeModal}>取消</Button>
          <Button onClick={getCropData}>確認</Button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default PictureModal;
