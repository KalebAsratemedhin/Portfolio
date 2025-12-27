'use client'
import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { isAdminAuthenticated } from '../lib/auth'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      // Allow access to login page and auth callback without authentication
      if (pathname === '/admin/login' || pathname === '/admin/auth/callback') {
        setChecking(false)
        return
      }

      // Redirect to login if not authenticated
      const authenticated = await isAdminAuthenticated()
      if (!authenticated) {
        router.push('/admin/login')
      } else {
        setChecking(false)
      }
    }
    
    checkAuth()
  }, [router, pathname])

  if (checking && pathname !== '/admin/login' && pathname !== '/admin/auth/callback') {
    return (
      <div className="min-h-screen bg-bgPrimary flex items-center justify-center">
        <div className="text-textSecondary">Loading...</div>
      </div>
    )
  }

  return <>{children}</>
}

