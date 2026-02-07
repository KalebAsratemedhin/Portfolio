import { Experience } from '../types/experience'
import { educationData, workExperienceData } from '../data/portfolio'

export function getExperiences(): Experience[] {
  return [...workExperienceData, ...educationData].sort(
    (a, b) => new Date(b.from).getTime() - new Date(a.from).getTime()
  )
}

export function getWorkExperiences(): Experience[] {
  return workExperienceData
}

export function getEducations(): Experience[] {
  return educationData
}
