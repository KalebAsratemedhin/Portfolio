const Contact = () => {
    return (
      <div id="contact" className="w-full min-h-screen bg-primary flex justify-center items-center p-4">
        <form className="flex flex-col max-w-[600px] w-full animate-slide-up">
          <div className="pb-8">
            <p className="section-title">Contact</p>
            <p className="text-textSecondary py-4">
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
      </div>
    );
  };
  
  export default Contact;
  