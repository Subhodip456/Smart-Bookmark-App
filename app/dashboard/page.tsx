// "use client";

// import { useState } from "react";
// import Navbar from "../components/Navbar";
// import AddBookmark from "../components/AddBookmark";
// import BookmarkList from "../components/BookmarkList";

// export interface Bookmark {
//   id: number;
//   url: string;
//   title: string;
// }

// export default function Dashboard() {
//   const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

//   const addBookmark = (bookmark: Bookmark) => {
//     setBookmarks((prev) => [bookmark, ...prev]);
//   };

//   const deleteBookmark = (id: number) => {
//     setBookmarks((prev) => prev.filter((b) => b.id !== id));
//   };

//   return (
//     <div className="min-h-screen bg-gray-950 text-white">
//       <Navbar />
//       <div className="max-w-2xl mx-auto mt-10 px-4">
//         <AddBookmark addBookmark={addBookmark} />
//         <BookmarkList bookmarks={bookmarks} deleteBookmark={deleteBookmark} />
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Navbar from "../components/Navbar";
import AddBookmark from "../components/AddBookmark";
import BookmarkList from "../components/BookmarkList";

export interface Bookmark {
  id: number;
  url: string;
  title: string;
  user_id: string;
}

export default function Dashboard() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        window.location.href = "/";
      } else {
        setUser(data.user);
        fetchBookmarks(data.user.id);
        subscribeToRealtime(data.user.id);
      }
    };

    getUser();
  }, []);

  const fetchBookmarks = async (userId: string) => {
    const { data,error } = await supabase
      .from("bookmarks")
      .select("*")
      .eq("user_id", userId)
      .order("id", { ascending: false });

    setBookmarks(data || []);
  };

  const addBookmark = async (bookmark: {
    url: string;
    title: string;
  }) => {
    await supabase.from("bookmarks").insert([
      {
        url: bookmark.url,
        title: bookmark.title,
        user_id: user.id,
      },
    ]);
  };

  const deleteBookmark = async (id: number) => {
    await supabase.from("bookmarks").delete().eq("id", id);
  };

  const subscribeToRealtime = (userId: string) => {
    supabase
      .channel("bookmarks")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "bookmarks" },
        () => fetchBookmarks(userId)
      )
      .subscribe();
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <div className="max-w-2xl mx-auto mt-10 px-4">
        <AddBookmark addBookmark={addBookmark} />
        <BookmarkList bookmarks={bookmarks} deleteBookmark={deleteBookmark} />
      </div>
    </div>
  );
}

