// src/pages/Upload.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import FileUploader from "../components/FileUploader";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) return alert("Please upload a file first!");

    setUploading(true);
    setTimeout(() => {
      navigate("/result");
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 px-6">
      <h1 className="text-4xl font-bold mb-2 text-gray-800">
        Upload Your <span className="text-blue-600">Resume</span>
      </h1>
      <p className="text-gray-500 mb-10">
        Get instant insights powered by AI resume analysis
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <FileUploader onFileSelect={setFile} />

        <button
          type="submit"
          disabled={uploading}
          className={`w-full mt-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
            uploading
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg"
          }`}
        >
          {uploading ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5 animate-spin text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
              Analyzing...
            </span>
          ) : file ? (
            <span className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5" /> Continue
            </span>
          ) : (
            "Upload Resume"
          )}
        </button>
      </form>

      <p className="text-sm text-gray-400 mt-10">
        SkillSync.ai © {new Date().getFullYear()} — AI-powered career insights
      </p>
    </div>
  );
};

export default Upload;
