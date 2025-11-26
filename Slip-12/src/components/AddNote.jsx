import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote, clearNotes } from "../features/noteSlice";

export default function AddNote() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (title.trim() === "") {
      alert("Please enter a title");
      return;
    }
    dispatch(addNote(title));
    setTitle("");
  };

  return (
    <div>
      <h2>Add Note</h2>

      <input
        type="text"
        placeholder="Enter Note Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={handleAdd}>Add Note</button>
      <button onClick={() => dispatch(clearNotes())}>Clear Notes</button>
    </div>
  );
}
