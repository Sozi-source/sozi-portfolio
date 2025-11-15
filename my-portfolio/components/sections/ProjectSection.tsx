"use client"
import React from "react";
import Image from "next/image";
import {motion} from "framer-motion"

const projects = [
  {
    title: "Weather App",
    description: "A web application that provides current weather information for any city using API integration.",
    image: "/assets/images/weather.png",
    link: "https://project-08-2025-p32c.vercel.app/",
  },
  {
    title: "E-commerce App",
    description: "A full-stack e-commerce application built with React and Node.js.",
    image: "/assets/images/shopping.png",
    link: "https://e-duka-three.vercel.app/",
  },
  {
  title: "Hotel Booking",
  description: "A web app that allows users to search, book, and manage hotel reservations online.",
  image: "/assets/images/travel.png",
  link: "https://airbnbclone-peach-delta.vercel.app/",
},
{
  title: "Age Calculator",
  description: "A web app that calculates a person’s exact age based on their date of birth.",
  image: "/assets/images/calculator.png",
  link: "https://fe-mentor-tet4.vercel.app/",
},
{
  title: "Countries Information",
  description: "A web app providing details about countries, including population, capital, and region.",
  image: "/assets/images/country.png",
  link: "https://country-search-hazel-beta.vercel.app/",
},

];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="min-h-screen bg-gray-50 px-6 md:px-20 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
         className="text-4xl font-bold text-center mb-12 text-blue-600"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          >Featured Projects
          </motion.h2>
        
        <div className="grid gap-10 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-xl p-5 flex flex-col items-center hover:-translate-y-2 hover:shadow-xl transition-transform duration-300"
               /* CARD ANIMATION */
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
                <motion.a
                 href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block text-blue-600 font-medium hover:underline"
                  whileHover={{ scale: 1.05 }}
                >
                  View Project
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
