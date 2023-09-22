"use client"

import { StorageComponentsType } from '@/components/type';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react'
import { FrontTempBoxs } from './frontTemplates';


const Preview: FC = () => {
    const router = useRouter()
    const Json = typeof window !== "undefined" && localStorage.getItem("preview")
    const JsonParse = Json && JSON.parse(Json)

    if (!Json) return <p>沒有暫儲的東西</p>
    return (
        <div className="w-full h-screen bg-black relative overflow-auto p-5">
            <button className='text-white mb-2' onClick={() => router.back()}>{"<"}Back Page</button>

            {JsonParse.map((data: StorageComponentsType) => {

                const Component = FrontTempBoxs[data.type as keyof typeof FrontTempBoxs]
                return (
                    <div
                        className="relative my-2"
                        key={data.id}
                    >
                        {/* {focus === Comp.id ? <CompTool id={Comp.id} /> : null} */}
                        <Component data={data} />
                    </div>
                )
            })}

        </div>
    )
}
export default Preview