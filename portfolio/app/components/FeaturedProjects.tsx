'use client'

import { useEffect, useRef } from "react";
import { projects } from "../data";


// export default function ProjectList() {
//   const projects = [
//     {
//       title: 'Project 1',
//       description: 'A detailed description of project 1. Explain what you built and what problems it solved.',
//       technologies: ['React', 'Node.js', 'MongoDB'],
//       date: '2023',
//     },
//     {
//       title: 'Project 2',
//       description: 'A detailed description of project 2. Highlight the key features and your role in development.',
//       technologies: ['Next.js', 'TypeScript', 'PostgreSQL'],
//       date: '2023',
//     },
//     {
//       title: 'Project 3',
//       description: 'A detailed description of project 3. Mention the impact and results of your work.',
//       technologies: ['Python', 'Django', 'AWS'],
//       date: '2022',
//     },
//   ];

//   return (

//   );
// }

// const projects = [
//   {
//     id: 1,
//     title: "Project One",
//     description: "This is a description of project one.",
//     date: "January 2023",
//   },
//   {
//     id: 2,
//     title: "Project Two",
//     description: "This is a description of project two.",
//     date: "March 2023",
//   }, 
//   {
//     id: 3,
//     title: "Project Three",
//     description: "This is a description of project three.",
//     date: "July 2023",
//   },
// ];

// const ProjectTimeline = () => {
//   return (
//     <div className="relative w-4/5 mx-auto mt-10">
//       <div className="absolute  top-0 h-full w-1 bg-gray-300"></div>
//       {projects.map((project, index) => (
//         <div
//           key={project.id}
//           className={`flex  mb-10 `}
//         >
//           {/* Circles */}
//           <div className="relative w-12 h-12 flex-shrink-0">
//             <div className="absolute inset-0 rounded-full bg-gray-300"></div>
//             <div className="absolute inset-2 rounded-full bg-gray-500"></div>
//           </div>

//           {/* Project Content */}
//           <div
//             className={`relative w-2/3 p-6 bg-white rounded-lg shadow-md animate-slideIn`}
//           >
//             <h3 className="text-lg font-bold">{project.title}</h3>
//             <p className="mt-2 text-gray-600">{project.description}</p>
//             <span className="block mt-4 text-sm text-gray-400">
//               {project.date}
//             </span>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProjectTimeline;


const ProjectTimeline = () => {
  const sectionRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideIn");
          } else {
            entry.target.classList.remove("animate-slideIn");
          }
        });
      },
      { threshold: 0.5 } 
    );

    const section = sectionRef.current;
    const items = section?.querySelectorAll(".slide-in-item");
    items?.forEach((item: Element) => observer.observe(item));

    return () => {
      items?.forEach((item: Element) => observer.unobserve(item));
    };
  }, []);
  return (
      <section ref={sectionRef} id="portfolio" className="min-h-screen bg-gray-900 py-20 px-3">
        <div className=" mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">My Projects</h2>
          <div className="timeline space-y-12 relative pl-12">
              {projects.map((project, index) => (

                    
                    <div
                      key={index}
                      className={`  slide-in-item bg-gray-800 rounded-lg p-6 shadow-lg  `}
                      style={{ animationDelay: `${index * 0.3}s` }}
                    >
                      <div className="relative">
                        <div className="dot"></div>
                      </div>
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold text-blue-400">{project.title }</h3>
                        <span className="text-gray-400 text-sm">{project.date}</span>
                      </div>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-lightblue text-white rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
              ))}

          </div>
        </div>
      </section>

  );
};

export default ProjectTimeline;





      {/* {projects.map((project) => (
        <div key={project.id} className="slide-in-item flex items-start mb-10">
          {/* Circles */}
          // <div className="relative w-12 h-12 flex-shrink-0">
          //   <div className="absolute inset-0 rounded-full bg-gray-300"></div>
          //   <div className="absolute inset-2 rounded-full bg-gray-500"></div>
          // </div>

          {/* Project Content */}
        //   <div className="ml-8 flex-grow">
        //     <div
        //       className="p-6 bg-  rounded-lg shadow-md "
        //     >
        //       <h3 className="text-lg font-bold">{project.title}</h3>
        //       <p className="mt-2 text-gray-600">{project.description}</p>
        //       <span className="block mt-4 text-sm text-gray-400">
        //         {project.date}
        //       </span>
        //     </div>
        //   </div>
        // </div>
    