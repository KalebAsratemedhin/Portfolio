'use client'
import { useEffect, useRef } from 'react'
import { skillsData } from '../data/portfolio'

const skillCategories: { key: keyof typeof skillsData; label: string }[] = [
  { key: 'programmingLanguages', label: 'Programming Languages' },
  { key: 'librariesAndFrameworks', label: 'Libraries and Frameworks' },
  { key: 'databases', label: 'Databases' },
  { key: 'technologiesAndTools', label: 'Technologies and Tools' },
]

function createInfiniteCarousel<T>(items: T[]): T[] {
  return [...items, ...items, ...items, ...items]
}

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
          }
        })
      },
      { threshold: 0.1 }
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [])

  const SkillCarousel = ({ skills, title }: { skills: string[]; title: string }) => {
    const carouselItems = createInfiniteCarousel(skills)
    const animationDuration = skills.length * 2.5

    return (
      <div className="space-y-4 animate-slide-in w-full">
        <h3 className="text-lg font-light text-textPrimary mb-6">
          {title}
        </h3>
        <div className="relative overflow-hidden w-full -mx-4 sm:-mx-6 lg:-mx-8">
          <div
            className="flex gap-4 px-4 sm:px-6 lg:px-8 carousel-scroll"
            style={{
              width: 'max-content',
              animationDuration: `${animationDuration}s`,
            }}
          >
            {carouselItems.map((skill, index) => (
              <span
                key={`${skill}-${index}`}
                className="flex-shrink-0 px-4 py-2 text-sm font-light rounded-full border border-border/60 bg-bgSecondary/60 text-textSecondary hover:border-accent/50 hover:text-accent transition-colors duration-300 whitespace-nowrap"
                style={{ minWidth: 'max-content' }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      id="skills"
      ref={sectionRef}
      className="relative w-full min-h-screen py-32 bg-bgPrimary bg-texture overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-warm-tan/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-warm-brown/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-textSecondary text-sm uppercase tracking-widest font-light">05. Skills</span>
          <h2 className="section-title mt-4">Technologies</h2>
          <p className="text-textSecondary mt-4 font-light">Technologies I work with</p>
        </div>

        <div className="space-y-16 w-full sm:p-24">
          {skillCategories.map(({ key, label }) => (
            <SkillCarousel key={key} skills={skillsData[key]} title={label} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
