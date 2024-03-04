import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth } from "../../../libs/store/authSlice";
import { useEffect } from "react";

export default function GuestRoute() {
  const { isAuthenticated } = useSelector(selectAuth);
  const navigate = useNavigate();

  useEffect(() => {
    isAuthenticated && navigate("/");
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return <Outlet />;
  } else {
    return null;
  }
}
