function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Shivam Singh</h1>
      <p className="text-xl text-gray-400 mb-6 max-w-xl">
        Frontend Developer skilled in React, JavaScript, and Tailwind CSS.
        I build clean, functional web apps.
      </p>
      <a
        href="#projects"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
      >
        View My Work
      </a>
    </section>
  );
}

export default Hero;