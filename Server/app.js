const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const authRouter = require("./routes/authRoute.js")

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
