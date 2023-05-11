const express = require("express");

const port = 3000;

const app = express();

// MiddleWare

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

// data

const pokemon = require("./models/pokemon");

// Routes
app.get("/", (req, res) => {
  res.send(`<h1> Welcome to the Pokemon App! </h1>`);
});

app.get("/pokemon", (req, res) => {
  res.render(`../views/Index`, { pokemons: pokemon });
});

app.get("/pokemon/new", (req, res) => {
  res.render("../views/New");
});

// render show.jsx here

// use fruits program for refernce
app.get("/pokemon/:id", (req, res) => {
  res.render(`../views/Show`, { pokemons: pokemon[req.params.id] });
});

app.post("/pokemon", (req, res) => {
  pokemon.push(req.body);
  res.redirect("/pokemon");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
