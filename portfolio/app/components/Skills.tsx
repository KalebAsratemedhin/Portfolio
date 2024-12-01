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
          <p className="section-title text-4xl font-bold">Skills</p>
          <p className="py-4 text-textSecondary text-2xl">These are the technologies I've worked with</p>
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

