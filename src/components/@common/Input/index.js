import { forwardRef } from "react";
import * as S from "./style";

export default forwardRef(function Input(
  {
    type,
    id,
    label,
    placeholder,
    value,
    onChange,
    onKeyDown,
    disabled,
    readOnly,
    noLabel,
    width,
    max,
    min,
  },
  ref
) {
  return (
    <S.Group>
      {noLabel || <S.Label htmlFor={id}>{label}</S.Label>}
      <S.Input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        disabled={disabled}
        readOnly={readOnly}
        ref={ref}
        width={width}
        max={max}
        min={min}
      />
    </S.Group>
  );
});
