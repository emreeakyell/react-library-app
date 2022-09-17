import React, { useState } from "react";
import { useSelector } from "react-redux";

const Modal = (props) => {
  const modalState = useSelector((state) => state);
  console.log("Hi Modal", modalState);
  const { onCancel, onConfirm, title, comment } = props;
  return (
    <button
      onClick={onCancel}
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
        cursor: "default",
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
            onClick={() => onCancel(false)}
            className="btn btn-sm btn-danger mx-3 px-5"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="btn btn-sm btn-outline-success"
          >
            Confirm
          </button>
        </div>
      </div>
    </button>
  );
};

export default Modal;
