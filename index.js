const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the main page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve the gallery page
app.get("/gallery.html", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'gallery.html'));
});

// Handle any other routes by serving the main page or a 404 page
app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
