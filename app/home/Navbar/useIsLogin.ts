import React, { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { useCookies } from "next-client-cookies";

export default function useIsLogin() {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const cookie = getCookie("jwt");
    console.log(cookie);
    if (cookie) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);
  return { isLogin };
}
