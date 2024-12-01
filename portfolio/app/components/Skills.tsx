// import { skillSections } from '../data';

// const Skills = () => {
   
//     return (
//         <section id="skills" className="py-20 bg-gray-50">
//             <div className="container mx-auto px-4">
//                 <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
//                     My Skills
//                 </h2>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                     {skillSections.map((section, index) => (
//                         <div
//                             key={section.title}
//                             className={`${section.bgColor} rounded-xl p-6 transform hover:scale-105 transition-transform duration-300 hover:shadow-xl`}
//                         >
//                             <div className={`${section.iconBg} w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-6 mx-auto animate-bounce`}>
//                                 {section.icon}
//                             </div>
//                             <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800">
//                                 {section.title}
//                             </h3>
//                             <ul className="space-y-3">
//                                 {section.skills.map((skill, skillIndex) => (
//                                     <li
//                                         key={skillIndex}
//                                         className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
//                                     >
//                                         <svg
//                                             className="w-5 h-5 text-indigo-500"
//                                             fill="none"
//                                             stroke="currentColor"
//                                             viewBox="0 0 24 24"
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 strokeWidth="2"
//                                                 d="M9 12l2 2 4-4"
//                                             />
//                                         </svg>
//                                         <span>{skill}</span>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Skills;

import { FaHtml5, FaCss3, FaJs, FaReact, FaNode, FaGit, FaPython, FaDocker } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiMongodb, SiTensorflow, SiPytorch, SiExpress, SiNextdotjs, SiPostgresql } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { id: 1, name: 'HTML', icon: <FaHtml5 size={50} /> },
        { id: 2, name: 'CSS', icon: <FaCss3 size={50} /> },
        { id: 3, name: 'JavaScript', icon: <FaJs size={50} /> },
        { id: 4, name: 'React', icon: <FaReact size={50} /> },
        { id: 5, name: 'Next.js', icon: <SiNextdotjs size={50} /> },
        { id: 6, name: 'Tailwind', icon: <SiTailwindcss size={50} /> },
        { id: 7, name: 'TypeScript', icon: <SiTypescript size={50} /> },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { id: 8, name: 'Node.js', icon: <FaNode size={50} /> },
        { id: 9, name: 'Express', icon: <SiExpress size={50} /> },
        { id: 10, name: 'MongoDB', icon: <SiMongodb size={50} /> },
        { id: 11, name: 'PostgreSQL', icon: <SiPostgresql size={50} /> },
        { id: 12, name: 'Python', icon: <FaPython size={50} /> },
        { id: 13, name: 'Docker', icon: <FaDocker size={50} /> },
      ]
    },
    {
      title: "AI Engineering",
      skills: [
        { id: 14, name: 'TensorFlow', icon: <SiTensorflow size={50} /> },
        { id: 15, name: 'PyTorch', icon: <SiPytorch size={50} /> },
        { id: 16, name: 'Python', icon: <FaPython size={50} /> },
        { id: 17, name: 'Git', icon: <FaGit size={50} /> },
      ]
    }
  ];

  return (
    <div id="skills" className="w-full min-h-screen bg-primary text-textPrimary">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="section-title">Skills</p>
          <p className="py-4 text-textSecondary">These are the technologies I've worked with</p>
        </div>

        {skillCategories.map((category, categoryIndex) => (
          <div key={category.title} className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-secondary">{category.title}</h3>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
              {category.skills.map((skill) => (
                <div
                  key={skill.id}
                  className="hover:scale-110 duration-500 py-6 rounded-lg bg-primary/50 shadow-lg animate-fade-in"
                  style={{ animationDelay: `${(categoryIndex * 100) + (skill.id * 100)}ms` }}
                >
                  <div className="w-20 mx-auto text-secondary">{skill.icon}</div>
                  <p className="mt-4">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

