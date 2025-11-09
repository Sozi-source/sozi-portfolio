import React from "react";
import Image from "next/image";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and experience.",
    image: "/assets/images/project1.jpg",
    link: "https://github.com/Sozi-source/portfolio",
  },
  {
    title: "E-commerce App",
    description: "A full-stack e-commerce application built with React and Node.js.",
    image: "/assets/images/project2.jpg",
    link: "https://github.com/Sozi-source/ecommerce-app",
  },
  {
    title: "Nutrition Tracker",
    description: "A web app to track daily nutrition intake and provide meal recommendations.",
    image: "/assets/images/project3.jpg",
    link: "https://github.com/Sozi-source/nutrition-tracker",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="min-h-screen bg-gray-50 px-6 md:px-20 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        
        <div className="grid gap-10 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block text-blue-600 font-medium hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
