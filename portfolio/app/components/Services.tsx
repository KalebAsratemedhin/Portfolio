'use client'
import { FaCode, FaServer, FaBrain } from 'react-icons/fa';
import { useEffect, useRef } from 'react';

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      id: 1,
      title: "Frontend Development",
      icon: <FaCode size={32} />,
      description: "Creating responsive and intuitive user interfaces using modern frameworks and libraries.",
    },
    {
      id: 2,
      title: "Backend Development",
      icon: <FaServer size={32} />,
      description: "Building robust and scalable server-side applications with modern technologies.",
    },
    {
      id: 3,
      title: "AI Engineering",
      icon: <FaBrain size={32} />,
      description: "Developing intelligent solutions using cutting-edge AI technologies.",
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      const items = currentRef.querySelectorAll('.service-item');
      items.forEach((item) => observer.observe(item));
    }

    return () => {
      if (currentRef) {
        const items = currentRef.querySelectorAll('.service-item');
        items.forEach((item) => observer.unobserve(item));
      }
    };
  }, []);

  return (
    <div id="services" ref={sectionRef} className="relative w-full min-h-screen py-32 bg-bgSecondary bg-texture overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-warm-tan/10 rounded-full blur-3xl animate-float"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-textSecondary text-sm uppercase tracking-widest font-light">05. Services</span>
          <h2 className="section-title mt-4">What I Do</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-item glass-card text-center group hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-textSecondary mb-6 flex justify-center group-hover:text-accent transition-all duration-300 group-hover:scale-125">
                {service.icon}
              </div>
              <h3 className="text-xl font-light mb-4 text-textPrimary group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-textSecondary font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
