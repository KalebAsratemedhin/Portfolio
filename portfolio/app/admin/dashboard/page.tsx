'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { logoutAdmin, getSession } from '../../lib/auth'
import ProjectsManager from '../../components/admin/ProjectsManager'
import EducationsManager from '../../components/admin/EducationsManager'
import ExperiencesManager from '../../components/admin/ExperiencesManager'

export default function AdminDashboard() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<'projects' | 'educations' | 'experiences'>('projects')
  const [userEmail, setUserEmail] = useState<string>('')

  useEffect(() => {
    const loadUser = async () => {
      const session = await getSession()
      if (session?.user?.email) {
        setUserEmail(session.user.email)
      }
    }
    loadUser()
  }, [])

  const handleLogout = async () => {
    await logoutAdmin()
    router.push('/admin/login')
  }

  return (
    <div className="min-h-screen bg-bgPrimary">
      {/* Header */}
      <header className="bg-bgSecondary border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-2xl font-light text-textPrimary">Admin Dashboard</h1>
              {userEmail && (
                <p className="text-xs text-textTertiary mt-1">{userEmail}</p>
              )}
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-textSecondary hover:text-textPrimary border border-border rounded-lg hover:border-accent transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex gap-4 border-b border-border">
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-6 py-3 font-light transition-colors ${
              activeTab === 'projects'
                ? 'text-accent border-b-2 border-accent'
                : 'text-textSecondary hover:text-textPrimary'
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveTab('educations')}
            className={`px-6 py-3 font-light transition-colors ${
              activeTab === 'educations'
                ? 'text-accent border-b-2 border-accent'
                : 'text-textSecondary hover:text-textPrimary'
            }`}
          >
            Educations
          </button>
          <button
            onClick={() => setActiveTab('experiences')}
            className={`px-6 py-3 font-light transition-colors ${
              activeTab === 'experiences'
                ? 'text-accent border-b-2 border-accent'
                : 'text-textSecondary hover:text-textPrimary'
            }`}
          >
            Experiences
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'projects' && <ProjectsManager />}
        {activeTab === 'educations' && <EducationsManager />}
        {activeTab === 'experiences' && <ExperiencesManager />}
      </div>
    </div>
  )
}

