"use client";

import { useState } from "react";

interface Props {
  addBookmark: (bookmark: { url: string; title: string }) => void;
}

export default function AddBookmark({ addBookmark }: Props) {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!url || !title) return;

    addBookmark({
      url,
      title,
    });

    setUrl("");
    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-900 p-6 rounded-2xl shadow-md mb-6"
    >
      <h3 className="text-lg font-semibold mb-4">Add Bookmark</h3>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-3 p-3 rounded-lg bg-gray-800 border border-gray-700"
      />

      <input
        type="text"
        placeholder="URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full mb-4 p-3 rounded-lg bg-gray-800 border border-gray-700"
      />

      <button className="w-full bg-blue-600 py-3 rounded-lg hover:bg-blue-700">
        Add Bookmark
      </button>
    </form>
  );
}
