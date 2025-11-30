'use client';

import { useState } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 h-16 md:h-20">
      <nav className="flex justify-between items-center h-full px-5 md:px-10">
        {/* Logo / Brand */}
        <div className="text-xl font-bold">
          <Link href="/"
          className="text-black text-2xl font-bold">Wilfred Osozi</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-5">
          <li><Link href="#home">Home</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#skills">Skills</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#experience">Experience</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <img
              src={isOpen ? "/assets/icons/close.png" : "/assets/images/profile.png"}
              alt={isOpen ? "Close Menu" : "Open Menu"}
              className="w-6 h-6"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md flex flex-col gap-5 px-5 py-5">
          <li><Link href="#home" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link href="#about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link href="#skills" onClick={() => setIsOpen(false)}>Skills</Link></li>
          <li><Link href="#projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
          <li><Link href="#experience" onClick={() => setIsOpen(false)}>Experience</Link></li>
          <li><Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </header>
  );
};

export default Header;
