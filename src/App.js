import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AddBook from "./Pages/AddBook";
import EditBook from "./Pages/EditBook";
import { useDispatch } from "react-redux";
import axios from "axios";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    //categoires
    dispatch({ type: "FETCH_CATEGORİES_START" });
    axios
      .get("http://localhost:3004/categories")
      .then((res) => {
        dispatch({ type: "FETCH_CATEGORİES_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: "FETCH_CATEGORİES_FAİL",
          payload: "Couldn't get categories",
        });
      });
    //books

    dispatch({ type: "FETCH_BOOKS_START" });
    axios
      .get("http://localhost:3004/books")
      .then((res) => {
        dispatch({ type: "FETCH_BOOKS_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_BOOKS_FAİL", payload: "Couldn't get books" });
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/edit-book/:bookId" element={<EditBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
