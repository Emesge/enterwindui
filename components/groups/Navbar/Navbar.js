import Link from 'next/link';
import React from 'react';
import { EnterWind as Logo, Github } from '../../elements/Icons';

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 flex justify-center shadow">
      <div className="container flex justify-between px-3 py-3 lg:py-5">
        <div className="flex items-center gap-4 lg:gap-10">
          <Logo />
          <nav className="items-center hidden gap-4 text-sm md:flex">
            <Link className="transition-all duration-300 hover:font-medium" href={'/components'}>Components</Link>
            <Link className="transition-all duration-300 hover:font-medium" href={'/documentation'}>Docs</Link>
            <Link className="transition-all duration-300 hover:font-medium" href={'/blog'}>Blog</Link>
          </nav>
        </div>
        <nav className="flex items-center">
          <a href="https://github.com/rayasabari/enterwindui">
            <Github size="w-5 h-5" />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
