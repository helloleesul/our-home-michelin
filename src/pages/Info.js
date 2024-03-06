import ConfirmWrap from "@/components/user/ConfirmWrap";
import InfoWrap from "@/components/user/InfoWrap";
import { selectAuth } from "@/libs/store/authSlice";
import { useSelector } from "react-redux";

export default function Info() {
  const { isConfirm } = useSelector(selectAuth);

  if (!isConfirm) {
    return <ConfirmWrap />;
  }
  return <InfoWrap />;
}
