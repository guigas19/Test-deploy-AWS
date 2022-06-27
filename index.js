const { response } = require("express");
const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ message: "Server is up!" });
});

app.get("/newrouter", (req, res) => {
  return res.json({ message: "Nova rota!!!" });
});

app.post("/teste", (req, res) => {
  const { name, date } = req.body;

  return res.json({ name, date });
});

app.listen(3333, () => console.log("Server is running"));
