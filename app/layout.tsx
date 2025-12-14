import React from "react";
import "./globals.css";

export const metadata = {
  title: "Notes + Daily WSJ",
  description: "Your notes and daily WSJ reading list in one place"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
          backgroundColor: "#0f172a",
          color: "#e5e7eb"
        }}
      >
        {children}
      </body>
    </html>
  );
}
