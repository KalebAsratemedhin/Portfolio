import React from "react";

const HeroSection = () => {
  return (

    <section className="min-h-screen w-full bg-white flex justify-center">
      <div className="md:mt-48 text-start pl-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Kaleb</h1>
        <p className="text-md md:text-lg mb-6 text-gray-900">
          Software Engineer | AI Engineer
        </p>
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
