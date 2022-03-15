import React, { useEffect } from 'react';
import CountryCard from '../Components/CountryCard';
import { fetchCountry } from '../services/country';

export default function Main() {
  //const [country, getCountry] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchCountry();
      console.log(resp);
    };
    fetchData();
  }, []);

  return (
    <div>
      <CountryCard />
    </div>
  );
}
