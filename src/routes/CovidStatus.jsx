import { useState, useEffect } from 'react';
import blogFetch from '../axios/config';
import 'react-datepicker/dist/react-datepicker.css'; 
import "../styles/Status.css"

const CovidStatus = () => {
  const [selectedDate, setSelectedDate] = useState("2020-03-18T23:00:00.000Z");
  const [data, setData] = useState([]); 

  const fetchData = async () => {
    try {
      const response = await blogFetch.get(`/api/report/v1`);
      const responseData = response.data;
      setData(responseData.data);
      console.log(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleStartDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleClearData = () => {
    setData([]); 
  };

  const filteredData = data.find((item) => item.datetime === selectedDate);

  return (
    <div className="status-covid">
      <h1>Status do COVID-19 no Brasil</h1>
      <input type="text" value={selectedDate} onChange={handleStartDateChange} />
      <button type="submit" onClick={fetchData}>Pesquisar</button>
      <button type="button" onClick={handleClearData}>Limpar Dados</button>
      {filteredData && (
        <div className='result'>
          <p>Estado: {filteredData.uf}</p>
          <p>Casos: {filteredData.cases}</p>
          <p>Mortes: {filteredData.deaths}</p>
          <p>Suspeitos: {filteredData.suspects}</p>
        </div>
      )}
    </div>
  );
};

export default CovidStatus;
