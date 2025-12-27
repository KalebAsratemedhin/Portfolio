import { supabase } from './supabase'
import { Project } from '../types/project'

export async function getProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from('project')
    .select('*')
    .order('id', { ascending: true })

    console.log(data)

  if (error) {
    console.error('Error fetching projects:', error)
    throw error
  }

  return data || []
}

