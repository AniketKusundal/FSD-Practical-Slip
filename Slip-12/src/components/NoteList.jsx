import React, { useState } from "react";
import { useSelector } from "react-redux";
import NoteItem from "./NoteItem";

export default function NotesList() {
  const notes = useSelector((state) => state.notes);
  const [query, setQuery] = useState("");

  const filtered = notes.filter(
    (n) =>
      n.title.toLowerCase().includes(query.toLowerCase()) ||
      n.content.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <div style={{ marginBottom: 12 }}>
        <input
          placeholder="Search notes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: 8, width: "100%" }}
        />
      </div>

      {filtered.length === 0 ? (
        <p>No notes found.</p>
      ) : (
        filtered.map((note) => <NoteItem key={note.id} note={note} />)
      )}
    </div>
  );
}
