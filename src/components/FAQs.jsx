import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqsData = [
  {
    question: "What is a resume checker?",
    answer:
      `A resume checker is a tool or software used to evaluate and improve resumes. It checks for proper formatting, relevant keywords (important for Applicant Tracking Systems), grammar and spelling errors, and content relevance.
      
      SkillSync’s resume checker also assesses consistency in details, suggests customization for different industries, and provides feedback for improvement. We help ensure your resume meets current professional standards and trends and increase your chances of getting noticed by employers and recruiters.`,
  },
  {
    question: "How do I check my resume score?",
    answer: (
      <>
        <p>
          Upload your resume to <strong>SkillSync.ai Resume Checker</strong>. Once we run the check, you will be redirected to another page where you can see your report with a <strong>score on the left side of the screen</strong>.
        </p>
        <p>
          Keep in mind that there’s no such thing as an <strong>ATS score</strong> – no tool online provides an actual score.
        </p>
        <p>
          <strong>SkillSync.ai resume report scoring system</strong> is based on two major things:
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>
            <strong>The percentage of parsed content:</strong> Like an ATS, we parse your resume and try to understand it. The more we understand from your resume, the better it performs with an ATS used by a company.
          </li>
          <li>
            <strong>The issues our checker finds:</strong> While applicant tracking systems don’t check for typos and badly written content, our checker and recruiting managers do. This aspect of the scoring depends on the measurable accomplishments in your resume and the caliber of the writing.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "How do I improve my resume score?",
    answer:(
        <>
        <p>A higher resume score can be achieved by improving key sections on your resume. Here’s what you can do:</p>
        <ul className="list-disc ml-6 mt-2">
            <li>Rewrite your experience section to include quantifiable achievements. Don’t just state your job duties. Write your accomplishments in the position you’ve held.</li>
            <li>Include skills that are relevant to the position you’re applying for and are included in the job posting.</li>
            <li>Add an accomplishments section to highlight the truly relevant feats of your career.</li>
            <li>Use a PDF resume and a professionally designed resume template.</li>
            <li>Spell out acronyms alongside their full phrases, include a distinct skills section, maintain a consistent work history with clear job titles and employment periods, and meticulously proofread for errors.</li>
        </ul>
        </>
    ),
  },
  {
    question: "How do I know my resume is ATS compliant?",
    answer:(
        <>
            <p>
            To ensure ATS compliance, integrate relevant keywords from the job description naturally, use simple formatting with a clear layout, and stick to conventional headings like <strong>"Work Experience"</strong> and <strong>"Education"</strong>.
            </p>
            <p>
            Using a PDF from a dedicated resume builder like <strong>SkillSync.ai</strong> is better than a Word or doc file, as it ensures your formatting stays intact. Double-column resumes are just as good as single-column resumes, and fonts don’t matter much as long as they are easy to read.
            </p>
            <p>
            Spell out acronyms alongside their full phrases, include a distinct skills section, maintain a consistent work history with clear job titles and employment periods, and meticulously proofread for errors.
            </p>
        </>
    ),
  },
  {
    question: "What is a good ATS score?",
    answer: (
      <>
        <p>
          <strong>SkillSync.ai Resume Checker score</strong> is calculated based on two factors combining <strong>16 checks</strong>. If your resume scores higher than <strong>80</strong>, you can consider it mostly good.
        </p>
        <p>
          Keep in mind, however, that a score is only one of many things you should consider. Key sections like <strong>contact information</strong> and <strong>experience</strong> should be immaculate. Make sure to review your resume in detail before applying for a job.
        </p>
      </>
    ),
  },
  {
    question: "Can an ATS read PDFs?",
    answer: (
      <>
        <p>
          <strong>Yes.</strong> We’ve conducted tests with the most popular applicant tracking systems, and it seems that it’s a myth that an ATS can’t read a PDF.
        </p>
        <p>
          In fact, PDFs often score higher because they are <strong>static files</strong> that, once saved, <strong>cannot be edited</strong>.
        </p>
      </>
    ),
  },
  {
    question: "How do I review my resume for errors?",
    answer: (
      <>
        <p>
          It’s easy to get lost in the details of separate sections, ignoring how they all come together in the final resume. A <strong>complete resume review</strong> will help you focus on the full picture.
        </p>
        <p>
          You’ll start to notice if you’re missing key elements, like your <strong>skills section positioning</strong>, or if it doesn’t align with your achievements. That’s why it’s important to take enough time for <strong>proofreading</strong> and <strong>quality checks</strong>.
        </p>
      </>
    ),
  },
];

const FAQItem = ({ faq, isOpen, toggle }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full flex justify-between items-center text-left focus:outline-none"
        onClick={toggle}
      >
        <span className="text-lg font-medium text-gray-900">{faq.question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      <div
        className={`mt-2 text-gray-700 transition-max-height duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        {/*
          Option 1: If answer is a string with \n
        */}
        {typeof faq.answer === "string"
          ? faq.answer.split("\n").map((line, i) => (
              <p key={i} className="mb-2">
                {line}
              </p>
            ))
          : /* Option 2: If answer is JSX */
            faq.answer}
      </div>
    </div>
  );
};


const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
        Frequently Asked Questions
      </h2>
      <div className="bg-white shadow-md rounded-xl divide-y divide-gray-200">
        {faqsData.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            isOpen={openIndex === index}
            toggle={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
