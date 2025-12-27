'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { sendMagicLink, isAdminAuthenticated } from '../../lib/auth'

export default function AdminLogin() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [emailSent, setEmailSent] = useState(false)

  useEffect(() => {
    // Redirect if already logged in
    const checkAuth = async () => {
      const authenticated = await isAdminAuthenticated()
      if (authenticated) {
        router.push('/admin/dashboard')
      }
    }
    checkAuth()
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const result = await sendMagicLink(email)
    
    if (result.success) {
      setEmailSent(true)
    } else {
      setError(result.error || 'Failed to send magic link')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-bgPrimary flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="glass-card p-8">
          <h1 className="text-3xl font-light text-textPrimary mb-2">Admin Login</h1>
          <p className="text-textSecondary text-sm mb-8">
            {emailSent 
              ? 'Check your email for the magic link' 
              : 'Enter your email to receive a magic link'
            }
          </p>

          {!emailSent ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-light text-textSecondary mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 bg-bgSecondary border border-border rounded-lg text-textPrimary placeholder-textTertiary focus:outline-none focus:border-accent transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-accent text-bgPrimary font-light rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Magic Link'}
              </button>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="p-4 bg-accent/10 border border-accent/30 rounded-lg">
                <p className="text-textPrimary text-sm">
                  We've sent a magic link to <strong>{email}</strong>
                </p>
                <p className="text-textSecondary text-xs mt-2">
                  Click the link in the email to sign in. The link will expire in a few minutes.
                </p>
              </div>
              <button
                onClick={() => {
                  setEmailSent(false)
                  setEmail('')
                }}
                className="w-full px-6 py-3 border border-border text-textSecondary rounded-lg hover:border-accent hover:text-textPrimary transition-colors"
              >
                Use a different email
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

