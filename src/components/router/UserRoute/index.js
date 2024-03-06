import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth } from "@/libs/store/authSlice";
import { useEffect } from "react";
import MESSAGE from "@/libs/constants/message";

export default function UserRoute() {
  const { isAuthenticated } = useSelector(selectAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      alert(MESSAGE.LOGIN.REQUIRED);
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  if (isAuthenticated) {
    return <Outlet />;
  } else {
    return null;
  }
}
