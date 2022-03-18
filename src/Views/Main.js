import React, { useState, useEffect } from 'react';
import ContinentDropdown from '../Components/ContinentDropdown';
import CountryCard from '../Components/CountryCard/CountryCard';
import { fetchCountry } from '../services/country';
import './Main.css';

export default function Main() {
  const [countries, setCountries] = useState([]);
  const [continent, setContinent] = useState('All');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState('true');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetchCountry();
        setCountries(resp);
        setLoading('false');
      } catch (e) {
        setErrorMessage('Ooops... our bad. Please reload the page.');
      }
    };
    fetchData();
  }, []);

  const options = ['All', 'Africa', 'Asia', 'Europe', 'Oceania', 'North America', 'South America'];

  const filteredCountries = () => {
    return countries.filter((country) => country.continent === continent || continent === 'All');
  };

  if (loading === 'true')
    return (
      <div className="loader">
        <div className="loader">
          <div className="loader">
            <div className="loader">
              <div className="loader">
                <div className="loader">
                  <div className="loader">
                    <div className="loader">
                      <div className="loader"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <main>
      <p>{errorMessage}</p>
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
