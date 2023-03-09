const axios = require("axios");

exports.addInvestment = async (req, res) => {
  try {
    const investmentData = req.body;

    const cryptosResponse = await axios.get(process.env.CRYPTO_URL);
    const bitcoinPrice = cryptosResponse.data.data.find(
      (crypto) => crypto.id === "bitcoin"
    ).metrics.market_data.price_usd;

    const ethereumPrice = cryptosResponse.data.data.find(
      (crypto) => crypto.id === "ethereum"
    ).metrics.market_data.price_usd;
    const cardanoPrice = cryptosResponse.data.data.find(
      (crypto) => crypto.id === "cardano"
    ).metrics.market_data.price_usd;

    const bitcoinTotal = bitcoinPrice * investmentData.bitcoin;
    const ethereumTotal = ethereumPrice * investmentData.ethereum;
    const cardanoTotal = cardanoPrice * investmentData.cardano;
    const total = bitcoinTotal + ethereumTotal + cardanoTotal;

    const investment = {
      bitcoin: investmentData.bitcoin,
      ethereum: investmentData.ethereum,
      cardano: investmentData.cardano,
      total: total,
    };

    res.status(201).json(investment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al procesar la inversión" });
  }
};
