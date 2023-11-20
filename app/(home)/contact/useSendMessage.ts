import { useToast } from "@/components/ui/use-toast";
import { APIURL } from "@/constant";
import axios from "axios";
import React, { useState } from "react";

export type messageType = {
  name: string;
  contact: string;
  title: string;
  content: string;
};

export default function useSendMessage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { toast } = useToast();
  async function sendMessage(message: messageType) {
    try {
      setLoading(true);
      await axios.post(`${APIURL}/sendMessage`, { message });
      toast({
        title: "訊息傳送成功",
        description: "收到後回盡快回覆您",
      });
    } catch (error: any) {
      setError(String(error));
    } finally {
      setLoading(false);
    }
  }

  return { sendMessage, loading, error };
}
