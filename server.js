const express = require("express");

const app = express();

const port = 3000;
const mongoose = require("mongoose");

// Add dotnv
require("dotenv").config();

// mongoose

mongoose.connect(process.env.POKE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

// MiddleWare

app.use((req, res, next) => {
  next();
});

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

// data

const Pokemon = require("./models/pokemon");

// Routes
app.get("/", (req, res) => {
  res.send(`<h1> Welcome to the Pokemon App! </h1>`);
});

app.get("/pokemon", (req, res) => {
  Pokemon.find({}, (error, allPokemon) => {
    res.render("../views/Index", {
      pokemons: allPokemon,
    });
  });
});

app.get("/pokemon/new", (req, res) => {
  res.render("../views/New");
});

app.post("/pokemon", (req, res) => {
  Pokemon.create(req.body, (error, createdPokemon) => {
    res.redirect("/pokemon");
  });
});

app.get("/pokemon/:id", (req, res) => {
  Pokemon.findById(req.params.id, (err, foundPokemon) => {
    res.render(`../views/Show`, {
      pokemon: foundPokemon,
    });
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
