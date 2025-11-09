import Link from 'next/link';
import Image from 'next/image';


const HomeSection= () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col md:flex-row items-center justify-center bg-gray-50 px-5 md:px-20"
    >
      {/* Left side: Text content */}
      <div className="flex-1 text-center md:text-left space-y-5">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Hi, I'm Wilfred Osozi
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          I'm a passionate Full-Stack Developer and UI/UX Designer based in Kenya. I create intuitive and responsive web applications that solve real-world problems and deliver exceptional user experiences.
        </p>
        <div className="mt-5 flex justify-center md:justify-start gap-4">
          <Link href="#projects">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              View My Work
            </button>
          </Link>
          <Link href="#contact">
            <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition">
              Contact Me
            </button>
          </Link>
        </div>
      </div>

      {/* Right side: Profile image */}
      <div className="flex-1 mt-10 md:mt-0 flex justify-center md:justify-end">
        <Image
          src="/assets/images/profile.jpg"
          alt="Wilfred Osozi"
          width={300}
          height={300}
          className="rounded-full border-4 border-blue-600 shadow-lg"
        />
      </div>
    </section>
  );
};

export default HomeSection;
