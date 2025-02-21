import React, { useState } from "react";
import "./home.css";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const addNote = () => {
    if (title.trim() && content.trim() && category.trim()) {
      const newNote = {
        title,
        content,
        category,
        date: new Date().toLocaleDateString(),
      };
      setNotes([...notes, newNote]);
      setTitle("");
      setContent("");
      setCategory("");
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((note, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Create a Note</h1>
      <div className="note-input">
        <input
          type="text"
          className="input-field"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter the titte"
        />
        <textarea
          className="input-field"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter the category"
          rows="4"
        />

        <input
          type="text"
          className="input-field"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter the category"
        />
      </div>
      <button onClick={addNote} className="add-btn">
        CREATE NOTE
      </button>
      <button
        onClick={() => {
          setTitle("");
          setContent("");
          setCategory("");
        }}
        className="add-btn reset-btn"
      >
        RESET FIELDS
      </button>
      <div className="notes-list">
        {notes.length === 0 ? (
          <p className="no-notes">No notes available</p>
        ) : (
          notes.map((note, index) => (
            <div className="note-item" key={index}>
              <div>
                <h3>{note.title}</h3>
                <p>{note.content}</p>
                <p>
                  <strong>Category:</strong> {note.category}
                </p>
                <p>
                  <em>Created on: {note.date}</em>
                </p>
              </div>
              <button onClick={() => deleteNote(index)} className="delete-btn">
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
