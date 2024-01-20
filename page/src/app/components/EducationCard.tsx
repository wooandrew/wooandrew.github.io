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
    <div className="bg-gray-500 font-sans p-4 rounded-md m-2">
      <h2 className="text-lg font-semibold">{school}</h2>
      <h2 className="text-black">{degree}</h2>
      <p className="text-gray-600">Dates: {dates}</p>
      <p className="text-gray-600">Concentration:<br></br>{program}</p>
    </div>
  );
};

export default EducationCard;
