const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require('path');

dotenv.config();
const Router = require("./routes/auth")
const bodyParser = require('body-parser');
const propertyRouter = require('./routes/propertyRouter.js')


const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use("/api/property", propertyRouter );
app.use("/api/auth", Router);
app.use("/uploads", express.static("uploads"));
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
