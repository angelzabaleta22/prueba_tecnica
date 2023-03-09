const axios = require("axios");

exports.getCryptos = async (req, res) => {
  try {
    const cryptos = await axios.get(process.env.CRYPTO_URL);
    console.log(cryptos);
    res.send(cryptos.data);
  } catch (error) {
    console.error(error);
  }
};

exports.getCryptoById = async (req, res) => {
  try {
    const cryptosResponse = await axios.get(process.env.CRYPTO_URL);
    const cryptoId = req.params.id; // asumiendo que el ID se pasa en la ruta como un parámetro de solicitud
    const crypto = cryptosResponse.data.data.find(
      (crypto) => crypto.id === cryptoId
    );

    res.send(crypto);
  } catch (error) {
    console.error(error);
  }
};
