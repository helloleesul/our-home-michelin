import * as S from "./style";

export default function Input({
  id,
  label,
  placeholder,
  value,
  onChange,
  onKeyDown,
  disabled,
  readOnly,
}) {
  return (
    <S.Group>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Input
        type="text"
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        disabled={disabled}
        readOnly={readOnly}
      />
    </S.Group>
  );
}
