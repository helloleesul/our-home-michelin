import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import requestApi from "../const/api";

// isAuth 스토어를 바라보게
function useAuthStatus() {
  // 스토어상태 저장해주는 거
  const { pathname } = useLocation();
  const [isAuth, setIsAuth] = useState(false);
  const [isAuthUser, setIsAuthUser] = useState({});

  const setAuthStatus = async () => {
    const result = await requestApi("get", "/check-login");
    setIsAuth(result.isAuthenticated);
    setIsAuthUser(result.user);
  };

  // const trigger = () => {
  //   setAuthStatus();
  // };

  useEffect(() => {
    setAuthStatus();
    console.log("isAuth", isAuth);
  }, [pathname]);

  return {
    isAuth,
    isAuthUser,
    // trigger,
  };
}

export default useAuthStatus;
