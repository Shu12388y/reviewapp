"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

// Define the type for a post
interface Post {
  name: string;
  id: string;
  question: string;
  company: string;
  createdAt: string;
}

export default function UserDashboard() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUserPosts() {
      try {
        const authToken = window.sessionStorage.getItem("auth");
        console.log(authToken);

        if (!authToken) {
          console.error("No authentication token found.");
          return;
        }

        const response = await axios.post(
          "/api/submission/fetchusersubmission",
          {},
          {
            headers: {
              auth: `${authToken}`,
              "Content-Type": "application/json",
            },
          }
        );

        console.log(response);
        if (response.data.message == null) {
          setPosts([]);
        } else {
          setPosts(response.data.message);
        }
        setError(null);
      } catch (error) {
        console.error("Error fetching user posts:", error);
        setError("Failed to fetch your posts. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }
    fetchUserPosts();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Dashboard Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center mb-8">Your Posts</h1>

          {/* Loading State */}
          {isLoading && (
            <div className="text-center text-gray-600">
              Loading your posts...
            </div>
          )}

          {/* Error State */}
          {error && <div className="text-center text-red-600">{error}</div>}

          {/* Empty State */}
          {!isLoading && !error && posts.length === 0 && (
            <div className="text-center text-gray-600">
              You haven&apos;t submitted any posts yet.
            </div>
          )}

          {/* Posts List */}
          <div className="space-y-6">
            {posts.map((post) => (
              <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-2">{post.question}</h2>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Company:</span>{" "}
                  {post.name || "N/A"}
                </p>
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">Submitted on:</span>{" "}
                  {new Date(post.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-4">
            &copy; {new Date().getFullYear()} InterviewPrep. All rights
            reserved.
          </p>
          <div className="flex justify-center gap-6">
            <Link href="/about" className="hover:text-blue-200">
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-200">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-blue-200">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}