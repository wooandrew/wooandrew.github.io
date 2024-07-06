// page.tsx : src/app/page.tsx

// Import Components
import Welcome from './components/welcome';
import EducationCard from './components/EducationCard';
import ExperienceCard from './components/ExperienceCard';

export default function Home() {

  return (
    <main className="bg-black">
      
      <Welcome />

      <div id="about" className="w-screen bg-zinc-900">
        <div className="text-center p-5 text-4xl font-abel">- About -</div>
        <div className="landscape:w-[80%] m-auto grid grid-cols-3">
          <div className="col-span-2 p-5">
            <p className="text-2xl font-abel">Hi, I'm Andrew Woo.</p>
            <p className="text-xl font-abel">I'm a M.S. Computer Science student at the Georgia Institute of Technology, Class of '25, with concentration in High Performance Computing.</p>
            <p className="text-xl font-abel">I'm passionate about edge-computing, embedded systems, systems architecture, and avionics.</p>
          </div>
          <div className="col-span-1 p-5 m-auto mt-0">
            <p className="text-2xl font-abel">I am currently...</p>
            <ul className="text-xl font-abel pl-5 list-disc list-outside">
              <li className="text-xl font-abel">Interning at Norfolk Southern.</li>
              <li className="text-xl font-abel">Learning Cisco's Application Centric Infrastructure (ACI) SDN solution.</li>
              <li className="text-xl font-abel">Learning the electric guitar.</li>
            </ul>
          </div>
        </div>

        <div className="text-center p-5 text-4xl font-abel">- Education -</div>
        <div className="landscape:w-[80%] landscape:m-auto landscape:grid landscape:grid-cols-11 portrait:flex portrait:justify-evenly portrait:flex-col pb-2">
          <div className="landscape:col-span-5">
            <EducationCard 
              school="Georgia Institute of Technology | Atlanta, GA" 
              degree="Bachelor of Science in Computer Science" 
              dates="August 2021 - May 2024"
              program="Systems Architecture & Information/Internetworks" 
              link="https://www.cc.gatech.edu/threads-better-way-learn-computing"
              achivements="VIP Program, Zell Miller Scholarship, Dean's List, Highest Honors"
            />
          </div>
          <div className="landscape:col-span-1 landscape:columns-xs"></div>
          <div className="landscape:col-span-5">
            <EducationCard 
              school="Georgia Institute of Technology | Atlanta, GA" 
              degree="Master of Science in Computer Science" 
              dates="August 2024 - May 2025"
              program="High Performance Computing" 
              link="https://cse.gatech.edu/high-performance-computing"
              achivements="N/A"
            />
          </div>
        </div>

        <div className="text-center p-5 text-4xl font-abel">- Experience -</div>
        <div className="landscape:w-[80%] landscape:m-auto">
          <ExperienceCard
            logo="./ns_logo.png"
            title="Data Center Operations Intern"
            location="Atlanta, GA"
            mode="On-Site"
            company="Norfolk Southern"
            position="Intern"
            dates="May 2024 - Present"
            description={["Working in Norfolk Southern's production data center in Tucker, Georgia.", "Verified functionality and prepared networking devices for deployment for remote field and railroad operations.", "Worked on optimizing power and load on servers to balance power distribution across power distribution units.", "Developing Python scripts to communicate with and automating network switch configuration."]}
            skills="Software Development, Python, Cisco Application Centric Infrastructure (ACI), Data Center Operations"
          />
          <ExperienceCard
            logo="./ps_logo.png"
            title="Software Engineer Intern"
            location="Atlanta, GA"
            mode="On-Site"
            company="Publicis Sapient"
            position="Intern"
            dates="Jun 2023 - Aug 2023"
            description={["Contributed to the development of a financial services product as a software engineering intern.", "Worked with four software engineering interns and two product management interns to create a full stack application.", "Primarily focused on developing the backend with PostgreSQL, Python, FastAPI, and integrating it into a React.js frontend.", "Developed a Generative AI chatbot using Langchain and Vertex AI to gather real time information about the stocks."]}
            skills="Software Development, TypeScript, React.js, Node.js, Python, PostgreSQL, Generative AI, FastAPI, Langchain, Jira, Git"
          />
          <ExperienceCard
            logo="./el_logo.png"
            title="Mathematics & Computer Science Teacher"
            location="Suwannee, GA"
            mode="Hybrid"
            company="Eye Level Learning Center"
            position="Teacher"
            dates="Jan 2021 - Jul 2023"
            description={["Tutored K-12 math and introductory computer science to groups of up to 4 students.", "Planned and teaching individualized lessons based on each student’s capabilities and understanding.", "Taught math subjects from introductory level addition and subtraction to high school level algebra and calculus.", "Developed and taught a Python cirriculum, from basic programming control flow to game development using PyGame."]}
            skills="Teaching, Curriculum Development, Mathematics Education, Computer Science Education, Python"
          />
          <ExperienceCard
            logo="./none.png"
            title="Computer Science Tutor"
            location="Atlanta, GA"
            mode="Hybrid"
            company="Self-Employed"
            position="Tutor"
            dates="Sep 2020 - Jul 2023"
            description={["Tutoring computer science to students on request/appointment.", "1 on 1 tutoring for students in high school and college based on individual need.", "Topics ranged from AP® Computer Science Principles to advanced college computer science courses."]}
            skills="C++, Python, Java, Computer Organization, LC-3 Assembly, Data Structures, Algorithms"
          />
        </div>

        <div className="text-center p-5 text-4xl font-abel">- Projects -</div>
        <div className="text-center pb-10">
        Coming Soon...
        </div>
      </div>
    </main>
  );
};
