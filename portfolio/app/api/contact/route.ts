import { NextResponse } from 'next/server'

const SCRIPT_URL = process.env.CONTACT_SCRIPT_URL

async function postToAppsScript(payload: {
  name: string
  email: string
  message: string
}) {
  if (!SCRIPT_URL) {
    throw new Error('CONTACT_SCRIPT_URL is not configured')
  }

  // Apps Script returns 302 to script.googleusercontent.com after doPost runs.
  // Node's fetch often fails following that redirect, so handle it manually.
  const initial = await fetch(SCRIPT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload),
    redirect: 'manual',
  })

  if (initial.status >= 200 && initial.status < 300) {
    return {
      status: initial.status,
      text: await initial.text(),
    }
  }

  if (initial.status >= 300 && initial.status < 400) {
    const location = initial.headers.get('location')
    if (!location) {
      return { status: initial.status, text: 'Redirect missing Location header' }
    }

    const redirected = await fetch(location, {
      method: 'GET',
      redirect: 'follow',
    })

    return {
      status: redirected.status,
      text: await redirected.text(),
    }
  }

  return {
    status: initial.status,
    text: await initial.text(),
  }
}

export async function POST(request: Request) {
  if (!SCRIPT_URL) {
    return NextResponse.json(
      { ok: false, error: 'Contact form is not configured' },
      { status: 500 }
    )
  }

  try {
    const body = await request.json()
    const name = typeof body.name === 'string' ? body.name.trim() : ''
    const email = typeof body.email === 'string' ? body.email.trim() : ''
    const message = typeof body.message === 'string' ? body.message.trim() : ''

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    const { status, text } = await postToAppsScript({ name, email, message })

    let scriptResult: { ok?: boolean; error?: string } | null = null
    try {
      scriptResult = JSON.parse(text)
    } catch {
      scriptResult = null
    }

    if (status === 401 || status === 403) {
      return NextResponse.json(
        {
          ok: false,
          error:
            'Google Apps Script is not publicly accessible. Redeploy the web app with access set to Anyone.',
        },
        { status: 502 }
      )
    }

    if (!status || status >= 400 || scriptResult?.ok === false) {
      console.error('Apps Script error:', status, text.slice(0, 500))
      return NextResponse.json(
        {
          ok: false,
          error: scriptResult?.error || 'Failed to save message',
        },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : 'Failed to send message',
      },
      { status: 500 }
    )
  }
}
