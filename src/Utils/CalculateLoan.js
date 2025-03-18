export const calculateLoan = ({ amount, interest, months }) => {
    const i = interest / 100;
    if (i === 0) return (amount / months).toFixed(2); // Se não houver juros, divide diretamente
    const parcela = (amount * i) / (1 - Math.pow(1 + i, -months));
    return parcela.toFixed(2);
  };
  