async function getDailyLinks() {
  const res = await fetch("http://localhost/api/daily-wsj", {
    cache: "no-store"
  }).catch(() => null);

  if (!res || !res.ok) {
    return [];
  }

  try {
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export default async function DailyWsjPage() {
  const links = await getDailyLinks();

  return (
    <main style={{ padding: "24px", maxWidth: 800, margin: "0 auto" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "12px" }}>Daily WSJ</h1>
      <p style={{ opacity: 0.8, marginBottom: "16px" }}>
        Curated Wall Street Journal articles. Click through to read on wsj.com.
      </p>

      {links.length === 0 && (
        <p style={{ opacity: 0.6 }}>
          No links saved yet. Once the daily job runs, your picks will appear here.
        </p>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {links.map((item: any, idx: number) => (
          <div
            key={idx}
            style={{
              border: "1px solid #1f2937",
              borderRadius: "10px",
              padding: "12px",
              background: "#020617"
            }}
          >
            <div style={{ fontSize: "12px", opacity: 0.7, marginBottom: "4px" }}>
              {item.bucket || "Article"}
            </div>
            <h2 style={{ margin: "0 0 6px", fontSize: "18px" }}>{item.title}</h2>
            {item.note && (
              <p style={{ margin: "0 0 8px", opacity: 0.8 }}>{item.note}</p>
            )}
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              style={{ fontSize: "14px" }}
            >
              Read on WSJ
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
