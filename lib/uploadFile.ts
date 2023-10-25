import axios from "axios";
import { APIURL } from "@/constant";
import { v4 as uuidv4 } from "uuid";

async function blobURLtoFile(blobUrl: string, fileName: string) {
  const response = await fetch(blobUrl);
  const blob = await response.blob();
  // console.log(new File([blob], fileName, { type: blob.type }));
  return new File([blob], fileName, { type: blob.type });
}

export async function uploadFile(blob: string) {
  const uuid = uuidv4();
  const file = await blobURLtoFile(blob, uuid + ".webp");
  const formData = new FormData();

  formData.append("file", file, uuid + ".webp");
  await axios.post(`${APIURL}/upload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return `${APIURL}/photos/images/${uuid + ".webp"}`;
}
