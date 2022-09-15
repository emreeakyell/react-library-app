import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../Components/Loading";
import { useNavigate } from "react-router-dom";

const EditBook = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  console.log("params", params);

  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3004/books/${params.bookId}`)
      .then((res) => {
        setBookName(res.data.name);
        setAuthor(res.data.author);
        setIsbn(res.data.isbn);
        setCategory(res.data.categoryId);
        axios
          .get("http://localhost:3004/categories")
          .then((res) => {
            setCategories(res.data);
          })
          .catch((err) => console.log("categories err"(err)));
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (bookName === "" || author === "" || category === "") {
      alert("Inputs cant be empty");
      return;
    }
    const updatedBook = {
      id: params.book,
      name: bookName,
      author: author,
      categoryId: category,
      isbn: isbn,
    };
    //console.log("updated book", updatedBook);
    axios
      .put(`http://localhost:3004/books/${params.bookId}`, updatedBook)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log("edit err", err));
  };

  if (categories === null) {
    return <Loading />;
  }

  return (
    <div>
      <Header />
      <div className="container my-5">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Book Name"
                value={bookName}
                onChange={(event) => setBookName(event.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Author"
                value={author}
                onChange={(event) => setAuthor(event.target.value)}
              />
            </div>
          </div>
          <div className="row my-5">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="ISBN"
                value={isbn}
                onChange={(event) => setIsbn(event.target.value)}
              />
            </div>
            <div className="col">
              <select
                className="form-select"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                <option value={""} selected>
                  Category
                </option>
                {categories.map((cat) => {
                  return (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="btn btn-danger w-25 mx-3"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-success w-25 ">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
