// page.tsx : src/app/page.tsx

"use client";

import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

// Import Components
import Intro from './components/intro';
import RotatingTri from './components/tritravelers';

// Import CSS
import './css/animations.css';      // Import Animations CSS
import './css/tritravelers.css';    // Import TriTravelers Animation CSS

export default function Home() {

  const [animationClass, setAnimationClass] = useState(false);

  useEffect(() => {
    // Add the animation class after a short delay to trigger the animation on page load
    const timeout = setTimeout(() => {
      setAnimationClass(true);
    }, 100); // Adjust the delay as needed

    // Clear the timeout to prevent setting the class if the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="bg-black">
      <div className="relative max-h-screen max-w-screen overflow-hidden">
        {/* <div className="z-0 c-r-gradient-tl bg-gradient-to-r from-amber-500 via-violet-600 to-pink-500"></div> */}
        {/* <div className="z-0 c-r-gradient-tr bg-gradient-to-r from-emerald-400 via-violet-600 to-cyan-400"></div> */}
        {/* <div className="z-0 c-r-gradient-br bg-gradient-to-r from-red-600 via-violet-600 to-amber-300"></div> */}
        {/* <div className="z-0 c-r-gradient-bl bg-gradient-to-r from-teal-400 via-green-200 to-yellow-200"></div> */}
        <RotatingTri />
        <CSSTransition
          in={animationClass}
          timeout={1000} // Animation duration in milliseconds
          classNames="rise-up-animation"
          unmountOnExit
        >
          <Intro />
        </CSSTransition>

        {/* Button to Scroll Down */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-8">
          <a href="#about" className="flex flex-col items-center justify-center">
            <svg className="w-6 h-6 text-white animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
            </svg>
            <p className="text-white font-mono">Scroll Down</p>
          </a>
        </div>

      </div>
    </main>
  )
}
