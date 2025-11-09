import React from "react";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "CSS",
  "Tailwind CSS",
  "Git & GitHub",
  "REST APIs",
  "Figma",
];

const SkillsSection: React.FC = () => {
  return (
    <section
      id="mySkills"
      className="min-h-screen bg-gray-50 px-6 md:px-20 py-20 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
      
      <ul className="flex flex-wrap gap-4 justify-center">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="bg-white border border-gray-300 rounded-full px-6 py-2 text-gray-800 font-medium shadow-sm hover:shadow-md transition"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SkillsSection;
