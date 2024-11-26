import React from "react";

const FeaturedProjects = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Repeat for each project */}
          <div className="border rounded-md shadow-sm overflow-hidden">
            <img src="/project1.jpg" alt="Project 1" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Project Title</h3>
              <p className="text-gray-600">Brief description of the project.</p>
              <a href="/portfolio" className="text-indigo-600 mt-4 block font-medium">
                View Details →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
