"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

// Define the type for a question
interface Question {
  id: string;
  question: string;
  name: string; // Assuming 'name' is the company name
}

export default function BrowsePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCompany, setFilterCompany] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch questions from the API
  useEffect(() => {
    async function fetchInfo() {
      try {
        const response = await axios.get("/api/submission/findallsubmission");
        setQuestions(response.data.message); // Assuming the API returns { message: Question[] }
        setError(null);
      } catch (error) {
        console.error("Error fetching questions:", error);
        setError("Failed to fetch questions. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }
    fetchInfo();
  }, []);

  // Filter questions based on search and filters
  const filteredQuestions = questions.filter((q) => {
    const matchesSearch = q.question
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCompany = filterCompany ? q.name === filterCompany : true;
    return matchesSearch && matchesCompany;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Browse Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center mb-8">
            Browse Interview Questions
          </h1>

          {/* Search and Filters */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />
            <div className="flex gap-4">
              <select
                value={filterCompany}
                onChange={(e) => setFilterCompany(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Companies</option>
                <option value="Google">Google</option>
                <option value="Facebook">Facebook</option>
                <option value="Amazon">Amazon</option>
                <option value="Microsoft">Microsoft</option>
              </select>
            </div>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="text-center text-gray-600">Loading questions...</div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center text-red-600">{error}</div>
          )}

          {/* Empty State */}
          {!isLoading && !error && filteredQuestions.length === 0 && (
            <div className="text-center text-gray-600">
              No questions match your search criteria.
            </div>
          )}

          {/* Questions List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredQuestions.map((q) => (
              <div key={q.id} className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-2">{q.question}</h2>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Company:</span> {q.name}
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