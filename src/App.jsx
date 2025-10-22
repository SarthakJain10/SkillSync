import './App.css'
import { FileText, Briefcase, Award, ThumbsUp, Presentation, Star, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import Hero from './components/hero/hero';
import Header from './components/header/header';
import Footer from './components/footer/footer';

function App() {

  return (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-white via-sky-50 to-gray-100 text-gray-900">
      <Header />
      <Hero />
      <Footer />
    </div>
  )
}

export default App
