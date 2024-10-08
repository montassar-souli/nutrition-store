import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
      <Link
        to="/"
        className="text-lg text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
