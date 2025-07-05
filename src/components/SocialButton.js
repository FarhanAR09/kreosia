import React from 'react';

const SocialButton = ({
  href,
  icon, // This will be the SVG icon component
  handleText, // e.g., "@kreo_sia"
  backgroundColorClass, // e.g., "bg-gradient-to-r from-purple-600 to-pink-500"
  circleColorClass, // e.g., "bg-white" for the circle background
  textColorClass = 'text-white', // Default text color, but can be overridden
  onClick // Optional click handler
}) => {

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`flex items-center rounded-full shadow-md
                  ${backgroundColorClass} // e.g., bg-gradient-to-r from-purple-600 to-pink-500
                  transition-colors duration-200 hover:opacity-90`} // Added hover effect for the whole button
      style={{
          // Set the overall button height to match the circle's height to ensure proper vertical alignment
          height: '48px'
      }}
    >
      {/* Icon in Circle */}
      <div className={`flex-shrink-0 flex items-center justify-center rounded-full h-14 w-14 ${circleColorClass}`}>
        {/* Pass the icon prop directly */}
        {icon}
      </div>

      {/* Text in Rounded Box */}
      <div
        className={`flex-grow flex items-center justify-center pr-4 pl-2 text-center rounded-r-full
                    ${textColorClass}`}
        style={{
            height:'48px', // Apply the calculated height
            // Optional: Adjust vertical alignment if text box is shorter than circle
            // Can use `margin-top` or `align-self` on this div if needed,
            // but `items-center` on parent already helps center it.
        }}
      >
        <span className="text-sm font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
          {handleText}
        </span>
      </div>
    </a>
  );
};

export default SocialButton;