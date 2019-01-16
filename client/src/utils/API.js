import axios from "axios";
const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = "&apikey=trilogy";

const BASEURL1 = "https://www.googleapis.com/books/v1/volumes?q=";
// const APIKEY1 = "key=AIzaSyAjP3iFTselHae7iJsXpO8Jj_d4wFVOVxg";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    console.log("about to save a book");
    return axios.post("/api/books", bookData);
  },
  
  //OMDB search
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  },

  //Google Book search
  searchGoogle: function(query) {
    return axios.get(BASEURL1 + query);
  }
};


