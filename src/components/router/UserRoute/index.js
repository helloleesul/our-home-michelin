import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth } from "@/libs/store/authSlice";
import { useEffect } from "react";
import useModals from "@/libs/hooks/useModals";
import Alert from "@/components/common/Alert";
import { ONLY_USER } from "@/libs/constants/alertData";

export default function UserRoute() {
  const { isAuthenticated } = useSelector(selectAuth);
  const { openModal } = useModals();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      openModal(Alert, {
        ...ONLY_USER,
        onAfterClose: () => navigate("/login"),
      });
    }
  }, [isAuthenticated, navigate, openModal]);

  if (isAuthenticated) {
    return <Outlet />;
  } else {
    return null;
  }
}
