const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";

mongoose.connect( MONGODB_URI );

const bookSeed = [
  {
    title: "The Hunger Games",
    authors: "Suzanne Collins",
    description: 
      "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
    image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
    date: new Date(Date.now())
  },
  {
    title: "The Dead Zone",
    authors: "Stephen King",
    description:
      "A number-one national best seller about a man who wakes up from a five-year coma able to see people's futures and the terrible fate awaiting mankind in The Dead Zone - a \"compulsive page-turner\" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people's futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a \"faultlessly paced...continuously engrossing\" (Los Angeles Times) novel of second sight.",
    image: "https://books.google.com/books?id=O53jCwAAQBAJ&printsec=frontcover&dq=The+Dead+Zone&hl=en&sa=X&ved=0ahUKEwis1tGpnOffAhWCyIMKHUy5BDwQ6wEIKzAA",
    link: "https://books.google.com/books?id=O53jCwAAQBAJ&printsec=frontcover&dq=The+Dead+Zone&hl=en&sa=X&ved=0ahUKEwis1tGpnOffAhWCyIMKHUy5BDwQ6AEIKjAA",
    date: new Date(Date.now())
  },
  {
    title: "Lord of the Flies",
    authors: "William Golding",
    description:
      "The tale of a party of shipwrecked schoolboys, marooned on a coral island, who at first enjoy the freedom of the situation but soon divide into fearsome gangs which turn the paradise island into a nightmare of panic and death.",
    image: "https://books.google.com/books/content?id=3KRdJZbAN_sC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE73E3HeU6XLyQVYEEkeLohrwnF4FfW0dUP7mh_VpjSG5HjwX1EIvDjcTZfYDffi_Iw5EdGg5T6nffHfIntX2FAC02Ke_H2YuxYHbK1hE0I5Fjj8NywJ7Sa9GrcqL0jR_BoGzHkPM",
    link: "https://books.google.com/books?id=3KRdJZbAN_sC&printsec=frontcover&dq=Lord+of+the+Flies&hl=en&sa=X&ved=0ahUKEwiMwJXZnOffAhUF7oMKHVQtATwQ6AEIKjAA",
    date: new Date(Date.now())
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
