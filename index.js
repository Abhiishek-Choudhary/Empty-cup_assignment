const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
const PORT = 5000;

app.use(cors());

app.get("/api/listings", (req, res) => {
  fs.readFile("listings.json", "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Error reading listings file.");
    } else {
      res.json(JSON.parse(data));
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
