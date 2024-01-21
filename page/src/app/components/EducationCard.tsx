// EducationCard.tsx : src/app/components/EducationCard.tsx

import React from 'react';

interface EducationCardProps {
  school: string;
  degree: string;
  dates: string;
  program: string;
}

const EducationCard: React.FC<EducationCardProps> = ({ school, degree, dates, program }) => {

  return (
    <div className="bg-gray-500 font-sans p-4 landscape:pr-16 m-2 mt-0 rounded-md flex items-center">
      <object
        type="image/svg+xml"
        data="/GTVertical_RGB.svg"
        aria-label="Logo"
        className="w-24 h-24 z-10 pr-4"
      >
        Your browser does not support SVG
      </object>
      <div className="flex flex-col">
        <h2 className="text-xl font-abel">{school}</h2>
        <h2 className="text-black font-abel">{degree}</h2>
        <p className="text-gray-700 font-abel">{dates}</p>
        <p className="text-gray-700 font-abel">Concentration:<br></br>{program}</p>
      </div>
    </div>
  );
};

export default EducationCard;
