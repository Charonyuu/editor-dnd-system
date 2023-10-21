"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";
import useSendMessage, { messageType } from "./useSendMessage";
export default function ContactMe() {
  const [message, setMessage] = useState<messageType>({
    name: "",
    contact: "",
    title: "",
    content: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    type: string
  ) {
    setMessage((prev: messageType) => ({ ...prev, [type]: e.target.value }));
  }

  const { sendMessage } = useSendMessage();

  return (
    <div className=" flex-1 flex  items-center justify-center ">
      <div className="border-white border-solid border w-[500px] p-4 rounded-xl">
        <p className="text-2xl flex items-center">
          <AiOutlineMessage />
          聯絡我們
        </p>
        <p className="text-sm text-gray-300">
          舉報問題、暸解內容或需要客製化服務，歡迎訊息
        </p>

        {/* 填寫資料 */}
        <div className="mt-5">
          <label>姓名或公司名稱:</label>
          <input
            value={message.name}
            onChange={(e) => handleChange(e, "name")}
            placeholder="請輸入姓名或公司名稱"
            className="w-full my-1 bg-transparent border-white border-solid border p-1 rounded-lg"
          />
        </div>
        <div>
          <label>聯絡方式(電話或email):</label>
          <input
            value={message.contact}
            onChange={(e) => handleChange(e, "contact")}
            placeholder="請輸入聯絡方式:電話或email"
            className="w-full my-1 bg-transparent border-white border-solid border p-1 rounded-lg"
          />
        </div>
        <div>
          <label>信件標題:</label>
          <input
            value={message.title}
            onChange={(e) => handleChange(e, "title")}
            placeholder="請輸入標題"
            className="w-full my-1 bg-transparent border-white border-solid border p-1 rounded-lg"
          />
        </div>
        <div>
          <label>回報問題或瞭解詳細:</label>
          <textarea
            value={message.content}
            onChange={(e) => handleChange(e, "content")}
            placeholder="請輸入回報問題或瞭解詳細"
            rows={8}
            className="w-full my-1 bg-transparent border-white border-solid border p-1 rounded-lg resize-none"
          />
        </div>
        <div className="w-full items-center justify-center flex">
          <Button
            className="mx-auto py-0 px-8 w-auto"
            onClick={() => sendMessage(message)}
          >
            傳送
          </Button>
        </div>
        {/* 傳送email */}
        <div className="text-sm text-gray-300 flex items-center justify-center w-full mt-3">
          <p>或傳送email至</p>
          <a
            href={"mailto: draggieweb@gmail.com"}
            className="flex items-center text-white underline ml-1"
          >
            <MdOutlineMail className="text-lg" />
            draggieweb@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
