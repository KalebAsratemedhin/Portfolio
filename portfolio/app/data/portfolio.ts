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
    description:
      'Top 10th University in Africa. Relevant Courses: Data Structures and Algorithms, Web Application Development, Object Oriented Programming, Computer Architecture and Organization, Fundamentals of Software Engineering, Machine Learning.',
    type: 'education',
  },
  {
    id: 2,
    title: 'Africa to Silicon Valley (A2SV)',
    company_name: 'A2SV',
    city: 'Addis Ababa',
    country: 'Ethiopia',
    from: '2023-11-01',
    to: '2024-11-01',
    description:
      'Completed one year of data structures and algorithms education. Solved more than 900 Leetcode questions. Participated in community organized hackathons, contests and peer programming sessions.',
    type: 'education',
  },
]

export const workExperienceData: Experience[] = [
  {
    id: 3,
    title: 'Fullstack AI Developer (Freelance)',
    company_name: 'Datasynx (startup)',
    city: '',
    country: '',
    from: '2025-06-01',
    to: '2026-01-01',
    description:
      'Helped implement a network of AI agents for a workflow automation platform with integration to known workflow managers. Utilized Lang-chain and Lang-graph to create AI agents.',
    type: 'work',
  },
  {
    id: 4,
    title: 'Junior Fullstack Developer (Onsite)',
    company_name: 'Mereb Technology',
    city: '',
    country: '',
    from: '2024-10-01',
    to: '2025-08-01',
    description:
      'Developed and implemented microservices based backend solution for a poker game application using gRPC and php. Collaborated with a team of engineers to create and maintain live game status updates and placeholders based game participation. Improved existing payout structure by introducing a grouped hands scheme that simplified payout configuration by 75%.',
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
    demo_link: 'https://skill-spot-aq6v.vercel.app/',
    demo_image_url: null,
  },
  {
    id: 2,
    title: 'Efoy',
    description:
      'Designed and built a hospital appointment booking platform using FastAPI and React.js from concept to deployment. Integrated virtual video consultation using Stream video API and Stripe for booking payments using Stripe webhooks. Implemented an in-app prescription system with digital signature.',
    tags: ['FastAPI', 'React.js', 'Stream Video API', 'Stripe', 'Webhooks'],
    github_link: 'https://github.com',
    demo_link: 'https://efoy-hospital-appointment-manager.vercel.app/',
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
