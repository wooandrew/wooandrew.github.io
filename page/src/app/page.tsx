// page.tsx : src/app/page.tsx

"use client";

import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

// Import Components
import Intro from './components/intro';

// Import CSS
import './css/animations.css';  // Import Animations CSS

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
        {/* <div className="c-r-gradient-tl bg-gradient-to-r from-amber-500 via-violet-600 to-pink-500"></div> */}
        <div className="c-r-gradient-tr bg-gradient-to-r from-emerald-400 via-violet-600 to-cyan-400"></div>
        {/* <div className="c-r-gradient-br bg-gradient-to-r from-red-600 via-violet-600 to-amber-300"></div> */}
        <div className="c-r-gradient-bl bg-gradient-to-r from-teal-400 via-green-200 to-yellow-200"></div>
        <CSSTransition
          in={animationClass}
          timeout={1000} // Animation duration in milliseconds
          classNames="rise-up-animation"
          unmountOnExit
        >
          <Intro />
        </CSSTransition>
      </div>
    </main>
  )
}
