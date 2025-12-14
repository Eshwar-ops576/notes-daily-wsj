import { NextResponse } from "next/server";

export async function GET() {
  const todayLinks = [
    {
      bucket: "Macro / Economy",
      title: "Example macro article (replace later)",
      url: "https://www.wsj.com/",
      note: "Placeholder example. Later, this will be filled by your daily job."
    },
    {
      bucket: "Industry / Company / Deal",
      title: "Example company/deal article",
      url: "https://www.wsj.com/",
      note: "Will become your real M&A / IPO / sector pick."
    },
    {
      bucket: "Op-ed",
      title: "Example opinion article",
      url: "https://www.wsj.com/",
      note: "Later, this slot will come from WSJ Opinion."
    },
    {
      bucket: "Finance / Crypto",
      title: "Example finance/crypto article",
      url: "https://www.wsj.com/",
      note: "Will become your daily finance/crypto/blockchain read."
    }
  ];

  return NextResponse.json(todayLinks);
}
