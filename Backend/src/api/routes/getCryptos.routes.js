const express = require("express");
const {
  getCryptos,
  getCryptoById,
} = require("../controllers/getCryptos.controllers");
const { addInvestment } = require("../controllers/investments.controller.js");

const router = express.Router();

router.get("/cryptos", getCryptos);
router.get("/crypto/:id", getCryptoById);
router.post("/investments", addInvestment);

module.exports = router;
