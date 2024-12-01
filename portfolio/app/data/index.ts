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
      description: ' AutoFlash is a car rental platform. It provides a capability for users to rent cars from anywhere and even payfor it. It also alows admins to track rents in easily and visualize their income and customer base.',
      technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS'],
      date: '2023',
    },
    {
      title: 'SkillTrade',
      description: 'SkillTrade is a platform to connect skilled handy-people with customers. It provides an opportunity for people to use their technical skills to make money and create a difference.',
      technologies: ['Python', 'Django', 'Next.js', 'PostgreSQL'],
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
            { name: "PyTorch", percentage: 70, icon: "🔥" },
            { name: "Scikit-learn", percentage: 80, icon: "🤖" },
            { name: "Pandas", percentage: 85, icon: "🐼" },
            { name: "NumPy", percentage: 85, icon: "📊" },
        ]
    }
];

export const skillSections = [
  {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
          "React/Next.js",
          "TypeScript",
          "Tailwind CSS",
          "HTML5/CSS3",
          "Responsive Design",
          "UI/UX Principles"
      ],
      bgColor: "bg-blue-100",
      iconBg: "bg-blue-200"
  },
  {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
          "Node.js",
          "Python",
          "RESTful APIs",
          "Database Design",
          "Server Architecture",
          "Cloud Services"
      ],
      bgColor: "bg-green-100",
      iconBg: "bg-green-200"
  },
  {
      title: "AI/ML",
      icon: "🤖",
      skills: [
          "Machine Learning",
          "Deep Learning",
          "Natural Language Processing",
          "Computer Vision",
          "Data Analysis",
          "Neural Networks"
      ],
      bgColor: "bg-purple-100",
      iconBg: "bg-purple-200"
  }
];

