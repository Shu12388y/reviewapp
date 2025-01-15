"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

function NavBar() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userToken = window.sessionStorage.getItem("auth");
      setLoggedIn(!!userToken);
    }
  }, []);

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      window.sessionStorage.removeItem("auth"); // Remove the auth token
      setLoggedIn(false); // Update the state to reflect logout
    }
  };
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">
            <Link href="/">InterviewPrep</Link>
          </div>
          <div className="flex gap-6">
            <Link href="/submit" className="text-gray-700 hover:text-blue-600">
              Submit Question
            </Link>
            <Link href="/browse" className="text-gray-700 hover:text-blue-600">
              Browse Questions
            </Link>
            {isLoggedIn ? <Link href="/dashboard">Dashboard</Link> : ""}
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="text-gray-700 hover:text-blue-600"
              >
                Log Out
              </button>
            ) : (
              <Link href="/login" className="text-gray-700 hover:text-blue-600">
                Log In
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
