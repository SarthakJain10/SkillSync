import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const How_it_works = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"], // Track scroll only within section
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 500]);

  return (
    <div>
        <section
        ref={sectionRef}
        className="relative flex max-w-7xl mx-auto px-8 py-20 gap-12 items-start min-h-[45vh]"
        >
            {/* Left Section - Moves with scroll */}
            <div className="w-1/2 relative flex justify-center">
                <motion.div style={{ y }} className="flex justify-center sticky top-20">
                <object
                    type="image/svg+xml"
                    data="/resume-348c033dc738da343f6621e474f48a87.svg"
                    width="600"
                    height="600"
                    className="object-contain"
                ></object>
                </motion.div>
            </div>

            {/* Right Section */}
            <div className="w-1/2 flex flex-col gap-10 pb-40">
                <h2 className="text-4xl font-bold text-gray-900 leading-snug">
                SkillSync's Resume Checker forms its ATS score with a two-tier system
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed">
                When you’re applying for a job, there’s a high chance your resume will be screened through an applicant tracking system way before it finds its way on a recruiter’s screen. ATS helps hiring managers find the right candidates by searching for keywords and adding the resume to a database.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                That’s why the success of your resume is highly dependent on how optimized your resume is for the job you’re applying for, the resume template you’re using, and what skills and keywords you have included.
                </p>

                {/* Tier 1 */}
                <div className="flex flex-col items-start gap-5">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl">
                    1
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    The proportion of content we can interpret
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                    Similar to an ATS, we analyze and attempt to comprehend your resume. The greater our understanding of your resume, the more effectively it aligns with a company’s ATS.
                    </p>
                </div>
                </div>

                {/* Tier 2 */}
                <div className="flex flex-col items-start gap-5">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl">
                    2
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    What our checker identifies
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                    Although an ATS doesn’t look for spelling mistakes and poorly crafted content, recruitment managers certainly do. The second part of our score is based on the quantifiable achievements you have in your resume and the quality of the written content.
                    </p>
                </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default How_it_works