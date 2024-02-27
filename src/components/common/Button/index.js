import * as S from "./style";

export default function Button({ type, value, disabled, width, onClick }) {
  // type: "submit" | "reset" | "button"
  return (
    <S.Button type={type} disabled={disabled} width={width} onClick={onClick}>
      {value}
    </S.Button>
  );
}
