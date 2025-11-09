import Layout from "@/components/common/Layout";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";
import HomeSection from "@/components/sections/HomeSection";


const HomePage: React.FC=()=>{

  return(
    <div className="">
      <Layout>
      {/* Home Section */}
      <section id="home" className="min-h-screen bg-gray-50 flex items-center justify-center scroll-mt-20">
        <HomeSection />
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-white py-20 px-4 scroll-mt-20">
        <AboutSection />
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen bg-gray-100 py-20 px-4 scroll-mt-20">
        <SkillsSection />
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen bg-white py-20 px-4 scroll-mt-20">
        <ProjectsSection />
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen bg-gray-100 py-20 px-4 scroll-mt-20">
        <ExperienceSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-white py-20 px-4 scroll-mt-20">
        <ContactSection />
      </section>
    </Layout>
    </div>
  )
}
export default HomePage;