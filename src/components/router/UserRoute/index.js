import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth } from "../../../libs/store/authSlice";

export default function UserRoute() {
  const { isAuthenticated } = useSelector(selectAuth);

  if (!isAuthenticated) {
    return <>로그인 후 이용하세요</>;
  } else {
    return <Outlet />;
  }
}
