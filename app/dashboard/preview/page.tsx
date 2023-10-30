"use client";

import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { StorageComponentsType } from "../drag/DropArea/type";

const Preview: FC = () => {
  const router = useRouter();
  const [jsonParse, setJsonParse] = React.useState<StorageComponentsType[]>([]);

  React.useEffect(() => {
    const json = localStorage.getItem("preview");
    if (json) {
      setJsonParse(JSON.parse(json));
    }
  }, []);

  if (jsonParse.length === 0) return <p>沒有暫儲的東西</p>;
  return (
    <div className="w-full h-screen bg-black relative overflow-auto p-5">
      <button className="text-white mb-2" onClick={() => router.back()}>
        {"<"}Back Page
      </button>

      {/* {jsonParse.map((data: StorageComponentsType) => {
        const Component =
          FrontTempBoxs[data.type as keyof typeof FrontTempBoxs];
        return (
          <div className="relative my-2" key={data.id}>
            <Component data={data} />
          </div>
        );
      })} */}
    </div>
  );
};
export default Preview;
