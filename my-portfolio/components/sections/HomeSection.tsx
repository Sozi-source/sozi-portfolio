"use client"
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

const HomeSection= () => {
  return (
    <section
  id="home"
  className="min-h-screen flex flex-col md:flex-row items-center justify-start md:justify-center bg-gray-50 px-5 md:px-[10%] pt-20"
>
  {/* Left side: Text content */}
  <motion.div 
        className="flex-1 text-center md:text-left space-y-5 mt-10 md:mt-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}>
    
    <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}>
      Hi, I'm Wilfred Osozi
    </motion.h1>

    <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
        <Typewriter
        words={[
          "I'm a web developer, specialised in front-end development.",
          "I'm a problem solver.",
          "I build applications that solve real-world problems.",
          "I love coding and learning new technologies.",
          "I'm passionate about creating beautiful and functional user experiences."
        ]}
        loop={0}            // 0 = infinite loop
        cursor
        cursorStyle="|"
        typeSpeed={50}
        deleteSpeed={30}
        delaySpeed={1500}/>
    </motion.p>

    <motion.div 
          className="mt-5 flex justify-center md:justify-start gap-4"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}>
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
    </motion.div>
  </motion.div>

  {/* Right side: Profile image */}
  <motion.div className="flex-1 mt-10 md:mt-0 flex justify-center md:justify-end">
    <Image
      src="/assets/images/profile.jpg"
      alt="Wilfred Osozi"
      width={300}
      height={300}
      className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full border-4 border-blue-600 shadow-lg object-cover"
    />
  </motion.div>
</section>

  );
};

export default HomeSection;
