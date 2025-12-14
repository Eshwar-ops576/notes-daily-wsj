"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px"
      }}
    >
      <h1 style={{ fontSize: "28px", fontWeight: 600 }}>
        Notes + Daily WSJ
      </h1>
      <p style={{ maxWidth: 500, textAlign: "center", opacity: 0.8 }}>
        One place for your learning notes and your curated Wall Street Journal
        daily reading list.
      </p>
      <div style={{ display: "flex", gap: "16px" }}>
        <button
          onClick={() => router.push("/notes")}
          style={{
            padding: "10px 18px",
            borderRadius: "8px",
            border: "1px solid #38bdf8",
            background: "transparent",
            color: "#e5e7eb",
            cursor: "pointer"
          }}
        >
          Notes
        </button>
        <button
          onClick={() => router.push("/daily-wsj")}
          style={{
            padding: "10px 18px",
            borderRadius: "8px",
            border: "1px solid #22c55e",
            background: "transparent",
            color: "#e5e7eb",
            cursor: "pointer"
          }}
        >
          Daily WSJ
        </button>
      </div>
    </main>
  );
}
