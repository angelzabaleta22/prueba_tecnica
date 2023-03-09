const { readCsv } = require("../../utils/csv");

async function getBalanceData() {
  const balanceData = await readCsv("balances.csv");
  return balanceData;
}

module.exports = {
  getBalanceData,
};
