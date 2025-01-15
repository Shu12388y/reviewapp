"use client";

import { useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function SubmitPage() {
  const [formData, setFormData] = useState({
    question: "",
    name: "",
  });

  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const authToken = window.sessionStorage.getItem("auth");

      if (!authToken) {
        console.error("No authentication token found.");
        alert("Please Login")
        return;
      }

      const options = {
        headers: {
          auth: `${authToken}`,
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        "/api/submission/createsubmission",
        formData,
        options
      );

      console.log("API Response:", response.data);
      console.log("Form Data Submitted:", formData);

      if (response.status === 200 || response.status === 201) {
        alert("Submission created successfully!");
        window.location.reload();
        
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      if (axios.isAxiosError(error)) {
        alert(
          `Error: ${
            error.response?.data?.message ||
            "An error occurred while submitting the form."
          }`
        );
      } else {
        alert("An unexpected error occurred. Please try again.");
      }
    }
  };
  return (
    <div className="bg-gray-50 min-h-screen">
     
      {/* Submit Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center mb-8">
            Submit an Interview Question
          </h1>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            {/* Company Field */}
            <div className="mb-6">
              <label
                htmlFor="company"
                className="block text-gray-700 font-semibold mb-2"
              >
                Company Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter the company name..."
                required
              />
            </div>
            {/* Question Field */}
            <div className="mb-6">
              <label
                htmlFor="question"
                className="block text-gray-700 font-semibold mb-2"
              >
                Interview Question
              </label>
              <textarea
                id="question"
                name="question"
                value={formData.question}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                placeholder="Enter the interview question..."
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
              >
                Submit Question
              </button>
            </div>
          </form>
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
