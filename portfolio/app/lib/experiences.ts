import { supabase } from './supabase'
import { Experience } from '../types/experience'

export async function getExperiences(): Promise<Experience[]> {
  const { data, error } = await supabase
    .from('experience')
    .select('*')
    .order('from', { ascending: false })

  if (error) {
    console.error('Error fetching experiences:', error)
    throw error
  }

  return data || []
}

export async function getWorkExperiences(): Promise<Experience[]> {
  const experiences = await getExperiences()
  return experiences.filter(exp => exp.type === 'work')
}

export async function getEducations(): Promise<Experience[]> {
  const experiences = await getExperiences()
  return experiences.filter(exp => exp.type === 'education')
}

