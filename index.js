const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve media files
app.use("/media", express.static(path.join(__dirname, "public")));

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to Open Media API! Use /media/filename to access files.");
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});