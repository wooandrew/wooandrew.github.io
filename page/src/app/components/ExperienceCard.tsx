// ExperienceCard.tsx : src/app/components/ExperienceCard.tsx
'use client';
import React, { useEffect, useState } from 'react';

interface ExperienceCardProps {
  logo: string;
  title: string;
  location: string;
  mode: string;
  company: string;
  position: string;
  dates: string;
  description: string[];
  skills: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  logo,
  title,
  location,
  mode,
  company,
  position,
  dates,
  description,
  skills
}) => {
  const [duration, setDuration] = useState<string>("");

  const calculateTimeAtCompany = (start: string, end: string): string => {
    let diffMonths = 0;
    let diffYears = 0;

    const startDate = new Date(start + " 1");
    const endDate = end.toLowerCase() === "present" ? new Date() : new Date(end + " 1");

    diffMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    diffMonths -= startDate.getMonth();
    diffMonths += endDate.getMonth();

    diffYears = Math.floor(diffMonths / 12);
    diffMonths = (diffMonths % 12) + 1;

    if (diffYears === 0) return `${diffMonths} mos`;
    return `${diffYears} yrs ${diffMonths} mos`;
  };

  useEffect(() => {
    const [start, end] = dates.split(" - ");
    const updateDuration = () => {
      setDuration(calculateTimeAtCompany(start, end));
    };

    updateDuration(); // Initial call
    if (end.toLowerCase() === "present") {
      const interval = setInterval(updateDuration, 60 * 1000); // Update every 1 minute
      return () => clearInterval(interval);
    }
  }, [dates]);

  return (
    <div className="portrait:w-[90%] bg-gray-500 font-sans p-4 portrait:m-auto portrait:mb-2 landscape:m-2 landscape:mt-0 rounded-md flex landscape:flex-row portrait:flex-col justify-between">
      <div className="landscape:w-[20%] portrait:w-[90%] m-auto">
        <img src={logo} className="w-full z-10" />
      </div>
      <div className="portrait:w-[90%] landscape:w-[80%] mt-0 m-auto grid landscape:grid-cols-2 landscape:pl-8">
        <p className="col-span-1 text-xl portrait:text-center font-abel portrait:mt-2">{title}</p>
        <p className="col-span-1 font-abel landscape:text-right portrait:text-center">{location} &#183; {mode}</p>
        <p className="col-span-1 text-gray-700 portrait:text-center font-abel">{company} &#183; {position}</p>
        <p className="col-span-1 text-gray-700 font-abel portrait:text-center landscape:text-right">
          {dates} &#183; {duration}
        </p>
        <span className="landscape:col-span-2 portrait:mt-2 text-black font-abel">
          <span className="font-bold">Description:</span><br />
          <ul className="list-disc pl-8">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </span>
        <div className="landscape:col-span-2 text-black font-abel">
          <p className="font-bold">Skills:</p>
          <p className="pl-4">{skills}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
