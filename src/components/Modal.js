import React, { useState } from "react";

const Modal = (props) => {
  const { setShowModal, confirmModel, title, comment } = props;
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.3)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          widht: "50%",
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "10px",
        }}
      >
        <h1 className="text-center">{title} </h1>
        <p className="text-center">{comment}</p>
        <div>
          <button
            onClick={() => setShowModal(false)}
            className="btn btn-sm btn-danger mx-3 px-5"
          >
            Cancel
          </button>
          <button
            onClick={confirmModel}
            className="btn btn-sm btn-outline-success"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
