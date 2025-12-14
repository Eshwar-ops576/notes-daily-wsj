"use client";

import { useState } from "react";

type Note = {
  id: number;
  title: string;
  content: string;
};

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function addNote() {
    if (!title.trim() && !content.trim()) return;
    setNotes((prev) => [
      { id: Date.now(), title: title.trim() || "Untitled", content: content.trim() },
      ...prev
    ]);
    setTitle("");
    setContent("");
  }

  return (
    <main style={{ padding: "24px", maxWidth: 800, margin: "0 auto" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "12px" }}>Notes</h1>
      <p style={{ opacity: 0.8, marginBottom: "16px" }}>
        Simple place to jot down course notes. These save only in this browser for now.
      </p>

      <div
        style={{
          border: "1px solid #1f2937",
          borderRadius: "12px",
          padding: "16px",
          marginBottom: "24px",
          background: "#020617"
        }}
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          style={{
            width: "100%",
            padding: "8px 10px",
            marginBottom: "8px",
            borderRadius: "6px",
            border: "1px solid #374151",
            background: "#020617",
            color: "#e5e7eb"
          }}
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your note..."
          rows={4}
          style={{
            width: "100%",
            padding: "8px 10px",
            marginBottom: "8px",
            borderRadius: "6px",
            border: "1px solid #374151",
            background: "#020617",
            color: "#e5e7eb",
            resize: "vertical"
          }}
        />
        <button
          onClick={addNote}
          style={{
            padding: "8px 14px",
            borderRadius: "8px",
            border: "1px solid #38bdf8",
            background: "transparent",
            color: "#e5e7eb",
            cursor: "pointer"
          }}
        >
          Save note
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {notes.map((note) => (
          <div
            key={note.id}
            style={{
              border: "1px solid #1f2937",
              borderRadius: "10px",
              padding: "12px",
              background: "#020617"
            }}
          >
            <h2 style={{ margin: "0 0 6px", fontSize: "18px" }}>{note.title}</h2>
            <p style={{ margin: 0, whiteSpace: "pre-wrap" }}>{note.content}</p>
          </div>
        ))}
        {notes.length === 0 && (
          <p style={{ opacity: 0.6 }}>No notes yet. Add your first one above.</p>
        )}
      </div>
    </main>
  );
}
