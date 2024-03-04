import * as S from "./style";

export default function Split({ left, right, size }) {
  return (
    <S.Layout size={size}>
      <aside>{left}</aside>
      <div>{right}</div>
    </S.Layout>
  );
}
