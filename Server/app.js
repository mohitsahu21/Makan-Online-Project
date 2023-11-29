const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const Router = require("./routes/auth")

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", Router);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
