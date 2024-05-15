import { useState, useEffect } from 'react';
import blogFetch from "../axios/config"
import "../styles/Status.css"

const StatusCovidPaises = () => {
  const [selectedCountry, setSelectedCountry] = useState(''); 
  const [countryData, setCountryData] = useState([]); 

  const fetchData = async () => {
    try {
      const response = await blogFetch.get('/api/report/v1/countries');
      setCountryData(response.data.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const filteredData = countryData.find((item) => item.country === selectedCountry);

  return (
    <div className="status-covid">
      <h1>Status da COVID-19 em Outros Países</h1>
      <select onChange={handleCountryChange}>
        <option value="">Selecione um país</option>
        {countryData.map((item) => (
          <option key={item.country} value={item.country}>
            {item.country}
          </option>
        ))}
      </select>
      {filteredData && (
        <div className='result'>
          <h2>{filteredData.country}</h2>
          <p>Casos Confirmados: {filteredData.confirmed}</p>
          <p>Mortes: {filteredData.deaths}</p>
          
          
        </div>
      )}
    </div>
  );
};

export default StatusCovidPaises;
