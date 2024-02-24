import { Container } from "../../../styles/common";
import * as S from "./style";

export default function Nav() {
  return (
    <S.Nav>
      <Container>
        <S.ListGroup>
          <S.List>
            <S.Button to="/">
              <span>HOME</span> - 홈
            </S.Button>
          </S.List>
          <S.List>
            <S.Button to="/recipe">
              <span>RECIPE LIST</span> - 레시피
            </S.Button>
          </S.List>
          <S.List>
            <S.Button to="/new-recipe">
              <span>NEW RECIPE</span> - 레시피 만들기
            </S.Button>
          </S.List>
        </S.ListGroup>
      </Container>
    </S.Nav>
  );
}
