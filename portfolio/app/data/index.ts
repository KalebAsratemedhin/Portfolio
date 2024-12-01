import { SkillCategory } from "./types";

export const projects = [
    {
      title: 'Efoy Hospital Appointment Manager',
      description: 'Efoy is a platform for hospitals aimed at facilitating appointment bookings. It provides a capability for patients to book appointments online. Doctors can easily manage their appointments and plan their day effectively. It aims to solve the challenges that patients face when it comes to booking appointments in Ethiopia and other developing countries as well.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Redux Toolkit'],
      date: 'July, 2024 - Sept, 2024',
    },
    {
      title: 'AutoFlash',
      description: 'A detailed description of project 2. Highlight the key features and your role in development.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL'],
      date: '2023',
    },
    {
      title: 'SkillTrade',
      description: 'A detailed description of project 3. Mention the impact and results of your work.',
      technologies: ['Python', 'Django', 'AWS'],
      date: '2022',
    },
  ];


  export const skillCategories: SkillCategory[] = [
    {
        title: "Frontend",
        skills: [
            { name: "React", percentage: 90, icon: "⚛️" },
            { name: "TypeScript", percentage: 85, icon: "TS" },
            { name: "Next.js", percentage: 85, icon: "N" },
            { name: "Tailwind", percentage: 90, icon: "🎨" },
            { name: "JavaScript", percentage: 95, icon: "JS" },
            { name: "HTML/CSS", percentage: 95, icon: "🌐" },
        ]
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", percentage: 85, icon: "📦" },
            { name: "Python", percentage: 80, icon: "🐍" },
            { name: "PostgreSQL", percentage: 75, icon: "🐘" },
            { name: "MongoDB", percentage: 80, icon: "🍃" },
            { name: "GraphQL", percentage: 70, icon: "⬡" },
            { name: "Docker", percentage: 75, icon: "🐳" },
        ]
    },
    {
        title: "AI/ML",
        skills: [
            { name: "TensorFlow", percentage: 75, icon: "🧠" },
            { name: "PyTorch", percentage: 70, icon: "🔥" },
            { name: "Scikit-learn", percentage: 80, icon: "🤖" },
            { name: "OpenCV", percentage: 75, icon: "👁️" },
            { name: "Pandas", percentage: 85, icon: "🐼" },
            { name: "NumPy", percentage: 85, icon: "📊" },
        ]
    }
];