import React, { useState, useEffect } from 'react';
import ContinentDropdown from '../Components/ContinentDropdown';
import CountryCard from '../Components/CountryCard/CountryCard';
import { fetchCountry } from '../services/country';
import './Main.css';

export default function Main() {
  const [countries, setCountries] = useState([]);
  const [continent, setContinent] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchCountry();
      setCountries(resp);
    };
    fetchData();
  }, []);

  const options = ['All', 'Africa', 'Asia', 'Europe', 'Oceania', 'North America', 'South America'];

  const filteredCountries = () => {
    return countries.filter((country) => country.continent === continent || continent === 'All');
  };

  return (
    <main>
      <div className="dropdown">
        <ContinentDropdown options={options} setContinent={setContinent} />
      </div>
      <div className="list">
        {filteredCountries().map((country) => (
          <CountryCard key={country.id} {...country} />
        ))}
      </div>
    </main>
  );
}
