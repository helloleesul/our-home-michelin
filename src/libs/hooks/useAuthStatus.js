import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import requestApi from "../const/api";

function useAuthStatus() {
  const { pathname } = useLocation();
  const [isAuth, setIsAuth] = useState(false);
  const [isAuthUser, setIsAuthUser] = useState({});

  const setAuthStatus = async () => {
    const result = await requestApi("get", "/check-login");
    console.log(result);
    setIsAuth(result.isAuthenticated);
    setIsAuthUser(result.user);
  };

  useEffect(() => {
    setAuthStatus();
  }, [pathname]);

  return {
    isAuth,
    isAuthUser,
  };
}

export default useAuthStatus;
