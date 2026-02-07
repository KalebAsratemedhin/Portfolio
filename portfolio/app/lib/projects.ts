import { Project } from '../types/project'
import { projectsData } from '../data/portfolio'

export function getProjects(): Project[] {
  return projectsData
}
