'use client'
import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'
import { Experience } from '../../types/experience'

export default function EducationsManager() {
  const [educations, setEducations] = useState<Experience[]>([])
  const [loading, setLoading] = useState(true)
  const [editingEducation, setEditingEducation] = useState<Experience | null>(null)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    fetchEducations()
  }, [])

  const fetchEducations = async () => {
    try {
      const { data, error } = await supabase
        .from('experience')
        .select('*')
        .eq('type', 'education')
        .order('from', { ascending: false })

      if (error) throw error
      setEducations(data || [])
    } catch (err) {
      console.error('Error fetching educations:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this education?')) return

    try {
      const { error } = await supabase
        .from('experience')
        .delete()
        .eq('id', id)

      if (error) throw error
      fetchEducations()
    } catch (err) {
      console.error('Error deleting education:', err)
      alert('Failed to delete education')
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    const educationData = {
      title: formData.get('title') as string,
      company_name: formData.get('company_name') as string,
      city: formData.get('city') as string,
      country: formData.get('country') as string,
      from: formData.get('from') as string,
      to: formData.get('to') || null,
      description: formData.get('description') as string,
      type: 'education' as const,
    }

    try {
      if (editingEducation) {
        // Update
        const { error } = await supabase
          .from('experience')
          .update(educationData)
          .eq('id', editingEducation.id)

        if (error) throw error
      } else {
        // Create
        const { error } = await supabase
          .from('experience')
          .insert([educationData])

        if (error) throw error
      }

      setShowForm(false)
      setEditingEducation(null)
      fetchEducations()
    } catch (err) {
      console.error('Error saving education:', err)
      alert('Failed to save education')
    }
  }

  const handleEdit = (education: Experience) => {
    setEditingEducation(education)
    setShowForm(true)
  }

  const handleCancel = () => {
    setShowForm(false)
    setEditingEducation(null)
  }

  if (loading) {
    return <div className="text-center py-20 text-textSecondary">Loading educations...</div>
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-light text-textPrimary">Educations</h2>
        <button
          onClick={() => {
            setEditingEducation(null)
            setShowForm(true)
          }}
          className="px-4 py-2 bg-accent text-bgPrimary rounded-lg hover:bg-accent/90 transition-colors"
        >
          Add New Education
        </button>
      </div>

      {showForm && (
        <div className="glass-card p-6 mb-6">
          <h3 className="text-xl font-light text-textPrimary mb-4">
            {editingEducation ? 'Edit Education' : 'Create New Education'}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-light text-textSecondary mb-2">Title</label>
              <input
                type="text"
                name="title"
                required
                defaultValue={editingEducation?.title}
                className="w-full px-4 py-2 bg-bgSecondary border border-border rounded-lg text-textPrimary focus:outline-none focus:border-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-light text-textSecondary mb-2">Institution Name</label>
              <input
                type="text"
                name="company_name"
                required
                defaultValue={editingEducation?.company_name}
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
                  defaultValue={editingEducation?.city}
                  className="w-full px-4 py-2 bg-bgSecondary border border-border rounded-lg text-textPrimary focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-light text-textSecondary mb-2">Country</label>
                <input
                  type="text"
                  name="country"
                  required
                  defaultValue={editingEducation?.country}
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
                  defaultValue={editingEducation?.from}
                  className="w-full px-4 py-2 bg-bgSecondary border border-border rounded-lg text-textPrimary focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-light text-textSecondary mb-2">To Date (leave empty for present)</label>
                <input
                  type="date"
                  name="to"
                  defaultValue={editingEducation?.to || ''}
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
                defaultValue={editingEducation?.description}
                className="w-full px-4 py-2 bg-bgSecondary border border-border rounded-lg text-textPrimary focus:outline-none focus:border-accent"
              />
            </div>
            <div className="flex gap-4">
              <button
                type="submit"
                className="px-6 py-2 bg-accent text-bgPrimary rounded-lg hover:bg-accent/90 transition-colors"
              >
                {editingEducation ? 'Update' : 'Create'}
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
        {educations.map((education) => (
          <div key={education.id} className="glass-card p-6">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-xl font-light text-textPrimary mb-2">{education.title}</h3>
                <p className="text-textSecondary text-sm mb-2">{education.company_name}</p>
                <p className="text-textTertiary text-xs mb-2">
                  {education.city}, {education.country}
                </p>
                <p className="text-textTertiary text-xs mb-3">
                  {new Date(education.from).toLocaleDateString()} - {education.to ? new Date(education.to).toLocaleDateString() : 'Present'}
                </p>
                <p className="text-textSecondary text-sm">{education.description}</p>
              </div>
              <div className="flex gap-2 ml-4">
                <button
                  onClick={() => handleEdit(education)}
                  className="px-4 py-2 border border-border text-textSecondary rounded-lg hover:border-accent hover:text-textPrimary transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(education.id)}
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

