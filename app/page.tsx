// "use client";

// import { useRouter } from "next/navigation";

// export default function Home() {
//   const router = useRouter();

//   return (
//     <main className="flex min-h-screen items-center justify-center bg-gray-950 text-white">
//       <div className="bg-gray-900 p-8 rounded-2xl shadow-xl w-96 text-center">
//         <h1 className="text-2xl font-bold mb-6">Smart Bookmark App</h1>
//         <button
//           onClick={() => router.push("/dashboard")}
//           className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
//           Continue with Google
//         </button>
//       </div>
//     </main>
//   );
// }


"use client";

import { supabase } from "@/lib/supabase";

export default function Home() {
  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "https://ndczwufytdgwumpxotqp.supabase.co/auth/v1/callback",
      },
    });
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-950 text-white">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-xl w-96 text-center">
        <h1 className="text-2xl font-bold mb-6">Smart Bookmark App</h1>
        <button
          onClick={handleLogin}
          className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Continue with Google
        </button>
      </div>
    </main>
  );
}
