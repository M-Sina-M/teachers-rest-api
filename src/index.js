const express = require("express");

const app = express();
const book = require("./database");

app.get("/", (req, res) => {
  res.send(book);
});

app.get("/name/:name", (req, res) => {
  let data = {
    err: "nothing found!"
  };

  book.forEach((v) => {
    if (v.name === req.params["name"]) {
      data = v;
    }
  });

  res.send(data);
});

app.listen(8080);
