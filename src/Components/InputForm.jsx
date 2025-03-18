import { useState } from "react";

const InputForm = ({ onCalculate }) => {
  const [amount, setAmount] = useState("");
  const [interest, setInterest] = useState("");
  const [months, setMonths] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate({ amount, interest, months });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label>Valor do Empréstimo (R$):</label>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />

      <label>Taxa de Juros (% ao mês):</label>
      <input type="number" value={interest} onChange={(e) => setInterest(e.target.value)} required />

      <label>Prazo (meses):</label>
      <input type="number" value={months} onChange={(e) => setMonths(e.target.value)} required />

      <button type="submit">Calcular</button>
    </form>
  );
};

export default InputForm;


