
'use client';

import { skillCategories } from '../data/index';
import { Skill, SkillCategory } from '../data/types';

const TechSkills = () => { 

 
    return (
        <section id="skills" className="py-20 bg-white">
            <div className="container mx-auto px-4 ">
                <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
                    Technical Proficiency
                </h2>
                <div className=" flex gap-4 flex-wrap ">
                    {skillCategories.map((category) => (
                        <div key={category.title} className="mb-12 w-2/5 p-4">
                            <h3 className="text-2xl font-semibold mb-8 text-gray-700">
                                {category.title} Technologies
                            </h3>
                            <div className="grid grid-cols-2 gap-2">
                                {category.skills.map((skill: Skill) => (
                                    <div
                                        key={skill.name}
                                        className=" p-4 rounded-lg hover:shadow-lg transition-shadow duration-300"
                                    >
                                        <div className="flex items-center mb-2">
                                            <span className="text-2xl mr-2">
                                            
                                            
          
                                            </span>
                                            <span className="font-medium text-gray-700">
                                                {skill.name}
                                            </span>
                                            <span className="ml-auto text-sm text-gray-500">
                                                {skill.percentage}%
                                            </span>
                                        </div>
                                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-indigo-500 rounded-full transition-all duration-1000 ease-out"
                                                style={{
                                                    width: `${skill.percentage}%`,
                                                    animation: 'growWidth 1.5s ease-out'
                                                }}
                                            />
                                        </div>
                                    </div> 
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes growWidth {
                    from { width: 0; }
                    to { width: 100%; }
                }
            `}</style>
        </section>
    );
};

export default TechSkills;


// 'use client';

// import { useEffect, useRef } from 'react';

// interface Skill {
//     name: string;
//     percentage: number;
//     icon: string;
// }

// interface SkillCategory {
//     title: string;
//     skills: Skill[];
// }

// const TechSkills = () => {


//     return (
//         <section className="py-20 bg-white">
//             <div className="container mx-auto px-4">
//                 <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
//                     Technical Proficiency
//                 </h2>
//                 <div className="space-y-16">
//                     {skillCategories.map((category) => (
//                         <div key={category.title} className="mb-12">
//                             <h3 className="text-2xl font-semibold mb-8 text-gray-700">
//                                 {category.title} Technologies
//                             </h3>
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                 {category.skills.map((skill) => (
//                                     <div
//                                         key={skill.name}
//                                         className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow duration-300"
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
