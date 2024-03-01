import { useState } from "react";

export default function Select({ options, onChange, defaultMessage }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    onChange(e.target.value);
  };

  return (
    <select
      value={selectedOption}
      onChange={handleOptionChange}
      style={{ alignSelf: "stretch" }}
    >
      <option value="">{defaultMessage}</option>
      {options.map((option) => (
        <option key={option.value} value={option.label}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
