"use client"
import React, { useState } from "react";
import { BsCheck } from 'react-icons/bs'
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button";
export default function Pricing() {
    const [monthPay, setMonthPay] = useState(true)

    return (
        <div className="mt-4 ">
            <p className="text-2xl mx-4">價格方案 Pricing</p>
            <div className="flex w-full justify-center">
                <p className={monthPay ? "text-white" : "text-gray-500"}>月付</p>
                <Switch className="mx-4" onClick={() => setMonthPay(!monthPay)} checked={!monthPay} />
                <p className={!monthPay ? "text-white" : "text-gray-500"}>半年付</p>
            </div>


            <div className="flex flex-wrap justify-between px-4 w-screen py-6">
                {/* Card */}
                <div className="w-[300px] bg-black border-white border border-solid rounded-lg px-6 pt-8 pb-12 ">
                    <div className="flex items-center my-2">
                        <p>免費方案</p>
                        <p className=" ml-2">$0</p>
                    </div>
                    <p className="text-center text-3xl">$0<span className="text-sm">NTD</span></p>
                    <div className="flex justify-center my-2"><Button>立刻體驗</Button></div>
                    <p className="flex items-center my-1"><BsCheck className="mr-1" fontSize="20px" color="green" />8個方塊</p>
                    <p className="flex items-center my-1"><BsCheck className="mr-1" fontSize="20px" color="green" />電腦版模式 RWD</p>
                    <p className="flex items-center my-1"><BsCheck className="mr-1" fontSize="20px" color="green" />基礎後臺數據</p>
                    <p className="flex items-center my-1"><BsCheck className="mr-1" fontSize="20px" color="green" />國際收款 Paypal</p>
                </div>
                <div className="w-[300px] bg-black border-white border border-solid rounded-lg px-6 pt-8 pb-12 ">
                    <div className="flex items-center my-2">
                        <p>中級會員</p>
                        <p className="line-through ml-2">$4800</p>
                    </div>
                    <p className="text-center text-3xl">$4000<span className="text-sm">NTD</span></p>
                    <div className="flex justify-center my-2"><Button>立刻體驗</Button></div>
                    <p className="flex items-center my-1"><BsCheck className="mr-1" fontSize="20px" color="green" />無限方塊</p>
                    <p className="flex items-center my-1"><BsCheck className="mr-1" fontSize="20px" color="green" />SEO</p>
                    <p className="flex items-center my-1"><BsCheck className="mr-1" fontSize="20px" color="green" />區塊空間無上限</p>
                    <p className="flex items-center my-1"><BsCheck className="mr-1" fontSize="20px" color="green" />完整後臺數據、GA / Pixel 安裝</p>
                    <p className="flex items-center my-1"><BsCheck className="mr-1" fontSize="20px" color="green" />電腦版模式 RWD</p>
                    <p className="flex items-center my-1"><BsCheck className="mr-1" fontSize="20px" color="green" />自訂網域 Domain Name</p>
                    <p className="flex items-center my-1"><BsCheck className="mr-1" fontSize="20px" color="green" />國際收款 Paypal</p>
                </div>
                <div className="w-[300px] bg-black border-white border border-solid rounded-lg px-6 pt-8 pb-12 ">
                    <div className="flex items-center my-2">
                        <p>高級會員</p>
                        <p className="line-through ml-2">$9600</p>
                    </div>
                    <p className="text-center text-3xl">$8000<span className="text-sm">NTD</span></p>
                    <div className="flex justify-center my-2"><Button>立刻體驗</Button></div>
                    <p className="flex items-center my-1"><BsCheck className="mr-1" fontSize="20px" color="green" />無限方塊</p>
                    <p className="flex items-center my-1"><BsCheck className="mr-1" fontSize="20px" color="green" />客製化設計</p>
                    <p className="flex items-center my-1"><BsCheck className="mr-1" fontSize="20px" color="green" />搶先體驗功能</p>
                    <p className="flex items-center my-1"><BsCheck className="mr-1" fontSize="20px" color="green" />SEO</p>
                    <p className="flex items-center my-1"><BsCheck className="mr-1" fontSize="20px" color="green" />區塊空間無上限</p>
                    <p className="flex items-center my-1"><BsCheck className="mr-1" fontSize="20px" color="green" />完整後臺數據、觀看者分析</p>
                    <p className="flex items-center my-1"><BsCheck className="mr-1" fontSize="20px" color="green" />電腦版模式 RWD</p>
                    <p className="flex items-center my-1"><BsCheck className="mr-1" fontSize="20px" color="green" />自訂網域 Domain Name</p>
                    <p className="flex items-center my-1"><BsCheck className="mr-1" fontSize="20px" color="green" />國際收款 Paypal</p>
                </div>
            </div>
        </div>
    );
}
