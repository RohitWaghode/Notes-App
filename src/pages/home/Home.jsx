// import React, { useState, useEffect } from "react";
// import "./home.css";

// const Home = () => {
//   const [notes, setNotes] = useState([]);
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [category, setCategory] = useState("");

//   useEffect(() => {
//     const savedNotes = localStorage.getItem("notes");
//     if (savedNotes) {
//       setNotes(JSON.parse(savedNotes));
//     }
//   }, []);

//   useEffect(() => {
//     if (notes.length > 0) {
//       localStorage.setItem("notes", JSON.stringify(notes));
//     }
//   }, [notes]);

//   const addNote = () => {
//     if (title.trim() && content.trim() && category.trim()) {
//       const newNote = {
//         title,
//         content,
//         category,
//         date: new Date().toLocaleDateString(),
//       };
//       setNotes([...notes, newNote]);
//       setTitle("");
//       setContent("");
//       setCategory("");
//     }
//   };

//   const deleteNote = (index) => {
//     const updatedNotes = notes.filter((note, i) => i !== index);
//     setNotes(updatedNotes);
//   };

//   return (
//     <div className="app-container">
//       <h1 className="app-title">Create a Note</h1>
//       <div className="note-input">
//         <input
//           type="text"
//           className="input-field"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="Enter the title"
//         />
//         <textarea
//           className="input-field"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           placeholder="Enter the content"
//           rows="4"
//         />
//         <input
//           type="text"
//           className="input-field"
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           placeholder="Enter the category"
//         />
//       </div>
//       <button onClick={addNote} className="add-btn">
//         CREATE NOTE
//       </button>
//       <button
//         onClick={() => {
//           setTitle("");
//           setContent("");
//           setCategory("");
//         }}
//         className="add-btn reset-btn"
//       >
//         RESET FIELDS
//       </button>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import Login from "../login/Login";

const Home = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default Home;
