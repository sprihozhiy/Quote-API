const express = require("express");
const app = express();

const { quotes } = require("./data");
const { getRandomElement, checkTheAuthor } = require("./utils");

const PORT = process.env.PORT || 4001;

app.use(express.static("public"));

//Getting a random quote
app.get("/api/quotes/random", (req, res, next) => {
  const randomQuote = {};
  randomQuote.quote = getRandomElement(quotes);
  //   console.log(randomQuote);
  res.status(200).send(randomQuote);
});

//Getting all quotes and author's quotes
app.get("/api/quotes", (req, res, next) => {
  const emptyQuery = Object.keys(req.query).length;
  const retrievedQuotes = {};
  if (emptyQuery === 0) {
    retrievedQuotes.quotes = [...quotes];
    res.status(200).send(retrievedQuotes);
  } else {
    const person = req.query.person;
    checkTheAuthor(quotes, person);
    retrievedQuotes.quotes = checkTheAuthor(quotes, person);
    res.status(200).send(retrievedQuotes);
  }
});

app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}`);
});
