import type { Experience } from '../types/experience'
import type { Project } from '../types/project'

export const educationData: Experience[] = [
  {
    id: 1,
    title: 'Bachelor of Science in Software Engineering',
    company_name: 'Addis Ababa University',
    city: 'Addis Ababa',
    country: 'Ethiopia',
    from: '2022-05-01',
    to: '2026-06-01',
    description: [
      "Studying at one of Africa's top 10 universities, with coursework covering Data Structures and Algorithms, Web Application Development, Object Oriented Programming, Computer Architecture and Organization, Fundamentals of Software Engineering, and Machine Learning.",
    ],
    type: 'education',
  },
  {
    id: 2,
    title: 'Kifiya Artificial Intelligence Mastery Trainee',
    company_name: '10 Academy',
    city: 'Addis Ababa',
    country: 'Ethiopia',
    from: '2024-12-01',
    to: '2025-02-01',
    description: [
      'Completed Financial Data Analysis and Artificial Intelligence Mastery Training, gaining hands-on fintech experience through real-world projects that used data analysis and AI tools for financial insights. Participated in daily stand-ups, cool-downs, community building, and lecture sessions.',
    ],
    type: 'education',
  },
  {
    id: 3,
    title: 'Software Engineering Trainee',
    company_name: 'A2SV | Africa to Silicon Valley',
    city: '',
    country: 'Ethiopia',
    from: '2023-11-01',
    to: '2024-09-01',
    description: [
      'Built a strong foundation in Data Structures and Algorithms through lectures and weekly contests on Codeforces and LeetCode. Collaborated with peers in hackathons, team-based learning sessions, and mock interviews, and attended mentorship sessions with industry professionals while contributing to practical software development projects.',
    ],
    type: 'education',
  },
]

export const workExperienceData: Experience[] = [
  {
    id: 4,
    title: 'Fullstack Software Engineer (Freelance)',
    company_name: 'Upwork',
    city: '',
    country: 'Remote',
    from: '2025-08-01',
    to: '',
    description: [
      'Worked with clients as a full-stack software developer to turn ideas into real products. Projects included Datasynx, an AI-driven startup automating workflows; DetailFlow, a SaaS tool for detailer shops to manage appointments, employees, and day-to-day operations; and CreditDisputor, a DIY tool for disputing credit issues with major American banks.',
    ],
    type: 'work',
  },
  {
    id: 5,
    title: 'Python Developer',
    company_name: 'Cynergy Bank',
    city: '',
    country: 'United Kingdom',
    from: '2026-07-01',
    to: '2026-10-01',
    description: [
      'Helped develop an internal AI-assisted tool to assess customer portfolios for lending and collateral management, and improved an existing AI-assisted tool to assure data quality across internal banking systems.',
    ],
    type: 'work',
  },
  {
    id: 6,
    title: 'Fullstack Software Engineering Intern',
    company_name: 'Mereb Technologies',
    city: 'Addis Ababa',
    country: 'Ethiopia',
    from: '2024-10-01',
    to: '2025-08-01',
    description: [
      'Developed PHP backend services and React frontend pages as a full-stack software engineering intern. Built microservices that communicate via gRPC, message queues, and procedure calls, with schedulers and cron jobs, and integrated the PHP backend with the React frontend using gRPC.',
    ],
    type: 'work',
  },
  {
    id: 7,
    title: 'Web Developer Intern',
    company_name: 'Eskalate',
    city: '',
    country: 'Ethiopia',
    from: '2024-07-01',
    to: '2024-09-01',
    description: [
      'Built user-friendly interfaces with React.js and Tailwind CSS as a web developer intern. Implemented state management with Redux Toolkit in a Next.js application and added OAuth authentication using NextAuth.',
    ],
    type: 'work',
  },
]

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Skillspot',
    description:
      'Built a service marketplace with Vue 3 and Django, featuring real-time messaging via WebSockets and Redis. Implemented Stripe Connect for automated billing and Celery for background task management. Streamlined deployment using Docker and automated API documentation with Swagger/OpenAPI.',
    tags: ['Vue 3', 'Django', 'WebSockets', 'Redis', 'Stripe Connect', 'Celery', 'Docker', 'Swagger/OpenAPI'],
    github_link: 'https://github.com',
    demo_link: 'https://skill-spot-jet.vercel.app',
    demo_image_url: null,
  },
  {
    id: 2,
    title: 'Efoy',
    description:
      'Designed and built a hospital appointment booking platform using FastAPI and React.js from concept to deployment. Integrated virtual video consultation using Stream video API and Stripe for booking payments using Stripe webhooks. Implemented an in-app prescription system with digital signature.',
    tags: ['FastAPI', 'React.js', 'Stream Video API', 'Stripe', 'Webhooks'],
    github_link: 'https://github.com',
    demo_link: 'https://efoy-hospital-companion.vercel.app',
    demo_image_url: null,
  },
  {
    id: 3,
    title: 'SeatMaster',
    description:
      'Designed and built an all-in-one event planning and guest organization platform with Golang. Integrated third party map service for ease of locating pickup and drop-off addresses.',
    tags: ['Golang', 'Event Planning', 'Maps API'],
    github_link: 'https://github.com',
    demo_link: null,
    demo_image_url: null,
  },
]

export const skillsData = {
  programmingLanguages: ['TypeScript', 'Python', 'C#', 'Java', 'Golang', 'JavaScript'],
  librariesAndFrameworks: [
    'FastAPI',
    'Django',
    'Nest.js',
    'React.js',
    'Next.js',
    'Vue',
    'Angular.js',
    'Express.js',
    'MERN',
  ],
  databases: ['Vector DBs (Weaviate)', 'MongoDB', 'MySQL', 'PostgreSQL'],
  technologiesAndTools: ['Git', 'Docker', 'Linux', 'gRPC', 'Microservices', 'Langgraph', 'Langchain', 'n8n'],
}
