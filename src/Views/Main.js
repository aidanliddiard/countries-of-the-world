import React, { useState, useEffect } from 'react';
import CountryCard from '../Components/CountryCard';
import { fetchCountry } from '../services/country';

export default function Main() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchCountry();
      setCountries(resp);
    };
    fetchData();
  }, []);

  return (
    <div>
      {countries.map((country) => (
        <CountryCard key={country.id} {...country} />
      ))}
    </div>
  );
}
