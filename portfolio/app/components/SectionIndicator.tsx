'use client'
import { useState, useEffect } from 'react'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'portfolio', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
]

export default function SectionIndicator() {
  const [activeId, setActiveId] = useState<string>('home')

  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[]
    if (els.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((e) => e.isIntersecting).map((e) => ({ id: e.target.id, ratio: e.intersectionRatio }))
        if (intersecting.length > 0) {
          const best = intersecting.reduce((a, b) => (a.ratio >= b.ratio ? a : b))
          setActiveId(best.id)
        }
      },
      { rootMargin: '-30% 0px -30% 0px', threshold: [0, 0.1, 0.5, 1] }
    )

    els.forEach((el) => observer.observe(el))
    return () => els.forEach((el) => observer.unobserve(el))
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden lg:flex flex-col items-stretch gap-3">
      {sections.map(({ id, label }) => {
        const isActive = activeId === id
        return (
          <button
            key={id}
            type="button"
            onClick={() => scrollTo(id)}
            className="group flex flex-row items-center gap-2"
            aria-label={`Go to ${label}`}
            aria-current={isActive ? 'true' : undefined}
          >
            <span
              className={`block w-0.5 h-6 transition-colors duration-300 shrink-0 ${
                isActive
                  ? 'bg-accent'
                  : 'bg-textTertiary group-hover:bg-textTertiary/90'
              }`}
            />
            <span
              className={`text-[10px] font-light uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap text-textSecondary ${
                isActive ? 'text-accent opacity-100' : ''
              }`}
            >
              {label}
            </span>
          </button>
        )
      })}
    </div>
  )
}
