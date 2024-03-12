import theme from "@/styles/theme";
import * as S from "./style";

export default function Split({ left, right, size }) {
  return (
    <S.Layout size={size}>
      <aside style={{ borderRight: `1px solid ${theme.PALETTE.mainColor}` }}>
        {left}
      </aside>
      <div>{right}</div>
    </S.Layout>
  );
}
