export interface Skill {
    name: string;
    percentage: number;
    icon: any;
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
}