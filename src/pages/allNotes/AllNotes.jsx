import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./AllNotes.css";

const AllNotes = () => {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  return (
    <div className="container">
      <button className="create-btn">
        <Link to="/" className="create-link">
          CREATE NEW NOTE
        </Link>
      </button>
      <div className="notes-list">
        {notes.length === 0 ? (
          <p className="no-notes">No notes available. Please add some notes.</p>
        ) : (
          notes.map((note, index) => (
            <div className="note-card" key={index}>
              <div className="note-content">
                <h3>{note.title}</h3>
                <p>{note.content}</p>
                <p className="note-header">{note.category}</p>
                <p className="note-date">
                  — Created on <em>{note.date}</em>
                </p>
              </div>
              <div className="note-actions">
                <button
                  className="edit-btn"
                  onClick={() => navigate(`/edit/${index}`)}
                >
                  EDIT
                </button>
                <button
                  onClick={() => deleteNote(index)}
                  className="delete-btn"
                >
                  DELETE
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AllNotes;
