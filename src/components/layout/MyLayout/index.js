import { MY_MENU_LIST } from "../../../libs/const/menuList";
import { Flex, NavLink, WidthBox } from "../../../styles/common";
import Title from "../../common/Title";
import SplitLayout from "../SplitLayout";

export default function MyLayout({ children }) {
  return <SplitLayout left={SideNav} right={children} size={[2, 4]} />;
}

function SideNav() {
  return (
    <Flex gap={"50"} center>
      <Title icon={"🧑‍🍳"} title={"나의 주방"} />
      <WidthBox width={"50"}>
        <Flex gap={"20"}>
          {MY_MENU_LIST?.map((menu, i) => (
            <NavLink key={`menu-${i}`} to={menu.to}>
              {menu.value}
            </NavLink>
          ))}
        </Flex>
      </WidthBox>
    </Flex>
  );
}
