const axios = require("axios");
require("dotenv").config();

let apiKey = "&key=" + process.env.API_KEY;

module.exports = {
  searchByTitle: (req, res) => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=" + req.params.title + apiKey)
      .then(response => {
        res.json(response.data);
      })
      .catch(err => {
        res.json(err);
      });
  },

  searchByAuthor: (req, res) => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=inauthor:" + req.params.author + apiKey)
      .then(response => {
        res.json(response.data);
      })
      .catch(err => {
        res.json(err);
      });
  },

  searchByTitleAndAuthor: (req, res) => {
    console.log(req.params.query);
    var query = req.params.query
      .split("&")
      .join("+inauthor:")
      .split(" ")
      .join("%20");
    console.log(query);
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=" + query + apiKey)
      .then(response => {
        res.json(response.data);
      })
      .catch(err => {
        res.json(err);
      });
  }
};
