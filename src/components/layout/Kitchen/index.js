import { Outlet } from "react-router-dom";
import { MY_MENU_LIST } from "@/libs/constants/listItems";
import { Flex, NavLink } from "@/styles/common";
import Title from "@/components/@common/Title";
import Split from "../Split";

export default function Kitchen() {
  return <Split left={<SideNav />} right={<Outlet />} size={[1, 3]} />;
}

function SideNav() {
  return (
    <div style={{ padding: "20px 0" }}>
      <Flex gap={"50"}>
        <Title icon={"🧑‍🍳"} title={"나의 주방"} type={"primary"} />
        <Flex gap={"20"}>
          {MY_MENU_LIST?.map((menu, i) => (
            <NavLink key={`menu-${i}`} to={menu.to}>
              {menu.value}
            </NavLink>
          ))}
        </Flex>
      </Flex>
    </div>
  );
}
