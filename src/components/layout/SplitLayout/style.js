import styled from "@emotion/styled";
import theme from "../../../styles/theme";

export const Layout = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: ${(props) =>
    props.size ? `${props.size[0]}fr ${props.size[1]}fr` : "1fr 3fr"};

  > * {
    padding: ${theme.FONT_SIZE.hg};
  }
`;
