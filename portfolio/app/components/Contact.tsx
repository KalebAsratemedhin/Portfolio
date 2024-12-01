const Contact = () => {
    return (
      <div id="contact" className="w-full min-h-screen bg-primary flex flex-col justify-center items-center p-4">
        <form className="flex flex-col max-w-[600px] w-full animate-slide-up">
          <div className="pb-8">
            <p className="section-title text-4xl font-bold">Contact</p>
            <p className="text-textSecondary text-2xl py-4">
              Submit the form below or send me an email
            </p>
          </div> 
          <input
            className="bg-primary/30 p-2 border-2 border-secondary/20 rounded-lg text-textPrimary focus:outline-none focus:border-secondary transition-colors duration-300"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-primary/30 border-2 border-secondary/20 rounded-lg text-textPrimary focus:outline-none focus:border-secondary transition-colors duration-300"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-primary/30 p-2 border-2 border-secondary/20 rounded-lg text-textPrimary focus:outline-none focus:border-secondary transition-colors duration-300"
            name="message"
            rows={10}
            placeholder="Message"
          ></textarea>
          <button className="btn-primary my-8 mx-auto flex items-center">
            Let's Collaborate
          </button>
        </form>

        <a
        href="/resume-vl.pdf"
        download="Kaleb_Resume.pdf"
        className="bg-[#1a1a1a] hover:border-[#646cff] border border-[#64ffda] text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300"
      >
        Download Resume
      </a>
      </div>
    );
  };
  
  export default Contact;
  