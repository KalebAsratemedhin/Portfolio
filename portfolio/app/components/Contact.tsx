'use client'
import { useState, useRef, useEffect } from 'react';
import { HiMail } from 'react-icons/hi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      const items = currentRef.querySelectorAll('.fade-in-item');
      items.forEach((item) => observer.observe(item));
    }

    return () => {
      if (currentRef) {
        const items = currentRef.querySelectorAll('.fade-in-item');
        items.forEach((item) => observer.unobserve(item));
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const mailtoLink = `mailto:risekab@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" ref={sectionRef} className="relative w-full min-h-screen py-32 bg-bgPrimary bg-texture flex flex-col justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12 fade-in-item">
          <span className="text-textSecondary text-sm uppercase tracking-widest font-light">06. Contact</span>
          <h2 className="section-title mt-4">Get In Touch</h2>
          <p className="text-textSecondary mt-4 font-light">
            Have a project in mind? Let&apos;s work together.
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="fade-in-item space-y-6" style={{ animationDelay: '200ms' }}>
          <div className="card-minimal space-y-6">
            <div>
              <label htmlFor="name" className="block text-textPrimary mb-2 text-sm font-light uppercase tracking-wider">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-bgSecondary border border-border text-textPrimary 
                         placeholder:text-textTertiary focus:outline-none focus:border-textPrimary 
                         transition-all duration-300 font-light"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-textPrimary mb-2 text-sm font-light uppercase tracking-wider">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-bgSecondary border border-border text-textPrimary 
                         placeholder:text-textTertiary focus:outline-none focus:border-textPrimary 
                         transition-all duration-300 font-light"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-textPrimary mb-2 text-sm font-light uppercase tracking-wider">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 bg-bgSecondary border border-border text-textPrimary 
                         placeholder:text-textTertiary focus:outline-none focus:border-textPrimary 
                         transition-all duration-300 resize-none font-light"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-minimal w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <div className="p-4 border border-textPrimary text-textPrimary text-center text-sm">
                Message sent successfully! I&apos;ll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 border border-textSecondary text-textSecondary text-center text-sm">
                Failed to send message. Please try again or email me directly.
              </div>
            )}
          </div>
        </form>

        <div className="text-center mt-12 fade-in-item" style={{ animationDelay: '400ms' }}>
          <p className="text-textSecondary mb-4 text-sm font-light">Or reach out directly</p>
          <a
            href="mailto:risekab@gmail.com"
            className="inline-flex items-center gap-2 text-textSecondary hover:text-textPrimary transition-colors duration-300"
          >
            <HiMail size={18} />
            <span className="font-light">risekab@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
