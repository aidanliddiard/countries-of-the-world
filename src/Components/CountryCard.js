import React from 'react';

export default function CountryCard({ name, continent, iso2 }) {
  const letters = iso2.toLowerCase();
  return (
    <div>
      <h4>{name}</h4>
      <img src={`https://flagcdn.com/32x24/${letters}.png`} />
      <p>{continent}</p>
    </div>
  );
}
