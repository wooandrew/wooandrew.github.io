// intro.tsx : src/app/components/intro.tsx

const Intro: React.FC = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {/*SVG Logo*/}
      <object
        type="image/svg+xml"
        data="/cpu.svg"
        aria-label="Logo"
        className="w-32 h-32"
      >
        Your browser does not support SVG
      </object>

      {/* Intro Text */}
      <p className="text-4xl font-mono">Andrew Woo</p>
      <p className="font-mono">Systems Architect</p>
    </div>
  )
}

export default Intro;
