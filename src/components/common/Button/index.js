import * as S from "./style";

export default function Button({ type, value, disabled, width }) {
  // type: "submit" | "reset" | "button"
  return (
    <S.Button type={type} disabled={disabled} width={width}>
      {value}
    </S.Button>
  );
}
