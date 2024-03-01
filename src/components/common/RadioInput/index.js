import { useEffect, useState } from "react";
import { Flex } from "../../../styles/common";

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
    <Flex row>
      {options.map((option) => (
        <label key={option.value} style={{ flex: 1 }}>
          <input
            style={{ display: "none" }}
            type="radio"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={handleOptionChange}
          />
          {option.label}
        </label>
      ))}
    </Flex>
  );
}
