import React from "react";

const books = [
  { id: 1, title: "book 1", author: "author 1" },
  { id: 2, title: "book 2", author: "author 2" },
  { id: 3, title: "book 3", author: "author 3" },
  { id: 4, title: "book 4", author: "author 4" },
];

const Book = () => {
  return (
    <div>
      {books.map((book) => (
        <div>
          <h2>{book.title}</h2>
          <h5>{book.author}</h5>
        </div>
      ))}
    </div>
  );
};

export default Book;
