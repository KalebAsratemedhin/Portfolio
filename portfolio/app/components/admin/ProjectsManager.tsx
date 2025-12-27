'use client'
import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'
import { Project } from '../../types/project'

export default function ProjectsManager() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('project')
        .select('*')
        .order('id', { ascending: false })

      if (error) throw error
      setProjects(data || [])
    } catch (err) {
      console.error('Error fetching projects:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this project?')) return

    try {
      const { error } = await supabase
        .from('project')
        .delete()
        .eq('id', id)

      if (error) throw error
      fetchProjects()
    } catch (err) {
      console.error('Error deleting project:', err)
      alert('Failed to delete project')
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    const projectData = {
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      tags: (formData.get('tags') as string).split(',').map(t => t.trim()),
      github_link: formData.get('github_link') as string,
      demo_link: formData.get('demo_link') || null,
      demo_image_url: formData.get('demo_image_url') || null,
    }

    try {
      if (editingProject) {
        // Update
        const { error } = await supabase
          .from('project')
          .update(projectData)
          .eq('id', editingProject.id)

        if (error) throw error
      } else {
        // Create
        const { error } = await supabase
          .from('project')
          .insert([projectData])

        if (error) throw error
      }

      setShowForm(false)
      setEditingProject(null)
      fetchProjects()
    } catch (err) {
      console.error('Error saving project:', err)
      alert('Failed to save project')
    }
  }

  const handleEdit = (project: Project) => {
    setEditingProject(project)
    setShowForm(true)
  }

  const handleCancel = () => {
    setShowForm(false)
    setEditingProject(null)
  }

  if (loading) {
    return <div className="text-center py-20 text-textSecondary">Loading projects...</div>
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-light text-textPrimary">Projects</h2>
        <button
          onClick={() => {
            setEditingProject(null)
            setShowForm(true)
          }}
          className="px-4 py-2 bg-accent text-bgPrimary rounded-lg hover:bg-accent/90 transition-colors"
        >
          Add New Project
        </button>
      </div>

      {showForm && (
        <div className="glass-card p-6 mb-6">
          <h3 className="text-xl font-light text-textPrimary mb-4">
            {editingProject ? 'Edit Project' : 'Create New Project'}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-light text-textSecondary mb-2">Title</label>
              <input
                type="text"
                name="title"
                required
                defaultValue={editingProject?.title}
                className="w-full px-4 py-2 bg-bgSecondary border border-border rounded-lg text-textPrimary focus:outline-none focus:border-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-light text-textSecondary mb-2">Description</label>
              <textarea
                name="description"
                required
                rows={4}
                defaultValue={editingProject?.description}
                className="w-full px-4 py-2 bg-bgSecondary border border-border rounded-lg text-textPrimary focus:outline-none focus:border-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-light text-textSecondary mb-2">Tags (comma-separated)</label>
              <input
                type="text"
                name="tags"
                required
                defaultValue={editingProject?.tags?.join(', ')}
                className="w-full px-4 py-2 bg-bgSecondary border border-border rounded-lg text-textPrimary focus:outline-none focus:border-accent"
                placeholder="React, Next.js, TypeScript"
              />
            </div>
            <div>
              <label className="block text-sm font-light text-textSecondary mb-2">GitHub Link</label>
              <input
                type="url"
                name="github_link"
                required
                defaultValue={editingProject?.github_link}
                className="w-full px-4 py-2 bg-bgSecondary border border-border rounded-lg text-textPrimary focus:outline-none focus:border-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-light text-textSecondary mb-2">Demo Link (optional)</label>
              <input
                type="url"
                name="demo_link"
                defaultValue={editingProject?.demo_link || ''}
                className="w-full px-4 py-2 bg-bgSecondary border border-border rounded-lg text-textPrimary focus:outline-none focus:border-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-light text-textSecondary mb-2">Demo Image URL (optional)</label>
              <input
                type="url"
                name="demo_image_url"
                defaultValue={editingProject?.demo_image_url || ''}
                className="w-full px-4 py-2 bg-bgSecondary border border-border rounded-lg text-textPrimary focus:outline-none focus:border-accent"
              />
            </div>
            <div className="flex gap-4">
              <button
                type="submit"
                className="px-6 py-2 bg-accent text-bgPrimary rounded-lg hover:bg-accent/90 transition-colors"
              >
                {editingProject ? 'Update' : 'Create'}
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-2 border border-border text-textSecondary rounded-lg hover:border-accent hover:text-textPrimary transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.id} className="glass-card p-6">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-xl font-light text-textPrimary mb-2">{project.title}</h3>
                <p className="text-textSecondary text-sm mb-3 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-bgSecondary border border-border rounded-full text-textSecondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-xs text-textTertiary">
                  <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                    GitHub →
                  </a>
                  {project.demo_link && (
                    <>
                      {' • '}
                      <a href={project.demo_link} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                        Demo →
                      </a>
                    </>
                  )}
                </div>
              </div>
              <div className="flex gap-2 ml-4">
                <button
                  onClick={() => handleEdit(project)}
                  className="px-4 py-2 border border-border text-textSecondary rounded-lg hover:border-accent hover:text-textPrimary transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="px-4 py-2 border border-red-500/50 text-red-400 rounded-lg hover:border-red-500 hover:bg-red-500/10 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

