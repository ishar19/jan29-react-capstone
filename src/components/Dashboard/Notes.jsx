import { useState } from "react";

export default function Notes() {
  const [notes, setNotes] = useState(localStorage.getItem("notes"));
  return (
    <div>
      <textarea
        value={notes}
        rows={10}
        cols={50}
        placeholder="ALL NOTES"
        className="bg-[#F1C75B] rounded-xl"
        style={{
          maxHeight: "55vh",
          maxWidth: "20vw",
          padding:'10px',
          color:'black'
        }}
        onChange={(e) => {
          setNotes(e.target.value);
          localStorage.setItem("notes", e.target.value);
        }}
      ></textarea>
    </div>
  );
}
