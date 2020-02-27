const express = require("express");
const dotenv = require("dotenv");

const server = express();

dotenv.config({ path: "./config/config.env" });

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
