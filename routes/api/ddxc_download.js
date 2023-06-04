const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/:filename", (req, res) => {
  const absPath = path.resolve(__dirname, "./file", req.params.filename);
  console.log("absPath", absPath);
  res.download(absPath, req.params.filename);
});

module.exports = router;
