const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const HTTP_PORT = process.env.PORT || 8080;

// Add support for incoming JSON entities
app.use(bodyParser.json());

// Array of strings (movies)
let movies = ["Friction", "Cartoon", "Game", "Action", "Education", "Moral"];

// Deliver the app's home page to browser clients
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

// Get all movies - You can sort this array if needed
app.get("/api/items", (req, res) => {
  res.json(movies);
});

// Get one movie by ID
app.get("/api/items/:itemId", (req, res) => {
  const itemId = req.params.itemId;
  if (itemId >= 0 && itemId < movies.length) {
    res.json({ movie: movies[itemId] });
  } else {
    res.status(404).send("Resource not found");
  }
});

// Add new movie
app.post("/api/items", (req, res) => {
  const newItem = req.body.movieName;
  movies.push(newItem);
  res.status(201).json({
    message: `Added ${newItem} as item identifier ${movies.length - 1}`,
  });
});

// Edit existing movie by ID
app.put("/api/items/:id", (req, res) => {
  const itemId = req.params.id;
  if (itemId >= 0 && itemId < movies.length) {
    const updatedItem = req.body.movieName;
    movies[itemId] = updatedItem;
    res.json({
      message: `Updated item with identifier: ${itemId} to ${updatedItem}`,
    });
  } else {
    res.status(404).send("Resource not found");
  }
});

// Delete movie by ID
app.delete("/api/items/:id", (req, res) => {
  const itemId = req.params.id;
  if (itemId >= 0 && itemId < movies.length) {
    const deletedItem = movies.splice(itemId, 1)[0];
    res.status(200).json({ message: `Deleted movie: ${deletedItem}` });
  } else {
    res.status(404).send("Resource not found");
  }
});

// Resource not found (this should be at the end)
app.use((req, res) => {
  res.status(404).send("Resource not found");
});

// Tell the app to start listening for requests
app.listen(HTTP_PORT, () => {
  console.log("Ready to handle requests on port " + HTTP_PORT);
});
