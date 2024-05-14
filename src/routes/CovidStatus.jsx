import { useState, useEffect } from 'react';
import blogFetch from '../axios/config';
import DatePicker from 'react-datepicker'; 
import 'react-datepicker/dist/react-datepicker.css'; 

const CovidStatus = () => {
  const [selectedDate, setSelectedDate] = useState(new Date()); 
  const [data, setData] = useState({}); 

  const fetchData = async () => {
    try {
      const formattedDate = selectedDate.toISOString().split('T')[0]; 
      const response = await blogFetch.get(`/api/report/v1?date=${formattedDate}`);
      const dataForDate = response.data.find((item) => item.datetime === formattedDate);
      setData(dataForDate);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedDate]);

  return (
    <div className="covid-status">
      <h1>Status do COVID-19 no Brasil</h1>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
      />
      <button onClick={fetchData}>Pesquisar</button>
      {data.Cases !== undefined && (
        <p>Casos confirmados: {data.Cases}</p>
      )}
      {data.Deaths !== undefined && (
        <div>
          <p>Mortes: {data.Deaths}</p>
          <p>Casos: {data.cases}</p>
          <p>Mortes: {data.deaths}</p>
          <p>Suspeitos: {data.suspects}</p>
        </div>
      )}
    </div>
  );
};

export default CovidStatus;
