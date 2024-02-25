import { MY_MENU_LIST } from "../../../libs/const/menuList";
import SubmenuLayout from "../SubmenuLayout";

export default function MyLayout({ children }) {
  return (
    <SubmenuLayout icon={"🧑‍🍳"} title={"나의 주방"} menuList={MY_MENU_LIST}>
      {children}
    </SubmenuLayout>
  );
}
