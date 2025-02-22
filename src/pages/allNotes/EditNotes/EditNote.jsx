import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DeleteButton from "../../../components/deleteButton/DeleteButton";
import "./EditNote.css";

const EditNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState({ title: "", content: "", category: "" });

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    if (savedNotes[id]) setNote(savedNotes[id]);
  }, [id]);

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    savedNotes[id] = note;
    localStorage.setItem("notes", JSON.stringify(savedNotes));
    navigate("/");
  };

  const handleDelete = () => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    const updatedNotes = savedNotes.filter(
      (_, index) => index !== parseInt(id)
    );
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    navigate("/");
  };

  return (
    <div className="edit-container">
      <h2>Edit Note</h2>
      <label>Title</label>
      <input
        type="text"
        name="title"
        value={note.title}
        onChange={handleChange}
      />

      <label>Content</label>
      <textarea
        name="content"
        value={note.content}
        onChange={handleChange}
      ></textarea>

      <label>Category</label>
      <input
        type="text"
        name="category"
        value={note.category}
        onChange={handleChange}
      />

      <div className="button-group">
        <button className="update-btn" onClick={handleUpdate}>
          UPDATE NOTE
        </button>
        <DeleteButton onDelete={handleDelete} />
      </div>

      <p className="updated-info">
        Updated on - {new Date().toISOString().split("T")[0]}
      </p>
    </div>
  );
};

export default EditNote;
