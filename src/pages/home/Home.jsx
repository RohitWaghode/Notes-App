import React, { useState } from "react";
import "./home.css";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  const addNote = () => {
    if (newNote.trim()) {
      setNotes([...notes, newNote]);
      setNewNote("");
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((note, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div className="app-container">
      <h1 className="app-title"> Create a Note</h1>
      <div className="note-input">
        <input
          type="text"
          className="input-field"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Write your note here..."
        />
        <button onClick={addNote} className="add-btn">
          Add Note
        </button>
      </div>
      <div className="notes-list">
        {notes.length === 0 ? (
          <p className="no-notes">No notes available</p>
        ) : (
          notes.map((note, index) => (
            <div className="note-item" key={index}>
              <p>{note}</p>
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
