import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import requestApi from "../const/api";
import { useDispatch } from "react-redux";
import { setAuth } from "../utils/layoutSlice";

function useAuthStatus() {
  const { pathname } = useLocation();
  const [isAuth, setIsAuth] = useState(false);
  const [isAuthUser, setIsAuthUser] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const setAuthStatus = async () => {
      try {
        const result = await requestApi("get", "/check-login");
        dispatch(setAuth(result.isAuthenticated));
        setIsAuth(result.isAuthenticated);
        setIsAuthUser(result.user);
      } catch (err) {}
    };
    setAuthStatus();
  }, [dispatch, pathname]);

  return {
    isAuth,
    isAuthUser,
  };
}

export default useAuthStatus;
