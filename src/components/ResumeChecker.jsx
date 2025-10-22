import React from 'react'
import ChecklistCard from './CheckListCard'

const ResumeChecker = () => {
  const formatChecks = [
    { text: "File format and size", checked: true },
    { text: "Resume length", checked: true },
    { text: "Long bullet points with suggestions on how to shorten", checked: true }
  ]

  const contentChecks = [
    { text: "ATS parse rate", checked: true },
    { text: "Repetition of words and phrases", checked: true },
    { text: "Spelling and grammar", checked: true },
    { text: "Quantifying impact in experience section with examples", checked: true }
  ]

  const skillsChecks = [
    { text: "Hard skills", checked: true },
    { text: "Soft skills", checked: true }
  ]

  const resumeSectionChecks = [
    { text: "Contact information", checked: true },
    { text: "Essential sections", checked: true },
    { text: "Personality showcase with tips on how to improve", checked: true }
  ]

  const styleChecks = [
    { text: "Resume design", checked: true },
    { text: "Email address", checked: true },
    { text: "Usage of active voice", checked: true },
    { text: "Usage of buzzwords and cliches", checked: true }
  ]

  return (
    <div className="bg-linear-to-br from-black via-gray-900 to-purple-900 relative overflow-hidden">
      {/* Purple curved lines decoration */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-0 w-96 h-96 border-2 border-purple-500/30 rounded-full transform translate-x-32 -translate-y-32"></div>
        <div className="absolute top-20 right-0 w-80 h-80 border-2 border-purple-400/20 rounded-full transform translate-x-40 -translate-y-20"></div>
        <div className="absolute top-32 right-0 w-64 h-64 border-2 border-purple-300/15 rounded-full transform translate-x-48 -translate-y-8"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Our AI-powered resume checker goes<br />
            beyond typos and punctuation
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We've built-in GPT to help you create a resume that's tailored to the position you're applying for.
          </p>
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Description */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Resume optimization checklist
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We check for 16 crucial things across 5 different categories on your resume including 
                content, file type, and keywords in the most important sections of your resume. Here's a full 
                list of the checks you'll receive:
              </p>
            </div>

            {/* Content Card */}
            <ChecklistCard
              icon="edit"
              title="Content"
              items={contentChecks}
              iconBg="bg-teal-400"
            />
          </div>

          {/* Middle Column */}
          <div className="lg:col-span-1 space-y-8">
            {/* Format Card */}
            <ChecklistCard
              icon="document"
              title="Format"
              items={formatChecks}
              iconBg="bg-teal-400"
            />

            {/* Skills Card */}
            <ChecklistCard
              icon="lightbulb"
              title="Skills suggestion"
              items={skillsChecks}
              iconBg="bg-teal-400"
            />
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1 space-y-8">
            {/* Resume Sections Card */}
            <ChecklistCard
              icon="clipboard"
              title="Resume sections"
              items={resumeSectionChecks}
              iconBg="bg-teal-400"
            />

            {/* Style Card */}
            <ChecklistCard
              icon="typography"
              title="Style"
              items={styleChecks}
              iconBg="bg-teal-400"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumeChecker
