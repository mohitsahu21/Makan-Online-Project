const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const Router = require("./routes/auth")
const bodyParser = require('body-parser');


const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api/auth", Router);
app.use("/uploads", express.static("uploads"));
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
