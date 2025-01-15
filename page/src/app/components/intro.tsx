// intro.tsx : src/app/components/intro.tsx

const Intro: React.FC = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {/*SVG Logo*/}
      <object
        type="image/svg+xml"
        data="/cpu.svg"
        aria-label="Logo"
        className="w-32 h-32 z-10"
      >
        Your browser does not support SVG
      </object>

      {/* Intro Text */}
      <p className="z-10 text-4xl font-mono">Andrew Woo</p>
      <p className="z-10 font-mono">Master&apos;s in Computer Science</p>
      <p className="z-10 font-mono">Computing Systems</p>

      <div className="flex mt-3">

        <a href="https://github.com/wooandrew" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img className="z-10 filter-white hover:filter-gray w-12" src="/icons8-github.svg" alt="GitHub" />
        </a>


        <a href="https://www.instagram.com/wooandrewdev/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img className="z-10 filter-white hover:filter-gray w-12" src="/icons8-instagram.svg" alt="Instagram" />
        </a>


        <a href="https://www.linkedin.com/in/aswoo/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img className="z-10 filter-white hover:filter-gray w-12" src="/icons8-linkedin.svg" alt="LinkedIn" />
        </a>

      </div>
    </div>
  );
};

export default Intro;
