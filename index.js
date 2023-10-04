const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "My name is Rohit Kumar Sahoo",
  });
});

app.listen(8080, () => {
  console.log("app is listen on port 8080");
});
