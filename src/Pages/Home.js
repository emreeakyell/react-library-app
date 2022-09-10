import React from "react";
import Header from "../Components/Header";
import ListBooks from "../Components/ListBooks";

const Home = (props) => {
  return (
    <div className="App">
      <Header />
      <ListBooks />
    </div>
  );
};
export default Home;
