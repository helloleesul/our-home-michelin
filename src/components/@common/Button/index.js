import * as S from "./style";

export default function Button({
  type,
  value,
  disabled,
  width,
  onClick,
  children,
}) {
  // type: "submit" | "reset" | "button"
  return (
    <S.Button type={type} disabled={disabled} width={width} onClick={onClick}>
      {value}
      {children}
    </S.Button>
  );
}
