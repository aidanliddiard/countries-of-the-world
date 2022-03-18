import React from 'react';

export default function ContinentDropdown({ options, setContinent }) {
  return (
    <select onChange={(e) => setContinent(e.target.value)}>
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
}
