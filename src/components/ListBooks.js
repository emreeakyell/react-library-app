import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import { useSelector } from "react-redux";

const ListBooks = (props) => {
  const generalState = useSelector((state) => state);
  //console.log(generalState);
  const navigate = useNavigate();
  const [books, setBooks] = useState(null);
  const [categories, setCategories] = useState(null);
  const [didUpdate, setDidUpdate] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalDelete, setModalDelete] = useState(null);
  const [modalTitle, setModalTitle] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3004/books")
      .then((resBook) => {
        setBooks(resBook.data);
        //console.log(res);
        axios
          .get("http://localhost:3004/categories")
          .then((resCat) => {
            setTimeout(() => {
              setCategories(resCat.data);
            }, 500);
          })
          .catch((err) => console.log("categories err", err));
      })
      .catch((err) => console.log("books err", err));
  }, [didUpdate]);

  const deleteBook = (id) => {
    //console.log(id);
    axios
      .delete(`http://localhost:3004/books/${id}`)
      .then((res) => {
        //console.log("deleted", res);
        setDidUpdate(!didUpdate);
        setShowModal(false);
      })
      .catch((err) => console.log(err));
  };

  if (books === null || categories === null) {
    return <Loading />;
  }

  return (
    <div className=" container my-5">
      <div className="my-3 d-flex justify-content-end">
        <Link to="/add-book" className="btn btn-dark">
          Add Book
        </Link>
      </div>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Book Name</th>
            <th scope="col">Author</th>
            <th scope="col">Catagories</th>
            <th className="text-center" scope="col">
              ISBN
            </th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => {
            const category = categories.find(
              (cat) => cat.id === book.categoryId
            );
            return (
              <tr>
                <td>{book.name}</td>
                <td>{book.author}</td>
                <td>{category.name}</td>
                <td className="text-center">
                  {book.isbn === "" ? "-" : book.isbn}
                </td>
                <td>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => {
                        setShowModal(true);
                        //deleteBook(book.id);
                        setModalDelete(book.id);
                        setModalTitle(book.name);
                      }}
                    >
                      Delete
                    </button>
                    <Link
                      to={`edit-book/${book.id}`}
                      className="btn btn-outline-success mx-2"
                    >
                      Edit
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {showModal === true && (
        <Modal
          onConfirm={() => deleteBook(modalDelete)}
          onCancel={setShowModal}
          title={modalTitle}
          comment={`Are you sure ?`}
        />
      )}
    </div>
  );
};
export default ListBooks;
