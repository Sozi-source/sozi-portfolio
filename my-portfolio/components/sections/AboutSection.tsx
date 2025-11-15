'use client'
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center bg-gray-50 px-6 md:px-20 py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 w-full">
        
        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600">About Me</h2>
          
          <p className="text-gray-700 text-lg leading-relaxed">
            Hi, I'm <span className="font-semibold text-gray-900">Wilfred Osozi</span>, with a background in <span className="font-semibold">human health, nutrition, and dietetics</span>. I have spent most of my career <span className="font-semibold">training and mentoring college students</span> while exploring innovative ways to use technology to improve health outcomes.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            I combine <span className="font-semibold">modern web technologies</span> with <span className="font-semibold">creative design</span> to build web applications that are visually engaging and highly functional. I enjoy collaborating with developers, designers, and clients to transform ideas into impactful products.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Away from the keyboard, I explore new design trends, learn emerging technologies, and contribute to open-source projects that create meaningful impact.
          </p>

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block bg-blue-600 text-white px-7 py-3 rounded-lg shadow-md hover:bg-blue-700 transition mt-4"
          >
            View My Projects
          </motion.a>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0"
        >
          <Image
            src="/assets/images/profile.jpg"
            alt="Wilfred Osozi"
            width={500}
            height={500}
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full border-4 border-blue-600 shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
