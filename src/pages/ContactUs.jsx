function ContactUs() {
  return <div className="relative bg-lightgray py-16 overflow-hidden">
  <div className="absolute top-0 left-0 w-full h-full bg-pattern1 bg-cover bg-center opacity-30"></div>
  <div className="container mx-auto px-6 relative z-10">
    
    {/* Page Title */}
    <h1 className="text-5xl font-extrabold text-center text-navy mb-12">Contact Us</h1>

    {/* Contact Information Section */}
    <section className="mb-16 text-center lg:text-left">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start">
        <div className="lg:w-1/2 mb-6 lg:mb-0 lg:mr-6">
          <h2 className="text-4xl font-bold text-teal mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Address:</strong> Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Phone:</strong> +1 (123) 456-7890
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Email:</strong> <a href="mailto:info@springdale.edu" className="text-teal hover:underline">info@springdale.edu</a>
          </p>
        </div>
        <div className="lg:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30915.60007473024!2d-122.084249!3d37.386051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbb575e09bff5%3A0x9c1c5bfc6f7902c0!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sus!4v1614249260218!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="School Location"
          ></iframe>
        </div>
      </div>
    </section>

    {/* Contact Form Section */}
    <section>
      <h2 className="text-4xl font-bold text-teal mb-6 text-center">Send Us a Message</h2>
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-teal text-white py-2 px-4 rounded-lg shadow-md hover:bg-teal-dark focus:outline-none focus:ring-2 focus:ring-teal"
        >
          Send Message
        </button>
      </form>
    </section>

  </div>
</div>;
}

export default ContactUs;
