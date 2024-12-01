'use client';


const ServicesOverview = () => {
    const skillSections = [
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

    return (
        <section id="skills" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
                    My Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 slide-to-right px-32">
                    {skillSections.map((section, index) => (
                        <div
                            key={section.title}
                            className={`${section.bgColor} rounded-xl p-2 transform hover:scale-105 transition-transform duration-300 hover:shadow-xl`}
                        >
                            <div className={`${section.iconBg} w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-6 mx-auto animate-bounce`}>
                                {section.icon}
                            </div>
                            <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                                {section.title}
                            </h3>
                            <ul className="space-y-3">
                                {section.skills.map((skill, skillIndex) => (
                                    <li
                                        key={skillIndex}
                                        className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
                                    >
                                        <svg
                                            className="w-5 h-5 text-indigo-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 12l2 2 4-4"
                                            />
                                        </svg>
                                        <span>{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;
