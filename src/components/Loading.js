import React from "react";

const Loading = (props) => {
  return (
    <div
      style={{
        widht: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{ width: "50px", height: "50px" }}
        className="spinner-border "
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
export default Loading;
