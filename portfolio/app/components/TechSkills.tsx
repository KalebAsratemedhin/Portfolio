
// 'use client';

// import { skillCategories } from '../data';
// import { Skill, SkillCategory } from '../data/types';



// const TechSkills = () => {


//     return (
//         <section className="py-20 bg-gray-100">
//             <div className="container mx-auto px-4 ">
//                 <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
//                     Technical Proficiency
//                 </h2>
//                 <div className=" flex gap-4 flex-wrap ">
//                     {skillCategories.map((category) => (
//                         <div key={category.title} className="mb-12 w-2/5 p-4">
//                             <h3 className="text-2xl font-semibold mb-8 text-gray-700">
//                                 {category.title} Technologies
//                             </h3>
//                             <div className="grid grid-cols-2 gap-2">
//                                 {category.skills.map((skill: Skill) => (
//                                     <div
//                                         key={skill.name}
//                                         className="bg-gray-50  p-4 rounded-lg hover:shadow-lg transition-shadow duration-300"
//                                     >
//                                         <div className="flex items-center mb-2">
//                                             <span className="text-2xl mr-2">{skill.icon}</span>
//                                             <span className="font-medium text-gray-700">
//                                                 {skill.name}
//                                             </span>
//                                             <span className="ml-auto text-sm text-gray-500">
//                                                 {skill.percentage}%
//                                             </span>
//                                         </div>
//                                         <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
//                                             <div
//                                                 className="h-full bg-indigo-500 rounded-full transition-all duration-1000 ease-out"
//                                                 style={{
//                                                     width: `${skill.percentage}%`,
//                                                     animation: 'growWidth 1.5s ease-out'
//                                                 }}
//                                             />
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <style jsx>{`
//                 @keyframes growWidth {
//                     from { width: 0; }
//                     to { width: 100%; }
//                 }
//             `}</style>
//         </section>
//     );
// };

// export default TechSkills;


import React from "react";

const techStacks = [
  {
    category: "Backend Developer",
    technologies: [
      {
        name: "Node.js",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="none"
            stroke="currentColor"
            className="text-green-500"
          >
            <path d="M16 0l16 9v14l-16 9-16-9V9z" />
            <path d="M16 0v32" strokeWidth="1.5" />
          </svg>
        ),
      },
      {
        name: "Express.js",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="currentColor"
            className="text-gray-700"
          >
            <text x="2" y="20" fontSize="14" fontWeight="bold">
              EX
            </text>
          </svg>
        ),
      },
      {
        name: "MongoDB",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="none"
            stroke="currentColor"
            className="text-green-700"
          >
            <path d="M16 2l4 12-4 12-4-12z" />
          </svg>
        ),
      },
      {
        name: "Docker",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            fill="none"
            className="text-blue-500"
          >
            <path d="M10 20h8v4h-8zM20 20h8v4h-8zM30 20h8v4h-8zM6 30h36v4H6z" />
          </svg>
        ),
      },
    ],
  },
  {
    category: "Frontend Developer",
    technologies: [
      {
        name: "React",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 36 36"
            fill="none"
            stroke="currentColor"
            className="text-blue-500"
          >
            <circle cx="18" cy="18" r="16" strokeWidth="2" />
            <circle cx="18" cy="18" r="4" fill="currentColor" />
          </svg>
        ),
      },
      {
        name: "Vue.js",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 36 36"
            fill="currentColor"
            className="text-green-600"
          >
            <polygon points="18 2 2 32 34 32" />
            <path d="M18 10l10 22H8z" fill="white" />
          </svg>
        ),
      },
      {
        name: "Tailwind CSS",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 36 36"
            fill="currentColor"
            className="text-teal-500"
          >
            <path d="M12 18c4-4 8-8 12-8 4 0 6 4 8 8-4 0-8 0-12 4-4-4-8-4-12-4z" />
          </svg>
        ),
      },
    ],
  },
  {
    category: "AI Engineer",
    technologies: [
      {
        name: "TensorFlow",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 36 36"
            fill="currentColor"
            className="text-orange-500"
          >
            <path d="M12 4h12v12H12z" />
            <path d="M18 12h6v6h-6z" fill="white" />
          </svg>
        ),
      },
      {
        name: "PyTorch",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 36 36"
            fill="currentColor"
            className="text-red-500"
          >
            <path d="M18 2v32" stroke="currentColor" strokeWidth="2" />
            <circle cx="18" cy="18" r="6" />
          </svg>
        ),
      },
      {
        name: "Jupyter",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 36 36"
            fill="currentColor"
            className="text-orange-400"
          >
            <circle cx="18" cy="18" r="10" />
          </svg>
        ),
      },
    ],
  },
];

const TechStack = () => {
  return (
    <div className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Tech Stack</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {techStacks.map((stack) => (
          <div
            key={stack.category}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {stack.category}
            </h3>
            <ul className="space-y-4">
              {stack.technologies.map((tech, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <div className="w-8 h-8">{tech.icon}</div>
                  <span className="text-gray-700">{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
