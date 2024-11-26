import React from "react";

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">What People Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Repeat for each testimonial */}
          <div className="p-6 border rounded-md shadow-sm">
            <p className="italic text-gray-600">"Amazing work! Highly recommend."</p>
            <h4 className="font-bold mt-4">- Client Name</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
