'use client'
import { useEffect, useRef, useState } from 'react'

const services = [
  {
    id: 1,
    title: 'Frontend Development',
    description:
      'Creating responsive and intuitive user interfaces using modern frameworks and libraries. I build beautiful, performant web experiences that users love.',
  },
  {
    id: 2,
    title: 'Backend Development',
    description:
      'Building robust and scalable server-side applications with modern technologies. Secure, efficient APIs and databases that power your applications.',
  },
  {
    id: 3,
    title: 'AI Engineering',
    description:
      'Developing intelligent solutions using cutting-edge AI technologies. From machine learning models to intelligent automation systems.',
  },
]

const SCATTER_OFFSET = 56 // px to slide outward; items stop here and stay visible

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const scrollDirRef = useRef<'up' | 'down'>('down')
  const [sectionInView, setSectionInView] = useState(false)
  const [visible, setVisible] = useState<Record<number, boolean>>({})
  const [scattered, setScattered] = useState(false)
  const prevScrollY = useRef(0)

  // Scroll direction: scroll up = slide outward (scattered), scroll down = slide to center (arranged)
  useEffect(() => {
    const checkItemsInView = () => {
      const section = sectionRef.current
      if (!section) return
      const sectionRect = section.getBoundingClientRect()
      if (sectionRect.bottom < 0 || sectionRect.top > window.innerHeight) return
      const items = section.querySelectorAll('[data-service-id]')
      const viewportBottom = window.innerHeight
      const newVisible: Record<number, boolean> = {}
      items.forEach((el) => {
        const id = el.getAttribute('data-service-id')
        if (!id) return
        const rect = el.getBoundingClientRect()
        const inView = rect.top < viewportBottom - 80 && rect.bottom > 80
        if (inView) newVisible[Number(id)] = true
      })
      setVisible((prev) => (Object.keys(newVisible).length > 0 ? { ...prev, ...newVisible } : prev))
    }

    const handleScroll = () => {
      const current = window.scrollY
      const dir = current > prevScrollY.current ? 'down' : 'up'
      scrollDirRef.current = dir
      prevScrollY.current = current
      if (dir === 'up') {
        setScattered(true)
      } else {
        setScattered(false)
        checkItemsInView()
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Section in/out of view
  useEffect(() => {
    const sectionEl = sectionRef.current
    if (!sectionEl) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return
        setSectionInView(entry.isIntersecting)
        if (!entry.isIntersecting) {
          setVisible({})
          setScattered(false)
        }
      },
      { threshold: 0, rootMargin: '-10% 0px -10% 0px' }
    )
    observer.observe(sectionEl)
    return () => observer.unobserve(sectionEl)
  }, [])

  // When section in view and scrolling down, items slide in
  useEffect(() => {
    if (!sectionInView) return

    const currentRef = sectionRef.current
    if (!currentRef) return

    const items = currentRef.querySelectorAll('[data-service-id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('data-service-id')
          if (id && entry.isIntersecting) {
            setVisible((prev) => ({ ...prev, [Number(id)]: true }))
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )

    items.forEach((el) => observer.observe(el))
    return () => items.forEach((el) => observer.unobserve(el))
  }, [sectionInView])

  return (
    <div
      id="services"
      ref={sectionRef}
      className="relative w-full min-h-screen py-32 bg-bgSecondary bg-texture overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-warm-tan/10 rounded-full blur-3xl animate-float" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 animate-fade-in-up">
          <span className="text-textSecondary text-sm uppercase tracking-widest font-light">06. Services</span>
          <h2 className="section-title mt-4">What I Do</h2>
          <p className="text-textSecondary mt-4 font-light">How I can help</p>
        </div>

        <div className="space-y-0">
          {services.map((service, index) => {
            const isVisible = visible[service.id]
            const fromRight = index % 2 === 1
            // Arranged: center (0). Scattered: offset left/right. Not yet visible: offset + hidden
            const translateX =
              !isVisible
                ? fromRight ? SCATTER_OFFSET : -SCATTER_OFFSET
                : scattered
                  ? fromRight ? SCATTER_OFFSET : -SCATTER_OFFSET
                  : 0
            const opacity = isVisible ? 1 : 0
            const delay = isVisible && !scattered ? index * 100 : 0
            return (
              <div
                key={service.id}
                data-service-id={service.id}
                className="service-row group border-b border-border/60 py-12 first:pt-0 last:border-b-0 last:pb-0 hover:border-accent/40 overflow-hidden ease-out"
                style={{
                  transform: `translateX(${translateX}px)`,
                  opacity,
                  transition: 'transform 700ms ease-out, opacity 700ms ease-out',
                  transitionDelay: `${delay}ms`,
                }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex items-baseline gap-4">
                    <span className="text-textTertiary text-sm font-light tabular-nums w-8">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-light text-textPrimary group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <p className="font-light leading-relaxed text-textSecondary md:max-w-lg md:text-right">
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Services
