import { FaCode, FaServer, FaBrain } from 'react-icons/fa';

const Services = () => {

const services = [
    { 
      id: 1,
      title: "Frontend Development",
      icon: <FaCode size={40} />,
      description: `Creating responsive and intuitive user interfaces using modern frameworks and libraries. 
      Specializing in React, Next.js, and state-of-the-art animation techniques for seamless user experiences. 
      Implementing responsive designs, optimizing performance, and ensuring cross-browser compatibility.`,
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
      icon: <FaServer size={40} />,
      description: `Building robust and scalable server-side applications with modern technologies. 
      Expertise in Node.js, Express, and database management. Creating secure APIs, implementing 
      authentication systems, and optimizing database performance.`,
      features: [
        "RESTful API Development",
        "Database Design & Optimization",
        "Authentication & Authorization"
      ]
    },
    {
      id: 3,
      title: "AI Engineering",
      icon: <FaBrain size={40} />,
      description: `Developing intelligent solutions using cutting-edge AI technologies. 
      Implementing machine learning models, natural language processing, and computer vision 
      applications. Creating AI-powered features to enhance user experiences.`,
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "AI Model Optimization"
      ]
    }
  ];


  return (
    <div id="services" className="w-full min-h-screen bg-gray-800 dark:bg-alternate-dark">
      <div className="mx-32 p-1 py-20">
        <div className="pb-8">
          <p className="text-4xl font-bold">Services</p>
          <p className="text-textSecondary dark:text-textSecondary-dark text-2xl">
            Specialized solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map(({ id, title, icon, description, features }) => (
            <div
              key={id}
              className="p-6 bg-primary dark:bg-primary-dark rounded-lg shadow-xl hover:transform hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${id * 200}ms` }}
            >
              <div className="text-secondary dark:text-secondary-dark mb-4">
                {icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-textPrimary dark:text-textPrimary-dark">
                {title}
              </h3>
              <p className="text-textSecondary dark:text-textSecondary-dark mb-6">
                {description}
              </p>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-textSecondary dark:text-textSecondary-dark"
                  >
                    <span className="w-2 h-2 bg-secondary dark:bg-secondary-dark rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
