import React from 'react';
import './CountryCard.css';

export default function CountryCard({ name, continent, iso2 }) {
  const letters = iso2.toLowerCase();
  return (
    <div className="card">
      <h4>{name}</h4>
      <img src={`https://flagcdn.com/32x24/${letters}.png`} />
      <p>{continent}</p>
    </div>
  );
}
