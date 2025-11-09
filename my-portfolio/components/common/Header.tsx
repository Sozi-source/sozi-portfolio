import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className='fixed top-0 left-0 w-full h-20 bg-white shadow-md z-50'>
           <nav className='flex justify-between p-5'>
            <div>
                <Link href="/">My Portfolio</Link>
            </div>
            <ul className='flex gap-5'>
                <li><Link href="/">Home</Link> </li>
                <li><Link href="#about">About</Link> </li>
                <li><Link href="#mySkills">Skills</Link> </li>
                <li><Link href="#projects">Projects</Link> </li>
                <li><Link href="#experience">Experience</Link> </li>
                <li><Link href="#contact">Contact</Link> </li>
            </ul>
           </nav>
        </header>
    );
};

export default Header;