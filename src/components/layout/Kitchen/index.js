import { Outlet } from "react-router-dom";
import { MY_MENU_LIST } from "@/libs/constants/listItems";
import { Flex, NavLink, WidthBox } from "@/styles/common";
import Title from "@/components/common/Title";
import Split from "../Split";
import { useSelector } from "react-redux";
import { selectAuth } from "@/libs/store/authSlice";

export default function Kitchen() {
  return <Split left={<SideNav />} right={<Outlet />} size={[2, 4]} />;
}

function SideNav() {
  const { user } = useSelector(selectAuth);
  return (
    <Flex gap={"50"} center>
      <Title icon={"🧑‍🍳"} title={`${user.nickName}의 주방`} type={"primary"} />
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
