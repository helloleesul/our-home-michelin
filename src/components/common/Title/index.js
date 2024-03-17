import * as S from "./style";

export default function Title({ icon, title, position, type }) {
  return (
    <S.Group position={position}>
      {icon && <span>{icon}</span>}
      <S.Header type={type}>{title}</S.Header>
    </S.Group>
  );
}
