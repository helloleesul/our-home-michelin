import Title from "../../common/Title";
import SplitLayout from "../SplitLayout";
import { Flex, WidthBox, NavLink } from "../../../styles/common";
import { useLocation } from "react-router-dom";

export default function SubmenuLayout({ icon, title, children, menuList }) {
  const { pathname, search } = useLocation();

  return (
    <SplitLayout
      left={
        <Flex gap={"50"} center>
          <Title icon={icon} title={title} />
          <WidthBox width={"50"}>
            <Flex gap={"20"}>
              {menuList?.map((menu, i) => (
                <NavLink
                  key={`menu-${i}`}
                  to={menu.to}
                  className={`${pathname}${search}` === menu.to ? "active" : ""}
                >
                  {menu.value}
                </NavLink>
              ))}
            </Flex>
          </WidthBox>
        </Flex>
      }
      right={children}
      size={[2, 4]}
    />
  );
}
