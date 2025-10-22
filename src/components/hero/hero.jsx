import './hero.css'
import ResumeChecker from "../ResumeChecker";
import How_it_works from '../How_it_works';
import FAQSection from '../FAQs';
import TestimonialSection from '../Testimonials';

const Hero = () => {

  return (
    <div className="relative overflow-x-hidden overflow-y-clip will-change-transform">
        <section className="relative bg-linear-to-r from-white via-sky-50 to-gray-100 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">

                <div className="md:w-1/2 space-y-6">

                    <span className="text-sm text-blue-600 font-medium uppercase tracking-wide">Resume Checker</span>
                    
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                        Is your resume good enough?
                    </h1>
                    
                    <p className="text-gray-600 text-base sm:text-lg">
                        A free and fast AI resume checker performing 16 crucial checks to ensure your resume is ready to impress and get interview callbacks.
                    </p>

                    {/* Upload Box */}
                    <div className="mt-8">
                        <div className="border-2 border-dashed border-gray-300 rounded-3xl p-10 text-center bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-xl font-semibold text-gray-800 mb-1">Upload your resume and</h4>
                        <h4 className="text-xl font-semibold text-gray-800 mb-3">get a free analysis</h4>
                        <p className="text-gray-500 text-sm">PDF & DOCX only. Max 2MB file size.</p>
                        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors">
                            Upload Now
                        </button>
                        </div>
                    </div>
                </div>

                {/* Image */}
                <div className="md:w-1/2 flex justify-center">
                <img
                    src="https://enhancv.com/_next/static/images/ats-checker-716fd8ba725f0a2f6ed622ea30fb0538.svg"
                    alt="ATS Checker Icon"
                    className="w-80 sm:w-[400px] object-contain"
                />
                </div>

            </div>
        </section>

        <section>
            <How_it_works />
        </section>

        <section>
            <ResumeChecker />
        </section>

        <section>
            <TestimonialSection />
        </section>

        <section>
            <FAQSection />
        </section>
        
    </div>
  )
}

export default Hero
