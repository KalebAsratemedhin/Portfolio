'use client'
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState<Record<number, number>>({});

  const services = [
    {
      id: 1,
      title: "Frontend Development",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      description: "Creating responsive and intuitive user interfaces using modern frameworks and libraries. I build beautiful, performant web experiences that users love.",
    },
    {
      id: 2,
      title: "Backend Development",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      description: "Building robust and scalable server-side applications with modern technologies. Secure, efficient APIs and databases that power your applications.",
    },
    {
      id: 3,
      title: "AI Engineering",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
      description: "Developing intelligent solutions using cutting-edge AI technologies. From machine learning models to intelligent automation systems.",
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const windowHeight = window.innerHeight;
      const viewportCenter = windowHeight / 2;

      // Calculate progress for each card
      const newProgress: Record<number, number> = {};
      
      services.forEach((service, index) => {
        const cardElement = sectionRef.current?.querySelector(`[data-service-id="${service.id}"]`) as HTMLElement;
        if (!cardElement) return;

        const cardRect = cardElement.getBoundingClientRect();
        const cardCenter = cardRect.top + cardRect.height / 2;
        
        // Calculate distance from viewport center
        const distanceFromCenter = Math.abs(cardCenter - viewportCenter);
        
        // Progress: 0 when centered, increases as card moves away from center
        // Normalize to 0-1 range based on viewport height
        const progress = Math.min(1, distanceFromCenter / (windowHeight * 0.8));
        
        newProgress[service.id] = progress;
      });

      setScrollProgress(newProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      id="services" 
      ref={sectionRef} 
      className="relative w-full min-h-screen py-32 bg-bgSecondary bg-texture overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* Animated background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-warm-tan/10 rounded-full blur-3xl animate-float"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in-up">
          <span className="text-textSecondary text-sm uppercase tracking-widest font-light">05. Services</span>
          <h2 className="section-title mt-4">What I Do</h2>
        </div>

        <div className="flex flex-col gap-12 max-w-4xl mx-auto">
          {services.map((service, index) => {
            const progress = scrollProgress[service.id] || 0;
            // As progress increases, card shrinks and moves away
            const scale = Math.max(0, 1 - progress * 0.7); // Shrink from 1 to 0.3
            const translateZ = progress * -50; // Move away (negative Z = away from viewer)
            const opacity = Math.max(0, 1 - progress * 0); // Fade out

            // Brightness decreases as card moves away
            const brightness = Math.max(0.1, 1 - progress * 0.2);

            return (
              <div
                key={service.id}
                data-service-id={service.id}
                className="service-item"
                style={{
                  transform: `translateZ(${translateZ}px) scale(${scale})`,
                  opacity: opacity,
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.5s ease-out, opacity 0.1s ease-out, filter 0.1s ease-out',
                  // filter: `brightness(${brightness})`,
                }}
              >
                <div className="glass-card group hover:scale-105 transition-all duration-500 h-full flex flex-col overflow-hidden min-h-[500px]">
                  {/* Image */}
                  <div className="relative w-full h-80 overflow-hidden bg-gradient-to-br from-warm-brown/40 via-warm-tan/30 to-warm-brown/40">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      style={{ 
                        filter: `brightness(${brightness})`,
                        opacity: brightness
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-10 flex-1 flex flex-col">
                    <h3 
                      className="text-3xl md:text-4xl font-light mb-6 text-textPrimary group-hover:text-accent transition-colors duration-300"
                      style={{ 
                        opacity: brightness,
                        // filter: `brightness(${Math.max(1, brightness * 1.2)})`
                      }}
                    >
                      {service.title}
                    </h3>
                    <p 
                      className="font-light leading-relaxed text-lg flex-1 text-textSecondary"
                      style={{ 
                        opacity: brightness,
                        // filter: `brightness(${Math.max(1, brightness * 1.2)})`
                      }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
