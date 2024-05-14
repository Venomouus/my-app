// src/components/FormularioCovid.js
import { useState } from 'react';

const FormularioCovid = () => {
  const [formData, setFormData] = useState({
    estado: '',
    casos: '',
    confirmados: '',
    mortos: '',
    recuperados: '',
    data: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:');
    console.log('Estado:', formData.estado);
    console.log('Casos:', formData.casos);
    console.log('Confirmados:', formData.confirmados);
    console.log('Mortos:', formData.mortos);
    console.log('Recuperados:', formData.recuperados);
    console.log('Data:', formData.data);

    // Simulação de envio para uma eventual API
    console.log('JSON gerado:');
    console.log(JSON.stringify(formData));
  };

  const handleClear = () => {
    setFormData({
      estado: '',
      casos: '',
      confirmados: '',
      mortos: '',
      recuperados: '',
      data: '',
    });
  };

  return (
    <div className="formulario-covid">
      <h1>Formulário COVID-19</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="estado"
          placeholder="Estado"
          onChange={handleInputChange}
          value={formData.estado}
          required
        />
        <button type="submit">Enviar</button>
        <button type="button" onClick={handleClear}>Limpar</button>
      </form>
      {Object.keys(formData).length > 0 && (
        <div>
          <h2>Dados enviados:</h2>
          <p><strong>Estado:</strong> {formData.estado}</p>
          <p><strong>Casos:</strong> {formData.casos}</p>
          <p><strong>Confirmados:</strong> {formData.confirmados}</p>
          <p><strong>Mortos:</strong> {formData.mortos}</p>
          <p><strong>Recuperados:</strong> {formData.recuperados}</p>
          <p><strong>Data:</strong> {formData.data}</p>
        </div>
      )}
    </div>
  );
};

export default FormularioCovid;
