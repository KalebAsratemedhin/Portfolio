'use client'
import { FaCode, FaServer, FaBrain } from 'react-icons/fa';
import { useEffect, useRef } from 'react';

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    { 
      id: 1,
      title: "Frontend Development",
      icon: <FaCode size={48} />,
      description: `Creating responsive and intuitive user interfaces using modern frameworks and libraries. 
      Specializing in React, Next.js, and state-of-the-art animation techniques for seamless user experiences.`,
      features: [
        "Responsive Web Applications",
        "Interactive UI/UX Design",
        "Performance Optimization",
        "Modern Animation Implementation",
      ]
    },
    {
      id: 2,
      title: "Backend Development",
      icon: <FaServer size={48} />,
      description: `Building robust and scalable server-side applications with modern technologies. 
      Expertise in Node.js, Express, and database management. Creating secure APIs and optimizing performance.`,
      features: [
        "RESTful API Development",
        "Database Design & Optimization",
        "Authentication & Authorization",
        "Microservices Architecture"
      ]
    },
    {
      id: 3,
      title: "AI Engineering",
      icon: <FaBrain size={48} />,
      description: `Developing intelligent solutions using cutting-edge AI technologies. 
      Implementing machine learning models, natural language processing, and computer vision applications.`,
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "AI Model Optimization",
        "Computer Vision Applications"
      ]
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
      const items = currentRef.querySelectorAll('.service-card');
      items.forEach((item) => observer.observe(item));
    }

    return () => {
      if (currentRef) {
        const items = currentRef.querySelectorAll('.service-card');
        items.forEach((item) => observer.unobserve(item));
      }
    };
  }, []);

  return (
    <div id="services" ref={sectionRef} className="relative w-full min-h-screen bg-primary text-textPrimary py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <span className="text-secondary font-mono text-sm md:text-base">02. What I Do</span>
          <h2 className="section-title mt-4">
            <span className="text-textPrimary">Services</span>
            <span className="text-gradient ml-4">I Offer</span>
          </h2>
          <p className="section-subtitle">
            Specialized solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ id, title, icon, description, features }) => (
            <div
              key={id}
              className="service-card bg-glass p-8 rounded-xl border border-secondary/10 hover:border-secondary/30 card-hover group relative overflow-hidden"
              style={{ animationDelay: `${id * 150}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="text-secondary mb-6 group-hover:scale-110 transition-transform duration-300">
                  {icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-textPrimary group-hover:text-secondary transition-colors duration-300">
                  {title}
                </h3>
                
                <p className="text-textSecondary mb-6 leading-relaxed">
                  {description}
                </p>
                
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start text-textSecondary group-hover:text-textPrimary transition-colors duration-300"
                    >
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
