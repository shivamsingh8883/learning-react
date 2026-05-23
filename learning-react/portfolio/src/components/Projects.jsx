function Projects() {
  const projects = [
    {
      title: "Weather App",
      description: "Real-time weather data with 5-day forecast and favorites.",
      tech: ["React", "REST API", "Tailwind CSS"],
      link: "https://github.com/shivamsingh8883/learning-react"
    },
    {
      title: "GitHub User Finder",
      description: "Search GitHub users and view their repositories.",
      tech: ["React", "GitHub API", "Tailwind CSS"],
      link: "https://github.com/shivamsingh8883/learning-react"
    },
    {
      title: "Task Manager",
      description: "Manage your daily tasks with a clean, simple interface.",
      tech: ["JavaScript", "DOM", "Local Storage"],
      link: "https://github.com/shivamsingh8883/learning-react"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-800">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition">
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-blue-600 text-sm px-3 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-semibold"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
