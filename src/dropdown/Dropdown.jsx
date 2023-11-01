import React, { useState } from 'react';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('Option 1');

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h2>Dropdown Example</h2>
      <select value={selectedOption} onChange={handleDropdownChange}>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
}

export default Dropdown;
