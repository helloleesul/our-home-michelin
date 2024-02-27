import { NAV_LIST } from "../../../libs/constants/listItems";
import { Container } from "../../../styles/common";
import * as S from "./style";

export default function Nav() {
  return (
    <S.Nav>
      <Container>
        <S.ListGroup>
          {NAV_LIST.map((menu) => (
            <S.List key={menu.value[0]}>
              <S.Button to={menu.to}>
                <span>{menu.value[0]}</span> - {menu.value[1]}
              </S.Button>
            </S.List>
          ))}
        </S.ListGroup>
      </Container>
    </S.Nav>
  );
}
