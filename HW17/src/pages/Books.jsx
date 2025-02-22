import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://api.itbook.store/1.0/new")
      .then((res) => {
        setBooks(res.data.books);
        setLoading(false);
      });
  }, []);

  return loading ? <Loader /> : (
    <div>
      <h1>Книги</h1>
      <ul>
        {books.map(book => (
          <li key={book.isbn13}>
            <p>{book.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
