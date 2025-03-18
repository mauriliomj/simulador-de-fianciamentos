import { useState } from "react";
import InputForm from "./Components/InputForm";
import TableResults from "./Components/TableResults";  
import { calculateLoan } from "./Utils/CalculateLoan";

const App = () => {
  const [installment, setInstallment] = useState(null);

  const handleCalculation = (data) => {
    const result = calculateLoan(data);
    setInstallment(result);
  };

  return (
    <div className="app-container">
      <h1>Simulador de Financiamento</h1>
      <InputForm onCalculate={handleCalculation} />
      {installment && <TableResults installment={installment} />} 
    </div>
  );
};

export default App;
