'use client'
import React from "react";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  return (

    <section className="min-h-screen w-full bg-white flex justify-center pt-24">
      <div className="md:mt-48 text-start pl-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Kaleb</h1>
        <div className="text-2xl flex gap-2 "> I am a
          <span className="text-purple-500">
            <Typewriter
              options={{
                strings: ['Frontend Developer', 'Backend Developer', 'AI Engineer'],
                autoStart: true, 
                loop: true,
              }}
            />
          </span>
        </div>
        
        <p className="text-gray-900">Crafting seamless digital experiences as a Fullstack Software Engineer</p>
        <p className="text-gray-900"> Unlocking the power of innovation as an AI Engineer </p>

      </div>

        <div className="cloud relative w-1/2 h-[400px] bg-gradient-to-b from-purple-600 to-blue-300">

            <img
            src="/profile-no-bg.png" 
            alt="Profile Picture"
            className="absolute  left-40 top-10 w-[400px] "
            />
        </div>

    </section>
  );
};

export default HeroSection;


