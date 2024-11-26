import React from "react";

const ServicesOverview = () => {
  return (
    <section className="py-16 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-md shadow-sm">
            <h3 className="text-xl font-bold mb-4">Web Development</h3>
            <p>Building responsive, user-friendly websites tailored to your needs.</p>
          </div>
          <div className="p-6 border rounded-md shadow-sm">
            <h3 className="text-xl font-bold mb-4">Machine Learning</h3>
            <p>Exploring AI solutions to optimize workflows and drive innovation.</p>
          </div>
          <div className="p-6 border rounded-md shadow-sm">
            <h3 className="text-xl font-bold mb-4">UI/UX Design</h3>
            <p>Creating visually appealing and intuitive user experiences.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
