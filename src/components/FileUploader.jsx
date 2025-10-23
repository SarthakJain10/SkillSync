// // src/components/FileUploader.jsx
// import React, { useState } from "react";
// import { UploadCloud, FileText } from "lucide-react";

// const FileUploader = ({ onFileSelect }) => {
//   const [file, setFile] = useState(null);
//   const [dragActive, setDragActive] = useState(false);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
//     onFileSelect && onFileSelect(selectedFile);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(false);
//     if (e.dataTransfer.files && e.dataTransfer.files[0]) {
//       const droppedFile = e.dataTransfer.files[0];
//       setFile(droppedFile);
//       onFileSelect && onFileSelect(droppedFile);
//     }
//   };

//   const handleDrag = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
//     else if (e.type === "dragleave") setDragActive(false);
//   };

//   return (
//     <div
//       className={`relative w-full p-8 rounded-2xl shadow-lg backdrop-blur-md border transition-all duration-300 ${
//         dragActive
//           ? "border-blue-400 bg-white/60"
//           : "border-gray-200 bg-white/40"
//       }`}
//       onDragEnter={handleDrag}
//     >
//       <div
//         className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-10 transition-all duration-300 hover:border-blue-400 hover:bg-blue-50/30 cursor-pointer"
//         onClick={() => document.getElementById("fileInput").click()}
//         onDragEnter={handleDrag}
//         onDragLeave={handleDrag}
//         onDragOver={handleDrag}
//         onDrop={handleDrop}
//       >
//         {!file ? (
//           <>
//             <UploadCloud className="w-12 h-12 text-blue-500 mb-4" />
//             <p className="text-gray-600 text-center">
//               Drag & drop your resume here or{" "}
//               <span className="text-blue-600 font-medium underline">
//                 browse
//               </span>
//             </p>
//             <p className="text-xs text-gray-400 mt-2">
//               Supported: .pdf, .docx (max 5MB)
//             </p>
//           </>
//         ) : (
//           <div className="flex flex-col items-center">
//             <FileText className="w-12 h-12 text-green-500 mb-3" />
//             <p className="text-gray-700 font-medium">{file.name}</p>
//             <p className="text-sm text-gray-400 mt-1">
//               {Math.round(file.size / 1024)} KB
//             </p>
//           </div>
//         )}
//       </div>

//       <input
//         id="fileInput"
//         type="file"
//         accept=".pdf,.docx"
//         className="hidden"
//         onChange={handleFileChange}
//       />
//     </div>
//   );
// };

// export default FileUploader;


// src/components/FileUploader.jsx
import React, { useState, useEffect } from "react";
import { UploadCloud, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FileUploader = ({ onFileSelect }) => {
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const navigate = useNavigate();

  // Redirect to result page after a file is selected
  useEffect(() => {
    if (file) {
      // Optional callback to parent component
      onFileSelect && onFileSelect(file);

      // Redirect after small delay (optional)
      const timer = setTimeout(() => {
        navigate("/result");
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [file, navigate, onFileSelect]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) setFile(selectedFile);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
  };

  return (
    <div
      className={`relative w-full p-8 rounded-2xl shadow-lg backdrop-blur-md border transition-all duration-300 ${
        dragActive
          ? "border-blue-400 bg-white/60"
          : "border-gray-200 bg-white/40"
      }`}
      onDragEnter={handleDrag}
    >
      <div
        className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-10 transition-all duration-300 hover:border-blue-400 hover:bg-blue-50/30 cursor-pointer"
        onClick={() => document.getElementById("fileInput").click()}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        {!file ? (
          <>
            <UploadCloud className="w-12 h-12 text-blue-500 mb-4" />
            <p className="text-gray-600 text-center">
              Drag & drop your resume here or{" "}
              <span className="text-blue-600 font-medium underline">
                browse
              </span>
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Supported: .pdf, .docx (max 5MB)
            </p>
          </>
        ) : (
          <div className="flex flex-col items-center">
            <FileText className="w-12 h-12 text-green-500 mb-3" />
            <p className="text-gray-700 font-medium">{file.name}</p>
            <p className="text-sm text-gray-400 mt-1">
              {Math.round(file.size / 1024)} KB
            </p>
          </div>
        )}
      </div>

      <input
        id="fileInput"
        type="file"
        accept=".pdf,.docx"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileUploader;
