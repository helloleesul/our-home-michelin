import * as S from "./style";

export default function Checkbox({ id, label, onChange, checked }) {
  return (
    <S.Group>
      <label htmlFor={id}>{label}</label>
      <img
        src={`/icons/${checked ? "checked" : "check"}.svg`}
        width={20}
        alt=""
      />
      <S.Input
        type="checkbox"
        id={id}
        name={id}
        checked={checked}
        onChange={onChange}
      />
    </S.Group>
  );
}
