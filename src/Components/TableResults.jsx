const TableResults = ({ installment }) => {
    return (
      <div className="result-container">
        <h2>Resultado</h2>
        <p>Prestação Mensal: <strong>R$ {installment}</strong></p>
      </div>
    );
  };
  
  export default TableResults;