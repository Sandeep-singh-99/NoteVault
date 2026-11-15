import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NoteVault — Next-Generation Notion-Style Block & MDX Notes",
  description:
    "Write, organize, and execute thoughts with a Tiptap block editor, full MDX component embedding, slash commands, and real-time preview.",
  keywords: ["notes", "notion-style", "tiptap", "mdx", "react", "markdown", "blocks", "knowledge-base"],
  authors: [{ name: "NoteVault Team" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark h-full antialiased scroll-smooth font-sans">
      <body className="min-h-full flex flex-col bg-black text-[#A1A1AA] selection:bg-[#10B981] selection:text-black antialiased">
        {children}
      </body>
    </html>
  );
}
