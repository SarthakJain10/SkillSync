import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

const Hero = () => {
  return (
    <div className="relative overflow-x-hidden overflow-y-clip will-change-transform">
      {/* Heading Section */}
      <motion.section
        id="heading"
        className="text-center py-6"
        initial={{ opacity: 0, y: 100, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="text-5xl font-bold mb-2">
          SkillSync<span className="text-blue-500">.ai</span>
        </h1>
        <p className="text-gray-500">Unlock your Resume's Potential</p>
      </motion.section>

      {/* Decorative curved shape - left */}
      <div className="absolute left-0 top-40 w-64 h-96 bg-blue-200 opacity-50 -ml-32 [clip-path:polygon(0%_0%,100%_10%,80%_50%,100%_90%,0%_100%)]"></div>

      {/* Main Content Section */}
      <motion.section
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="relative">
            <div className="absolute -left-10 top-0 transform -rotate-6">
              <Briefcase className="w-12 h-12 text-grey" size={80} />
            </div>

            <div className="mt-16">
              <h2 className="text-4xl font-bold mb-6">
                SkillSync<span className="text-blue-500">.ai</span> is built and maintained by friends who shared a common struggle:
              </h2>

              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500 mb-8">
                <p className="text-gray-600 italic text-sm leading-relaxed">
                  We endured a grueling job search process. We spent sleepless nights perfecting resumes only for them to be auto rejected within minutes. We promised each other that we would build a tool that would make job search less effortless.
                </p>
                <p className="text-gray-600 italic text-sm leading-relaxed mt-4">
                  So, we built this AI powered platform. We dissect every aspect of your resume to make sure your resume will land you an interview. This means you'll have a resume that not only meets but exceeds expectations. A resume that will put you ahead of the competition.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Upload Box */}
          <div className="relative mt-36 md:mt-36">
            <h3 className="text-2xl text-center font-bold mb-8">Get a free resume analysis</h3>
            <div className="border-4 border-dashed border-gray-300 rounded-2xl p-12 text-center bg-white">
              <div className="flex justify-center mb-6">
                <img src="/src/components/hero/images/paper.png" alt="FileText" className="w-20 h-20 text-gray-800" />
              </div>
              <h4 className="text-xl font-bold mb-2">upload your resume and</h4>
              <h4 className="text-xl font-bold mb-4">get a free analysis</h4>
              <p className="text-gray-500 text-sm">DOC, DOCX, PDF, ODT, TXT, RTF, and JPS, PNG,</p>
              <p className="text-gray-500 text-sm">GIF smaller than 5MB</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Decorative curved shape - right */}
      <div className="absolute right-0 top-113 w-64 h-96 bg-blue-200 rounded-l-full opacity-50 -mr-32"></div>

      {/* Violet CTA Section */}
      <motion.section
        className="relative flex justify-center items-center"
        initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="relative bg-[#9699FB] rounded-3xl max-w-3xl w-full py-20 my-20 text-center">
          {/* Corner Icons */}
          <div className="absolute top-0 -left-11 w-14 h-14">
            <img src="/src/components/hero/images/pen.png" alt="pen" className="w-full h-full text-gray-600" />
          </div>
          <div className="absolute -top-13 -right-3.5 w-20 h-18">
            <img src="/src/components/hero/images/board.png" alt="presentation" className="w-full h-full text-gray-600" />
          </div>
          <div className="absolute -bottom-6 -left-10.5 w-14 h-14">
            <img src="/src/components/hero/images/thumbs_up.png" alt="thumbsUp" className="w-full h-full text-gray-600" />
          </div>
          <div className="absolute -bottom-1.5 -right-12 w-15 h-15">
            <img src="/src/components/hero/images/flower.png" alt="flower" className="w-full h-full text-gray-600" />
          </div>

          {/* Text Content */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
            Get a Professional to Write Your Resume
          </h2>
          <p className="text-white text-base sm:text-lg leading-relaxed mb-8">
            We will work closely with you to create a standout resume that grabs the attention of recruiters and hiring managers.
            With our service, you'll get a polished, keyword-optimized resume that effectively showcases your skills and experiences,
            increasing your chances of landing interviews and achieving your career goals.
          </p>

          {/* CTA Button */}
          <button className="bg-white text-blue-500 px-8 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
            Start
          </button>
        </div>
      </motion.section>
    </div>
  )
}

export default Hero
