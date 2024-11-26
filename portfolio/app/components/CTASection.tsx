import React from "react";

const CTASection = () => {
  return (
    <section className="py-16 bg-indigo-600 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Let's Build Something Great Together</h2>
      <p className="mb-6">Interested in working together? Let's get in touch!</p>
      <a
        href="/contact"
        className="bg-white text-indigo-600 px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-200 transition"
      >
        Contact Me
      </a>
    </section>
  );
};

export default CTASection;
