// ExperienceCard.tsx : src/app/components/ExperienceCard.tsx

import React from 'react';

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

const ExperienceCard: React.FC<ExperienceCardProps> = ({ logo, title, location, mode, company, position, dates, description, skills }) => {
    
  var calculateTimeAtCompany = (start: string, end: string) => {
    var diffMonths = 0;
    var diffYears = 0;

    // Parse "Month Year" format to Date object for the start date
    var startDate = new Date(start + " 1");

    // Use the current date if the end date is "Present"
    var endDate;
    if (end.toLowerCase() === "present") {
        endDate = new Date();
    } else {
        // Parse "Month Year" format to Date object for the end date
        endDate = new Date(end + " 1");
    }

    // Calculate the difference in months
    diffMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    diffMonths -= startDate.getMonth();
    diffMonths += endDate.getMonth();

    // Calculate the difference in years and the remaining months
    diffYears = Math.floor(diffMonths / 12);
    diffMonths = diffMonths % 12 + 1;

    // Return the result as a string in the format "X yrs Y mos"

    if (diffYears === 0)
      return diffMonths + " mos";

    return diffYears + " yrs " + diffMonths + " mos";
  }

  return (

    <div className="portrait:w-[90%] bg-gray-500 font-sans p-4 portrait:m-auto portrait:mb-2 landscape:m-2 landscape:mt-0 rounded-md flex flex-row justify-between">

      <div className="w-[20%] m-auto">
        <img src={logo} className="w-full z-10" />
      </div>
      <div className="w-[80%] grid landscape:grid-cols-2 pl-8">
        <p className="col-span-1 text-xl font-abel">{title}</p>
        <p className="col-span-1 font-abel landscape:text-right">{location} &#183; {mode}</p>
        <p className="col-span-1 text-gray-700 font-abel">{company} &#183; {position}</p>
        <p className="col-span-1 text-gray-700 font-abel landscape:text-right">{dates} &#183; {calculateTimeAtCompany(dates.split(" - ")[0], dates.split(" - ")[1])}</p>
        <span className="landscape:col-span-2 text-black font-abel"><span className="font-bold">Description:</span><br></br>
          <ul className="list-disc pl-8">
            {description.map((item, index) => <li key={index}>{item}</li>)}
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
