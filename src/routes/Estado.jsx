import { useEffect, useState } from 'react';
import blogFetch from '../axios/config';

const Estado = () => {
  const [estado, setEstado] = useState([]);
  const [selectedState, setSelectedState] = useState(''); // Estado selecionado no componente de seleção

  const buscarDados = async () => {
    try {
      const response = await blogFetch.get(`/api/report/v1/`);
      const data = response.data.data;
      console.log(data);

      setEstado(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    buscarDados();
  }, []);

  // Função para atualizar o estado selecionado
  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  // Filtra os dados para exibir apenas o estado selecionado
  const filteredData = estado.find((item) => item.uf === selectedState);

  return (
    <div className="home">
      <h1>Status dos Estados</h1>
      <select onChange={handleStateChange}>
        <option value="">Selecione um estado</option>
        {estado.map((item) => (
          <option key={item.uf} value={item.uf}>
            {item.state}
          </option>
        ))}
      </select>
      {selectedState && filteredData && (
        <div>
          <h2>{filteredData.state}</h2>
          <p>Casos: {filteredData.cases}</p>
          <p>Mortes: {filteredData.deaths}</p>
          <p>Suspeitos: {filteredData.suspects}</p>
        </div>
      )}
    </div>
  );
};

export default Estado;
