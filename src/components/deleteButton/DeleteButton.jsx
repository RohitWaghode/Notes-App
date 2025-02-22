import React from "react";

const DeleteButton = ({ onDelete }) => {
  return (
    <button className="delete-btn" onClick={onDelete}>
      DELETE
    </button>
  );
};

export default DeleteButton;
