import FadeIn from "../animation/FadeIn";

const skills = [
  {name: "JavaScript", icon:"/assets/icons/js.png", level: "Advanced"},
  {name: "TypeScript", icon:"/assets/icons/typescript.png", level: "Intermediate" },
 {name: "React", icon: "/assets/icons/react.png", level: "Advanced"},
 {name: "Next.js", icon: "/assets/icons/next.png", level: "Advanced"},
  {name: "Node.js", icon: "/assets/icons/node.png", level: "Advanced"},
 {name: "Tailwind CSS", icon: "/assets/icons/tailwind.png", level: "Intermediate"},
  {name: "Git & GitHub", icon: "/assets/icons/github.png", level: "Advanced"},
  {name: "REST APIs", icon: "/assets/icons/api.png", level: "Intermediate"},
  {name: "Figma", icon: "/assets/icons/figma.png", level: "Intermediate"},
];

const SkillsSection: React.FC = () => {
  return (
    <section
      id="mySkills"
      className="min-h-screen bg-gray-50 px-6 md:px-20 py-20 flex flex-col items-center bg-gray-200"
    >
      <FadeIn>
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-600">Skills & Expertise</h2>
      
      <ul className="flex flex-wrap gap-8 justify-center">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="bg-white shadow-md rounded-xl p-5 flex flex-col items-center hover:-translate-y-2 hover:shadow-xl transition-transform duration-300"
          >
            <div>
              <img 
            src={skill.icon}
            alt={skill.name}
            width={100}
            height={100}
            className="w-24 h-24 mb-3 hover:rotate-360 transition-transform duration-300"
            />
            <p className="font-semibold text-gray-900">{skill.name} </p>
            <p className="text-sm text-gray-400">{skill.level} </p>
            </div>
          </li>
        ))}
      </ul>

      </FadeIn>
      
    </section>
  );
};

export default SkillsSection;
