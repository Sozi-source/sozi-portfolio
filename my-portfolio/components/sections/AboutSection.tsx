import React from "react";
import Image from "next/image";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center bg-gray-50 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
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

        {/* About Text */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-gray-700 text-lg mb-4">
            Hi, I'm <span className="font-semibold text-gray-900">Wilfred Osozi</span>, a passionate Full-Stack Developer and UI/UX Designer based in Kenya. I specialize in creating intuitive and responsive web applications that solve real-world problems and deliver exceptional user experiences.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            With a strong foundation in <span className="font-semibold">modern web technologies</span> and <span className="font-semibold">creative design</span>, I combine functionality with aesthetic appeal to craft solutions that are both effective and visually engaging. I enjoy collaborating with clients and teams to bring ideas to life.
          </p>
          <p className="text-gray-700 text-lg mb-6">
            When I’m not coding, I love exploring new design trends, learning about emerging technologies, and contributing to open-source projects that make a difference.
          </p>
          <a
            href="#projects"
            className="inline-block bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
          >
            View My Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
