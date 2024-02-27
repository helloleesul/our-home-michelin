import { useEffect, useState } from "react";

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
    <div>
      {options.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={handleOptionChange}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
}
