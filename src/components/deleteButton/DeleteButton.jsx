import React from "react";
// import "./DeleteButton.css";

const DeleteButton = ({ onDelete }) => {
  return (
    <button className="delete-btn" onClick={onDelete}>
      DELETE
    </button>
  );
};

export default DeleteButton;
