import axios from "axios";
import { APIURL } from "@/constant";
import { v4 as uuidv4 } from "uuid";

export async function uploadFile(file: File) {
  const uuid = uuidv4();
  const formData = new FormData();
  const extension = file.name.split(".").pop();
  formData.append("file", file, uuid + "." + extension);
  await axios.post(`${APIURL}/upload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return `${APIURL}/photos/images/${uuid + "." + extension}`;
}
