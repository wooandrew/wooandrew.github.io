// EducationCard.tsx : src/app/components/EducationCard.tsx

import React from 'react';

interface EducationCardProps {
  school: string;
  degree: string;
  dates: string;
  program: string;
  link: string;
  achivements: string;
}

const EducationCard: React.FC<EducationCardProps> = ({ school, degree, dates, program, link, achivements }) => {

  return (
    <div className="portrait:w-[90%] h-full bg-gray-500 font-sans p-4 landscape:pr-16 portrait:m-auto portrait:mb-2 landscape:m-2 landscape:mt-0 rounded-md flex">
      <a href={link} className="m-auto"> 
        <img
          // type="image/svg+xml"
          src="/GTVertical_RGB.svg"
          aria-label="Logo"
          className="w-24 h-24 z-10 pr-4"
        />
      </a>
      <div className="w-[80%] flex flex-col">
        <h2 className="text-xl font-abel">{school}</h2>
        <h2 className="text-black font-abel">{degree}</h2>
        <p className="text-gray-700 font-abel">{dates}</p>
        <p className="text-gray-900 font-abel font-bold">Concentration:</p>
        <p className="text-gray-900 font-abel">{program}</p>
        <p className="text-gray-900 font-abel font-bold">Achievements:</p>
        <p className="text-gray-900 font-abel">{achivements}</p>
      </div>
    </div>
  );
};

export default EducationCard;
