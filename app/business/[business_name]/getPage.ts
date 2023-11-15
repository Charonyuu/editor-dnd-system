import { StorageComponentsType } from "@/Types/type";
import { APIURL } from "@/constant";
import axios from "axios";
import { FrontTempBoxs } from "./frontTemplates";
import { headers } from "next/headers";

export default async function getPage() {
  const _headers = headers();
  const currentUrl = _headers.get("x-url");
  const name = currentUrl?.split("/business/")[1];

  const { data } = await axios.post(`${APIURL}/getDragsByName`, {
    name,
  });
  const { bgColor, drags } = data;

  const transformedComponents = drags.map((ele: StorageComponentsType) => ({
    ...ele,
    component: FrontTempBoxs[ele.type as keyof typeof FrontTempBoxs],
  }));

  return { components: transformedComponents, bgColor };
}
