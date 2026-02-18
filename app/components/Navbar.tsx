// export default function Navbar() {
//   return (
//     <div className="bg-gray-900 p-4 flex justify-between items-center shadow-md">
//       <h2 className="text-xl font-bold">Smart Bookmark</h2>
//       <button className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600">
//         Logout
//       </button>
//     </div>
//   );
// }

"use client";

import { supabase } from "@/lib/supabase";

export default function Navbar() {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  return (
    <div className="bg-gray-900 p-4 flex justify-between items-center shadow-md">
      <h2 className="text-xl font-bold">Smart Bookmark</h2>
      <button
        onClick={handleLogout}
        className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}
