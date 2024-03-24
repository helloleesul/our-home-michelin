import theme from "@/styles/theme";
import * as S from "./style";
import { Contents } from "@/styles/common";

export default function Split({ left, right, size }) {
  return (
    <S.Layout size={size}>
      <aside style={{ borderRight: `1px solid ${theme.PALETTE.mainColor}` }}>
        <Contents>{left}</Contents>
      </aside>
      <div>
        <Contents>{right}</Contents>
      </div>
    </S.Layout>
  );
}
