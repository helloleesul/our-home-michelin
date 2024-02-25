import Title from "../../common/Title";
import SplitLayout from "../SplitLayout";
import { FlexColumn, WidthBox, NavLink } from "../../../styles/common";
import { useLocation } from "react-router-dom";

export default function SubmenuLayout({ icon, title, children, menuList }) {
  const { pathname, search } = useLocation();

  return (
    <SplitLayout
      left={
        <FlexColumn gap={"50"} center>
          <Title icon={icon} title={title} />
          <WidthBox width={"50"}>
            <FlexColumn gap={"20"}>
              {menuList?.map((menu, i) => (
                <NavLink
                  key={`menu-${i}`}
                  to={menu.to}
                  className={`${pathname}${search}` === menu.to ? "active" : ""}
                >
                  {menu.value}
                </NavLink>
              ))}
            </FlexColumn>
          </WidthBox>
        </FlexColumn>
      }
      right={children}
      size={[2, 4]}
    />
  );
}
