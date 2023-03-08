const express = require("express");
const routes = require("./routes/getCryptos.routes");
const app = express();
const PORT = process.env.PORT || 3000;
require("dotenv").config();

app.use("/", routes);

app.listen(PORT, () => {
  `Server listening on port ${PORT}`;
});
