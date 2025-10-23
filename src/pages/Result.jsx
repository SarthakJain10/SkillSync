// src/pages/Result.jsx
import React from "react";

const Result = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-white to-blue-50">
      <h2 className="text-4xl font-semibold mb-4">Your Resume Analysis</h2>
      <p className="text-gray-600 mb-8 text-center max-w-xl">
        Here are your personalized insights and recommendations based on your uploaded resume.
      </p>

      <div className="bg-white p-8 rounded-2xl shadow-md w-96 text-center">
        <p className="text-lg font-medium mb-2">✅ Resume Score: 85/100</p>
        <p className="text-gray-600">Strong in skills alignment, needs improvement in experience clarity.</p>
      </div>
    </section>
  );
};

export default Result;
