import { APIURL } from "@/constant";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function useSignUp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  async function login(name: string, account: string, password: string) {
    if (!name) return setError("請輸入網站名稱");
    if (!account) return setError("請輸入帳號");
    if (!password) return setError("請輸入密碼");
    try {
      setLoading(true);
      await axios.post(`${APIURL}/SignUp`, {
        name,
        account,
        password,
      });
      router.push("/SignIn");
    } catch (err) {
      setError(String(err));
    } finally {
      setLoading(false);
    }
  }

  return { login, loading, error };
}
