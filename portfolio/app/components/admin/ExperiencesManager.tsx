'use client'
import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'
import { Experience } from '../../types/experience'

export default function ExperiencesManager() {
  const [experiences, setExperiences] = useState<Experience[]>([])
  const [loading, setLoading] = useState(true)
  const [editingExperience, setEditingExperience] = useState<Experience | null>(null)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    fetchExperiences()
  }, [])

  const fetchExperiences = async () => {
    try {
      const { data, error } = await supabase
        .from('experience')
        .select('*')
        .eq('type', 'work')
        .order('from', { ascending: false })

      if (error) throw error
      setExperiences(data || [])
    } catch (err) {
      console.error('Error fetching experiences:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this experience?')) return

    try {
      const { error } = await supabase
        .from('experience')
        .delete()
        .eq('id', id)

      if (error) throw error
      fetchExperiences()
    } catch (err) {
      console.error('Error deleting experience:', err)
      alert('Failed to delete experience')
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    const experienceData = {
      title: formData.get('title') as string,
      company_name: formData.get('company_name') as string,
      city: formData.get('city') as string,
      country: formData.get('country') as string,
      from: formData.get('from') as string,
      to: formData.get('to') || null,
      description: formData.get('description') as string,
      type: 'work' as const,
    }

    try {
      if (editingExperience) {
        // Update
        const { error } = await supabase
          .from('experience')
          .update(experienceData)
          .eq('id', editingExperience.id)

        if (error) throw error
      } else {
        // Create
        const { error } = await supabase
          .from('experience')
          .insert([experienceData])

        if (error) throw error
      }

      setShowForm(false)
      setEditingExperience(null)
      fetchExperiences()
    } catch (err) {
      console.error('Error saving experience:', err)
      alert('Failed to save experience')
    }
  }

  const handleEdit = (experience: Experience) => {
    setEditingExperience(experience)
    setShowForm(true)
  }

  const handleCancel = () => {
    setShowForm(false)
    setEditingExperience(null)
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-light text-textPrimary">Experiences</h2>
        <button
          onClick={() => {
            setEditingExperience(null)
            setShowForm(true)
          }}
          className="px-4 py-2 bg-accent text-bgPrimary rounded-lg hover:bg-accent/90 transition-colors"
        >
          Add New Experience
        </button>
      </div>

      {showForm && (
        <div className="glass-card p-6 mb-6">
          <h3 className="text-xl font-light text-textPrimary mb-4">
            {editingExperience ? 'Edit Experience' : 'Create New Experience'}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-light text-textSecondary mb-2">Title</label>
              <input
                type="text"
                name="title"
                required
                defaultValue={editingExperience?.title}
                className="w-full px-4 py-2 bg-bgSecondary border border-border rounded-lg text-textPrimary focus:outline-none focus:border-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-light text-textSecondary mb-2">Company Name</label>
              <input
                type="text"
                name="company_name"
                required
                defaultValue={editingExperience?.company_name}
                className="w-full px-4 py-2 bg-bgSecondary border border-border rounded-lg text-textPrimary focus:outline-none focus:border-accent"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-light text-textSecondary mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  required
                  defaultValue={editingExperience?.city}
                  className="w-full px-4 py-2 bg-bgSecondary border border-border rounded-lg text-textPrimary focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-light text-textSecondary mb-2">Country</label>
                <input
                  type="text"
                  name="country"
                  required
                  defaultValue={editingExperience?.country}
                  className="w-full px-4 py-2 bg-bgSecondary border border-border rounded-lg text-textPrimary focus:outline-none focus:border-accent"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-light text-textSecondary mb-2">From Date</label>
                <input
                  type="date"
                  name="from"
                  required
                  defaultValue={editingExperience?.from}
                  className="w-full px-4 py-2 bg-bgSecondary border border-border rounded-lg text-textPrimary focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-light text-textSecondary mb-2">To Date (leave empty for present)</label>
                <input
                  type="date"
                  name="to"
                  defaultValue={editingExperience?.to || ''}
                  className="w-full px-4 py-2 bg-bgSecondary border border-border rounded-lg text-textPrimary focus:outline-none focus:border-accent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-light text-textSecondary mb-2">Description</label>
              <textarea
                name="description"
                required
                rows={4}
                defaultValue={editingExperience?.description}
                className="w-full px-4 py-2 bg-bgSecondary border border-border rounded-lg text-textPrimary focus:outline-none focus:border-accent"
              />
            </div>
            <div className="flex gap-4">
              <button
                type="submit"
                className="px-6 py-2 bg-accent text-bgPrimary rounded-lg hover:bg-accent/90 transition-colors"
              >
                {editingExperience ? 'Update' : 'Create'}
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
        {experiences.map((experience) => (
          <div key={experience.id} className="glass-card p-6">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-xl font-light text-textPrimary mb-2">{experience.title}</h3>
                <p className="text-textSecondary text-sm mb-2">{experience.company_name}</p>
                <p className="text-textTertiary text-xs mb-2">
                  {experience.city}, {experience.country}
                </p>
                <p className="text-textTertiary text-xs mb-3">
                  {new Date(experience.from).toLocaleDateString()} - {experience.to ? new Date(experience.to).toLocaleDateString() : 'Present'}
                </p>
                <p className="text-textSecondary text-sm">{experience.description}</p>
              </div>
              <div className="flex gap-2 ml-4">
                <button
                  onClick={() => handleEdit(experience)}
                  className="px-4 py-2 border border-border text-textSecondary rounded-lg hover:border-accent hover:text-textPrimary transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(experience.id)}
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

