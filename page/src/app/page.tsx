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
        <div className="landscape:w-[80%] m-auto grid grid-cols-3 portrait:flex portrait:flex-col">
          <div className="col-span-2 p-5">
            <p className="text-2xl font-abel">Hi, I&apos;m Andrew Woo.</p>
            <p className="text-xl font-abel">I&apos;m a Master&apos;s student at the Georgia Institute of Technology, Class of &apos;25, studying Computer Science with concentration in Computing Systems. I received my Bachelor&apos;s degree in Computer Science with Highest Honors from Georgia Tech in May of 2024, with threads in Systems Architecture and Information/Internetworks.</p>
            <br></br>
            <p className="text-xl font-abel">I am currently working as a Graduate Research Assistant at the Georgia Institute of Technology, assisting in the advancement of research into satellite systems in Low Earth Orbit (LEO) and developing simulations for satellites in cis-lunar and lunar orbit.</p>
            <br></br>
            <p className="text-xl font-abel">I&apos;m passionate about edge-computing, embedded systems, systems architecture, and avionics.</p>
          </div>
          <div className="col-span-1 p-5 m-auto mt-0">
            <p className="text-2xl font-abel">I am currently...</p>
            <ul className="text-xl font-abel pl-5 list-disc list-outside">
              <li className="text-xl font-abel">Working towards my Master&apos;s degree in Computer Science at Georgia Tech.</li>
              <li className="text-xl font-abel">Working as a Graduate Research Assistant researching Satellite Constellations in cislunar orbit.</li>
              <li className="text-xl font-abel">Learning about Network Security (CS 6262)</li>
              <li className="text-xl font-abel">Learning about Graduate Algorithms (CS 6515)</li>
              <li className="text-xl font-abel">Learning about Enterprise Computing (CS 6365)</li>
              <li className="text-xl font-abel">Learning about High Performance Parallel Computing (CSE 6230)</li>
              <li className="text-xl font-abel">Learning about Cybersecurity of Drones (CS 8803 COD)</li>
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
              achivements="VIP Program, Zell Miller Scholarship, Dean's List x6, Highest Honors"
            />
          </div>
          <div className="landscape:col-span-1 landscape:columns-xs"></div>
          <div className="landscape:col-span-5">
            <EducationCard 
              school="Georgia Institute of Technology | Atlanta, GA" 
              degree="Master of Science in Computer Science" 
              dates="August 2024 - May 2025"
              program="Computing Systems" 
              link="https://omscs.gatech.edu/specialization-computing-systems"
              achivements="TKCTF 1st Place"
            />
          </div>
        </div>

        <div className="text-center p-5 text-4xl font-abel">- Experience -</div>
        <div className="landscape:w-[80%] landscape:m-auto">
          <ExperienceCard
            logo='./GTVertical_RGB.svg'
            title="Graduate Research Assistant"
            location="Atlanta, GA"
            mode="Hybrid"
            company="Georgia Institute of Technology"
            position="Research Assistant"
            dates="Aug 2024 - Present"
            description={[
              "Advancing research into Low Earth Orbit (LEO) & Lunar Orbit Satellite Orchestration.",
              "Conducting extensive literature review on existing research into Low Earth Orbit (LEO) Satellite Orchestration and Lunar Orbit simulation.",
              "Implementing an application orchestration algorithm for satellite constellations based on ground availability, solar energy horizons and energy delivery budgets.",
              "Developing lunar orbit simulations for satellites to conduct path prediction and generate simulated energy data for lunar satellites."
            ]}
            skills="Research, Satellite Systems, Satellite Orchestration, Lunar Orbit Simulation, Python, GMAT"
          />
          <ExperienceCard
            logo="./fatl_logo.png"
            title="Research IT Intern"
            location="Atlanta, GA"
            mode="Hybrid"
            company="Federal Reserve Bank of Atlanta"
            position="Intern"
            dates="Oct 2024 - Dec 2024"
            description={[
              "Analyzed and assessed the performance of different High Performance Computing platforms used by the Federal Reserve Bank of Atlanta.",
              "Benchmarked HPC clusters and platforms, including in-house Beowulf cluster solutions, Hyper-V machines, and cloud solutions including AWS and the Federal Reserve Bank of Kansas City's CADRE HPC platform.",
              "Built, deployed, and benchmarked 5 new nodes on the ATL Fed's Beowulf Research Cluster.",
              "Wrote in depth report discussing benchmarking results and the conclusions derived from them regarding tools used by economists."
            ]}
            skills="High Performance Computing (HPC), Hyper-V, Beowulf Clusters, Benchmarking, Python, Matplotlib, Python Seaborn, Linux System Administration"
          />
          <ExperienceCard
            logo="./ns_logo.png"
            title="Data Center Operations Intern"
            location="Atlanta, GA"
            mode="On-Site"
            company="Norfolk Southern"
            position="Intern"
            dates="May 2024 - Aug 2024"
            description={[
              "Worked at Norfolk Southern's production data center in Tucker, Georgia, assisting in daily operations to ensure zero downtime in production environments and consistent uplink to railroad and operations services.", 
              "Decommissioned outdated servers and installed new devices as part of Norfolk Southern's data center refresh operations.",
              "Engineered and configured networking devices for remote field and railroad deployment and ensured seamless field operations by reconfiguring returned devices for recycling or reuse.",
              "Audited power and load distribution on servers to ensure balanced power usage across power distribution units.",
              "Automated Cisco Application Centric Infrastructure (ACI) fabric configuration with Python scripts, reducing manual configuration time by 80%, and documented Cisco APIC API endpoints to streamline future automation efforts.",
              "Audited the Data Center Infrastructure Management (DCIM) tool, ensuring near-100% accuracy across multiple data center domains and improving data integrity for critical infrastructure management."
            ]}
            skills="Software Development, Python, Cisco Application Centric Infrastructure (ACI), Data Center Operations, Data Center Infrastructure Management (DCIM)"
          />
          <ExperienceCard
            logo="./ps_logo.png"
            title="Software Engineer Intern"
            location="Atlanta, GA"
            mode="On-Site"
            company="Publicis Sapient"
            position="Intern"
            dates="Jun 2023 - Aug 2023"
            description={[
              "Worked as lead backend engineer alongside four software engineering interns and two product management interns to develop a full-stack financial services application from the ground up.",
              "Architected the backend relational database in PostgreSQL using enhanced Entity-Relationship Diagrams and SQL.",
              "Developed and optimized the backend API using Python and FastAPI, ensuring seamless integration with the frontend.",
              "Designed a Generative AI chatbot in Python using Langchain and Vertex AI, enabling real-time stock and market data retrieval and financial portfolio management, and integrated it into the backend API.",
              "Collaborated with the front-end team to integrate the API, ensuring full functionality and optimal performance.",
              "Co-led the planning and execution of Intern Corporate Responsibility Day, coordinating activities and tasks for 35 interns."
            ]}
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
