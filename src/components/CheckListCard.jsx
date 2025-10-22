import React from 'react'

const ChecklistCard = ({ icon, title, items, iconBg }) => {
  const getIcon = (iconType) => {
    switch (iconType) {
      case 'document':
        return (
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
          </svg>
        )
      case 'edit':
        return (
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
          </svg>
        )
      case 'lightbulb':
        return (
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12,2A7,7 0 0,0 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H15A1,1 0 0,0 16,17V14.74C17.81,13.47 19,11.38 19,9A7,7 0 0,0 12,2M9,21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9V21Z" />
          </svg>
        )
      case 'clipboard':
        return (
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3" />
          </svg>
        )
      case 'typography':
        return (
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 
             transition-all duration-500 ease-out 
             hover:shadow-[8px_8px_20px_rgba(90,215,191)] hover:translate-y-1 hover:translate-x-1"
>
        {/* Icon and Title */}
        <div className="flex items-center mb-6">
            <div className={`w-12 h-12 ${iconBg} rounded-full flex items-center justify-center mr-4`}>
            {getIcon(icon)}
            </div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>

        {/* Checklist Items */}
        <div className="space-y-3">
            {items.map((item, index) => (
            <div key={index} className="flex items-start">
                <div className="shrink-0 mt-1">
                <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                    />
                </svg>
                </div>
                <span className="ml-3 text-gray-300 text-sm leading-relaxed">{item.text}</span>
            </div>
            ))}
        </div>
    </div>

  )
}

export default ChecklistCard
