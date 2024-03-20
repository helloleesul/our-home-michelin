import * as S from "./style";

export default function Title({ icon, title, position, type, children }) {
  return (
    <S.Group position={position}>
      {icon ? <span>{icon}</span> : children}
      <S.Header type={type}>{title}</S.Header>
    </S.Group>
  );
}
