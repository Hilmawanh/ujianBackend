const express = require("express");
const BodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const PORT = 2021;

app.use(cors());
app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());
app.use(express.static("public"));

app.get("/", (req, res) => res.send("<h1>Hello Friend's<h1>"));

const { authRouters, manageCategorie, connectionMovCat } = require("./router");

app.use("/auth", authRouters);
app.use("/movie", manageCategorie);
app.use("/connect", connectionMovCat);

app.listen(PORT, console.log(`Server running on port : ${PORT}`));
