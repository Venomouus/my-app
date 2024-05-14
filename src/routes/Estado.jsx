/* eslint-disable no-unused-vars */
import axios from "axios"
import blogFetch from "../axios/config"
import { useState, useEffect } from "react"

import { Link } from "react-router-dom"
import "./Home.css"

const Home = () => {
    const [selectedState, setSelectedState] = useState(''); // Estado selecionado no componente de seleção
    const [stateData, setStateData] = useState([]); // Estado para armazenar os dados do estado selecionado
  
    const fetchData = async () => {
      try {
        const response = await blogFetch.get('/api/report/v1');
        setStateData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const handleStateChange = (e) => {
      setSelectedState(e.target.value);
    };
  
    const filteredData = stateData.find((item) => item.state === selectedState);
  
    return (
      <div className="status-covid">
        <h1>Status da COVID-19 por Estado</h1>
        <select onChange={handleStateChange}>
          <option value="">Selecione um estado</option>
          {stateData.map((item) => (
            <option key={item.uid} value={item.state}>
              {item.uf} - {item.state}
            </option>
          ))}
        </select>
        {filteredData && (
          <div>
            <h2>{filteredData.uf} - {filteredData.state}</h2>
            <p>Casos: {filteredData.cases}</p>
            <p>Mortes: {filteredData.deaths}</p>
            <p>Suspeitos: {filteredData.suspects}</p>
          </div>
        )}
      </div>
    );
  };

export default Home