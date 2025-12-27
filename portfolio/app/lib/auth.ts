import { supabase } from './supabase'

export async function sendMagicLink(email: string): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/admin/auth/callback`,
      },
    })

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (err) {
    console.error('Magic link error:', err)
    return { success: false, error: 'An error occurred sending the magic link' }
  }
}

export async function getSession() {
  const { data: { session } } = await supabase.auth.getSession()
  return session
}

export async function logoutAdmin(): Promise<void> {
  await supabase.auth.signOut()
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const session = await getSession()
  return !!session
}

