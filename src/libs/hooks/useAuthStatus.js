import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import requestApi from "../const/api";

function useAuthStatus() {
  const { pathname } = useLocation();
  const [isAuth, setIsAuth] = useState(false);

  const setAuthStatus = async () => {
    const result = await requestApi("get", "/check-login");
    setIsAuth(result.isAuthenticated);
  };

  useEffect(() => {
    setAuthStatus();
  }, [pathname]);

  return {
    isAuth,
  };
}

export default useAuthStatus;
