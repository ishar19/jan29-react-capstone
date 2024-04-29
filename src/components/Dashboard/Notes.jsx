import { useState } from "react";

export default function Notes() {
  const [notes, setNotes] = useState(localStorage.getItem("notes"));
  return (
    <div>
      
  
      <h1>All notes</h1>
    <textarea
      className="bg-[#F1C75B] border-[#F1C75B] text-black font-semibold"
        value={notes}
        rows={10}
        cols={30}
        style={{
          maxHeight: "200px",
          maxWidth: "400px",
        }}
        
        onChange={(e) => {
          setNotes(e.target.value);
          localStorage.setItem("notes", e.target.value);
        }}
      >
      </textarea>
    </div>
    
  );
}
