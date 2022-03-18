import React, { useState, useEffect } from 'react';
import CountryCard from '../Components/CountryCard/CountryCard';
import { fetchCountry } from '../services/country';
import './Main.css';

export default function Main() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchCountry();
      setCountries(resp);
    };
    fetchData();
  }, []);

  const options = ['All', 'Africa', 'Asia', 'Europe', 'Oceania', 'North America', 'South America'];

  // const dropdownContinents = () => {
  //   return countries.filter((country) => country.continent === continent || type === 'All');
  // };

  return (
    <main>
      {countries.map((country) => (
        <CountryCard key={country.id} {...country} />
      ))}
    </main>
  );
}
