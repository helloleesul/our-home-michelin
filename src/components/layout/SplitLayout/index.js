import * as S from "./style";

export default function SplitLayout({ left, right, size }) {
  return (
    <S.Layout size={size}>
      <aside>{left}</aside>
      <div>{right}</div>
    </S.Layout>
  );
}
