import { APIURL } from "@/constant";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useSignIn() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function login(account: string, password: string) {
    if (!account) return setError("請輸入帳號");
    if (!password) return setError("請輸入密碼");
    try {
      setLoading(true);
      const res = await axios.post(
        `${APIURL}/signIn`,
        {
          account,
          password,
        },
        {
          withCredentials: true, // 啟用credentials（包括cookies）
        }
      );
      if (res.status === 200) {
        router.push("/drag");
      }
    } catch (err) {
      setError(String(err));
    } finally {
      setLoading(false);
    }
  }

  return { login, loading, error };
}
