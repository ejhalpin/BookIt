import axios from "axios";
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
console.log("API", API_KEY);
export default {
  searchByTitle: query => {
    return axios.get("/api/search/" + query);
  },

  searchByAuthor: query => {
    //console.log("API KEY ", process.env.API_KEY);
    return axios.get("/api/search/byAuthor/" + query);
  },

  searchByTitleAndAuthor: (title, author) => {
    return axios.get("/api/search/byTitleAndAuthor/" + title + "&" + author);
  },

  saveBook: bookObj => {
    return axios.post("/api/books", bookObj);
  },

  getSavedBooks: () => {
    return axios.get("/api/books");
  },

  deleteBook: id => {
    return axios.delete("/api/books/" + id);
  }
};
