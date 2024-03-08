import { useEffect, useState } from "react";
import * as S from "./style";

export default function RadioInput({ options, onChange, defaultSelected }) {
  const [selectedOption, setSelectedOption] = useState(defaultSelected);

  useEffect(() => {
    setSelectedOption(defaultSelected);
  }, [defaultSelected]);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    onChange(e.target.value);
  };

  return (
    <S.RadioInputWrap>
      {options.map((option) => (
        <S.RadioInputLabel
          key={option.value}
          className={selectedOption === option.value ? "active" : ""}
        >
          <input
            style={{ display: "none" }}
            type="radio"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={handleOptionChange}
          />
          {option.label}
        </S.RadioInputLabel>
      ))}
    </S.RadioInputWrap>
  );
}
