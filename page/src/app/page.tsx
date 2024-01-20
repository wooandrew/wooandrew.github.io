// page.tsx : src/app/page.tsx

// Import Components
import Welcome from './components/welcome';
import EducationCard from './components/EducationCard';

export default function Home() {

  return (
    <main className="bg-black">
      <Welcome />
      <div id="about" className="w-screen bg-zinc-900">
        <div className="text-center pt-5 pb-4 text-4xl font-abel">- Education -</div>
        <div className="flex justify-center space-between portrait:flex-col">
          <EducationCard 
            school="Georgia Institute of Technology | Atlanta, GA" 
            degree="Bachelor of Science in Computer Science" 
            dates="August 2021 - May 2024"
            program="Systems Architecture & Information/Internetworks" 
          />
          <EducationCard 
            school="Georgia Institute of Technology | Atlanta, GA" 
            degree="Master of Science in Computer Science" 
            dates="August 2024 - May 2025"
            program="High Performance Computing" 
          />
        </div>  
      </div>
    </main>
  );
};
