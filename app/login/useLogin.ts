import axios from "axios";
import React, { useState } from "react";

export default function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function login(account: string, password: string) {
    if (!account) return setError("請輸入帳號");
    if (!password) return setError("請輸入密碼");
    try {
      setLoading(true);
      await axios.post("api", {
        account,
        password,
      });
    } catch (err) {
      setError(String(err));
    } finally {
      setLoading(false);
    }
  }

  return { login, loading, error };
}
