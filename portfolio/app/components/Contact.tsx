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

    // EmailJS integration - Replace with your EmailJS service ID, template ID, and public key
    // You'll need to install: npm install @emailjs/browser
    // And set up your EmailJS account at https://www.emailjs.com/
    
    try {
      // Example EmailJS implementation (uncomment and configure):
      /*
      const emailjs = await import('@emailjs/browser');
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'
      );
      */
      
      // For now, using a simple mailto fallback
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
    <div id="contact" ref={sectionRef} className="relative w-full min-h-screen bg-primary flex flex-col justify-center items-center py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12 fade-in-item">
          <span className="text-secondary font-mono text-sm md:text-base">05. Get In Touch</span>
          <h2 className="section-title mt-4">
            <span className="text-textPrimary">Contact</span>
            <span className="text-gradient ml-4">Me</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind? Let&apos;s work together to bring it to life.
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="fade-in-item space-y-6" style={{ animationDelay: '200ms' }}>
          <div className="bg-glass p-8 rounded-xl border border-secondary/10 space-y-6">
            <div>
              <label htmlFor="name" className="block text-textPrimary mb-2 font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-primary/50 border border-secondary/20 rounded-lg text-textPrimary 
                         placeholder:text-textSecondary/50 focus:outline-none focus:border-secondary 
                         transition-all duration-300"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-textPrimary mb-2 font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-primary/50 border border-secondary/20 rounded-lg text-textPrimary 
                         placeholder:text-textSecondary/50 focus:outline-none focus:border-secondary 
                         transition-all duration-300"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-textPrimary mb-2 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 bg-primary/50 border border-secondary/20 rounded-lg text-textPrimary 
                         placeholder:text-textSecondary/50 focus:outline-none focus:border-secondary 
                         transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin">⏳</span>
                  Sending...
                </>
              ) : (
                <>
                  <HiMail />
                  Send Message
                </>
              )}
            </button>

            {submitStatus === 'success' && (
              <div className="p-4 bg-secondary/10 border border-secondary/30 rounded-lg text-secondary text-center">
                Message sent successfully! I&apos;ll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-center">
                Failed to send message. Please try again or email me directly.
              </div>
            )}
          </div>
        </form>

        <div className="text-center mt-12 fade-in-item" style={{ animationDelay: '400ms' }}>
          <p className="text-textSecondary mb-4">Or reach out directly</p>
          <a
            href="mailto:risekab@gmail.com"
            className="inline-flex items-center gap-2 text-secondary hover:text-textPrimary transition-colors duration-300"
          >
            <HiMail size={20} />
            <span>risekab@gmail.com</span>
          </a>
        </div>

        <div className="text-center mt-8 fade-in-item" style={{ animationDelay: '600ms' }}>
          <a
            href="/Resume-vl.pdf"
            download="Kaleb_Resume.pdf"
            className="btn-primary inline-flex items-center gap-2"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
  