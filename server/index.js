const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let users = [
  {
    id: 1,
    name: "athif binu",
    age: 22,
  },
  {
    id: 2,
    name: "athif sdvnbinu",
    age: 228,
  },
  {
    id: 3,
    name: "athif bsdvlsdvinu",
    age: 252,
  },
  {
    id: 4,
    name: "athif sdjsdbinu",
    age: 262,
  },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

app.listen(PORT, () => {
  console.log("server is running 3000 port");
});
