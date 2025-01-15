import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Ace Your Next Tech Interview
          </h1>
          <p className="text-xl mb-8">
            Share and explore real interview questions asked by top tech
            companies.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/submit"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-200"
            >
              Submit a Question
            </Link>
            <Link
              href="/browse"
              className="bg-transparent border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-200"
            >
              Browse Questions
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose InterviewPrep?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">Real Questions</h3>
              <p className="text-gray-600">
                Get access to real interview questions asked by top companies.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">Community-Driven</h3>
              <p className="text-gray-600">
                Contribute and learn from a community of software engineers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">Free Forever</h3>
              <p className="text-gray-600">
                Our platform is completely free to use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Submit a Question</h3>
              <p className="text-gray-600">
                Share the questions you were asked in your interview.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Browse Questions</h3>
              <p className="text-gray-600">
                Explore questions submitted by other users.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Prepare & Succeed</h3>
              <p className="text-gray-600">
                Use the questions to prepare for your next interview.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "InterviewPrep helped me land my dream job at Google! The
                questions were spot-on."
              </p>
              <p className="text-gray-800 font-semibold">- John Doe</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "I love how easy it is to contribute and learn from others.
                Highly recommend!"
              </p>
              <p className="text-gray-800 font-semibold">- Jane Smith</p>
            </div>
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
