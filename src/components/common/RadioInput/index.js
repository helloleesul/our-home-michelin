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
    <div
      style={{ display: "flex", justifyContent: "space-between", flexGrow: 1 }}
    >
      {options.map((option) => (
        <label
          key={option.value}
          style={{ flex: 1, textAlign: "center" }}
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
        </label>
      ))}
    </div>
  );
}
