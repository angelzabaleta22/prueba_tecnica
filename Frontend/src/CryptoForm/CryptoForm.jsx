import React, { useState } from "react";
import axios from "axios";

const CryptoForm = () => {
  const [bitcoin, setBitcoin] = useState(0);
  const [ethereum, setEthereum] = useState(0);
  const [cardano, setCardano] = useState(0);
  const [total, setTotal] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const investmentData = {
      bitcoin: bitcoin,
      ethereum: ethereum,
      cardano: cardano,
      total: total,
    };
    axios
      .post("http://localhost:3000/investments", investmentData)
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  };

  const handleBitcoinChange = (event) => {
    setBitcoin(event.target.value);
    setTotal(
      parseInt(event.target.value) + parseInt(ethereum) + parseInt(cardano)
    );
  };

  const handleEthereumChange = (event) => {
    setEthereum(event.target.value);
    setTotal(
      parseInt(bitcoin) + parseInt(event.target.value) + parseInt(cardano)
    );
  };

  const handleCardanoChange = (event) => {
    setCardano(event.target.value);
    setTotal(
      parseInt(bitcoin) + parseInt(ethereum) + parseInt(event.target.value)
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="bitcoin">Bitcoin</label>
        <input
          type="number"
          id="bitcoin"
          value={bitcoin}
          onChange={handleBitcoinChange}
        />
      </div>
      <div>
        <label htmlFor="ethereum">Ethereum</label>
        <input
          type="number"
          id="ethereum"
          value={ethereum}
          onChange={handleEthereumChange}
        />
      </div>
      <div>
        <label htmlFor="cardano">Cardano</label>
        <input
          type="number"
          id="cardano"
          value={cardano}
          onChange={handleCardanoChange}
        />
      </div>
      <div>
        <label htmlFor="total">Total</label>
        <input type="number" id="total" value={total} readOnly />
      </div>
      <button type="submit">Invertir</button>
    </form>
  );
};

export default CryptoForm;
