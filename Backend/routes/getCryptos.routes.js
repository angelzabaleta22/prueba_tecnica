const express = require("express");
const {
  getCryptos,
  getCryptoById,
} = require("../controllers/getCryptos.controllers");

const router = express.Router();

router.get("/cryptos", getCryptos);

router.get("/crypto/:id", getCryptoById);

module.exports = router;
