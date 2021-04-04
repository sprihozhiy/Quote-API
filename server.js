const express = require("express");
const app = express();

const { quotes } = require("./data");
const { getRandomElement } = require("./utils");

const PORT = process.env.PORT || 4001;

app.use(express.static("public"));

//Getting a random quote
app.get("/api/quotes/random", (req, res, next) => {
  const randomQuote = {};
  randomQuote.quote = getRandomElement(quotes);
  //   console.log(randomQuote);
  res.status(200).send(randomQuote);
});

//Getting all quotes
app.get("/api/quotes", (req, res, next) => {
  const emptyQuery = Object.keys(req.query).length;
  if (emptyQuery === 0) {
    const allQuotes = {};
    allQuotes.quotes = [...quotes];
    res.status(200).send(allQuotes);
  } else {
    console.log("Nothing works :-(");
  }
});

app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}`);
});
