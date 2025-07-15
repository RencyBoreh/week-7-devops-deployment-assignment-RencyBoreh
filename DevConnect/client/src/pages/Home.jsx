// pages/Home.jsx
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-12 text-center">
      <h1 className="text-5xl font-extrabold text-blue-600 mb-4">Welcome to DevConnect</h1>
      <p className="text-lg text-gray-700 mb-8 max-w-xl">
        Keep your contacts organized, safe, and accessible. Whether you're managing a personal address book or professional leads, DevConnect gives you the control and clarity you deserve.
      </p>

      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <div className="bg-white rounded-lg shadow p-6 w-full md:w-64">
          <h3 className="text-xl font-semibold mb-2">📇 Manage Contacts</h3>
          <p className="text-gray-600 text-sm">Add, edit, and delete contacts with ease using a simple interface.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 w-full md:w-64">
          <h3 className="text-xl font-semibold mb-2">🔐 Secure Access</h3>
          <p className="text-gray-600 text-sm">Your data is protected with encrypted authentication and JWT-based access.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 w-full md:w-64">
          <h3 className="text-xl font-semibold mb-2">📊 Insightful Analytics</h3>
          <p className="text-gray-600 text-sm">See the most common domains, trends, and usage insights (coming soon!).</p>
        </div>
      </div>

      <div>
        <Link
          to="/register"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded shadow hover:bg-blue-600 transition"
        >
          Get Started
        </Link>
        <p className="mt-4 text-sm text-gray-500">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
