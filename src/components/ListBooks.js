import React, { useEffect, useState } from "react";
import axios from "axios";
const ListBooks = (props) => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3004/books")
      .then((res) => {
        setBooks(res.data);
        //console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);
  if (books === null) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }

  return (
    <div className=" container my-5">
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Book Name</th>
            <th scope="col">Author</th>
            <th scope="col">Catagories</th>
            <th scope="col">ISBN</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr>
              <td>{book.name}</td>
              <td>{book.author}</td>
              <td>Katogori</td>
              <td>{book.isbn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ListBooks;
