import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteNote, editNote } from  "../features/noteSlice"

export default function NoteItem({ note }) {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const onSave = () => {
    dispatch(editNote({ id: note.id, title: title.trim(), content: content.trim() }));
    setEditing(false);
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: 12,
        marginBottom: 10,
        borderRadius: 6,
      }}
    >
      {editing ? (
        <>
          <input value={title} onChange={(e) => setTitle(e.target.value)} style={{ width: "100%", marginBottom: 8 }} />
          <textarea value={content} onChange={(e) => setContent(e.target.value)} rows={4} style={{ width: "100%" }} />
          <div style={{ marginTop: 8 }}>
            <button onClick={onSave}>Save</button>
            <button onClick={() => setEditing(false)} style={{ marginLeft: 8 }}>
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h3 style={{ margin: "0 0 8px 0" }}>{note.title}</h3>
          <p style={{ margin: 0 }}>{note.content}</p>
          <div style={{ marginTop: 8, fontSize: 12, color: "#666" }}>
            <span>Created: {new Date(note.createdAt).toLocaleString()}</span>
          </div>
          <div style={{ marginTop: 8 }}>
            <button onClick={() => setEditing(true)}>Edit</button>
            <button
              onClick={() => dispatch(deleteNote(note.id))}
              style={{ marginLeft: 8, backgroundColor: "red", color: "white" }}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}
