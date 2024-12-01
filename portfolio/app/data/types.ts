export interface Skill {
    name: string;
    percentage: number;
    icon: string;
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
}