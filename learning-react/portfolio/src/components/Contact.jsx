function Contact() {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-gray-400 text-lg mb-8">
          Looking for a part-time developer? Let's talk.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
            <a
            href="https://www.linkedin.com/in/shivam-singh-85270a329/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
            LinkedIn
          </a>
          
            <a
            href="https://github.com/shivamsingh8883"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
            GitHub
          </a>
          
        <a
            href="mailto:shivambacheli@gmail.com"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
            Email Me
          </a>
        </div>
      </div>
      <p className="text-center text-gray-500 mt-12 text-sm">
        © 2026 Shivam Singh. All rights reserved.
      </p>
    </section>
  );
}

export default Contact;
