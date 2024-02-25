import * as S from "./style";

export default function Title({ icon, title, children }) {
  return (
    <>
      <S.Group>
        <span>{icon}</span>
        <S.Header>{title}</S.Header>
      </S.Group>
      {children}
    </>
  );
}
