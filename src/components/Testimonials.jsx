import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "Software Engineer",
    text: "SkillSync.ai Executive has changed my life: One week & four interviews later, I will be making 150% more doing the job I chose.",
  },
  {
    name: "Mark Smith",
    role: "Product Manager",
    text: "I already recommended Enhancv to all of my friends. I am still using their service to update my resume, even after finding a job. I would advise anyone in need of such service to choose SkillSync.ai.",
  },
  {
    name: "Sofia Lee",
    role: "UX Designer",
    text: "Trust the process of allowing someone else who offers this expertise to help you. They know what they are doing.",
  },
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);

  // Rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center max-w-7xl mx-auto px-8 py-20 gap-12">
      {/* Left Section - Rotating Testimonial Card */}
        <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl max-w-md w-full transition-transform duration-500 hover:scale-105">
            {/* Quote Icon */}
            <svg
            className="w-10 h-10 text-blue-400 mb-4"
            fill="currentColor"
            viewBox="0 0 24 24"
            >
            <path d="M7.17 6A5.001 5.001 0 0 0 2 11v6h5v-6h0.17a3.001 3.001 0 0 1 0-6zM17.17 6A5.001 5.001 0 0 0 12 11v6h5v-6h0.17a3.001 3.001 0 0 1 0-6z" />
            </svg>

            {/* Testimonial Text */}
            <p className="text-black text-lg mb-6 italic transition-opacity duration-1000">
            "{testimonials[current].text}"
            </p>

            {/* User Info */}
            <div className="flex items-center gap-4 mt-4">
            <div className="w-12 h-12 rounded-full bg-gray-300 shrink-0 overflow-hidden">
                {/* Placeholder for user image */}
                <img
                src={`https://i.pravatar.cc/150?img=${current + 1}`}
                alt={testimonials[current].name}
                className="w-full h-full object-cover"
                />
            </div>
            <div>
                <h3 className="text-black font-semibold">{testimonials[current].name}</h3>
                <p className="text-black/70 text-sm">{testimonials[current].role}</p>
            </div>
            </div>
        </div>
        </div>


      {/* Right Section - Static Text */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Your resume is an extension of yourself – make one that’s truly you
        </h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold w-max transition-all">
          Build Your Resume
        </button>
        <div className="flex items-center gap-2">
          {[...Array(5)].map((_, idx) => (
            <span key={idx} className="text-yellow-400 text-xl">★</span>
          ))}
          <span className="text-white/70 ml-2">Excellent 5-star reviews</span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
