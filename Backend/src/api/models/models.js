const mongoose = require("mongoose");

const balanceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  bitcoin: {
    type: Number,
    default: 0,
  },
  ethereum: {
    type: Number,
    default: 0,
  },
  cardano: {
    type: Number,
    default: 0,
  },
});

const cryptocurrencySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  symbol: {
    type: String,
    required: true,
  },
  priceUsd: {
    type: Number,
    required: true,
  },
  marketCapUsd: {
    type: Number,
    required: true,
  },
});

const Balance = mongoose.model("Balance", balanceSchema);
const Cryptocurrency = mongoose.model("Cryptocurrency", cryptocurrencySchema);

module.exports = {
  Balance,
  Cryptocurrency,
};
