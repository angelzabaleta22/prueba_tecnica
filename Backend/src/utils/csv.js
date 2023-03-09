const csv = require("csv-parser");
const fs = require("fs");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

// Función para leer un archivo CSV y retornar un array de objetos
function readCsv(filePath) {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => resolve(results))
      .on("error", (error) => reject(error));
  });
}

// Función para escribir datos en un archivo CSV
function writeCsv(filePath, data) {
  const csvWriter = createCsvWriter({
    path: filePath,
    header: Object.keys(data[0]).map((key) => ({ id: key, title: key })),
  });
  return csvWriter.writeRecords(data);
}

module.exports = {
  readCsv,
  writeCsv,
};
