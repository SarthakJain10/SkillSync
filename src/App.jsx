import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Upload from './pages/Upload';
import Result from './pages/Result';

function App() {

  return (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-white via-sky-50 to-gray-100 text-gray-900">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
