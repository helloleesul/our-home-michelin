import { useEffect, useState } from "react";
import * as S from "./style";

export default function Select({
  options,
  onChange,
  defaultMessage,
  defaultOption,
}) {
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  useEffect(() => {
    setSelectedOption(defaultOption);
  }, [defaultOption]);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    onChange(e.target.value);
  };

  return (
    <S.SelectWrap value={selectedOption} onChange={handleOptionChange}>
      <option value="">{defaultMessage}</option>
      {options.map((option) => (
        <option key={option.value} value={option.label}>
          {option.label}
        </option>
      ))}
    </S.SelectWrap>
  );
}
