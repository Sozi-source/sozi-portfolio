"use client"
import React from "react";
import Image from "next/image";
import {motion} from "framer-motion"

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center bg-gray-50 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* About Text */}
        <motion.div
        initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6">

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">About Me</h2>
          
          <p className="text-gray-700 text-lg leading-relaxed">
            Hi, I'm {""} 
            <span className="font-semibold text-gray-900">Wilfred Osozi</span>, a passionate Full-Stack Developer and UI/UX Designer based in Kenya. I specialize in creating intuitive and responsive web applications that solve real-world problems and deliver exceptional user experiences.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            I combine <span className="font-semibold">modern web technologies</span>, 
            with <span className="font-semibold">creative design</span> to craft digital 
            experiences that are both visually engaging and highly functional. 
            I enjoy collaborating with developers, designers, and clients to 
            transform ideas into impactful products.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Away from the keyboard, I explore new design trends, learn emerging
            technologies, and contribute to open-source projects that create
            meaningful impact.
          </p>

           {/* Profile Image */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/assets/images/profile.jpg"
            alt="Wilfred Osozi"
            width={500}
            height={500}
            className="rounded-full object-cover shadow-lg"
          />
        </div>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block bg-blue-600 text-white px-7 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            View My Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
