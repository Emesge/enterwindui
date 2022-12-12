import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { EnterWind as Logo, Github } from '../../elements/Icons';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

function Navbar() {
  const [dark, setDark] = useState(false);
  const toggleDarkMode = () => {
    const html = document.documentElement.classList;
    localStorage.theme = dark ? 'light' : 'dark';
    dark ? html.remove('dark') : html.add('dark');
    setDark((prev) => !prev);
  };

  const checkTheme = () => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setDark(false);
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    checkTheme();
  });

  return (
    <header className="fixed top-0 left-0 right-0 flex justify-center shadow">
      <div className="container flex items-center justify-between px-3 py-3 lg:py-5">
        <div className="flex items-center gap-4 lg:gap-10">
          <Logo />
          <nav className="items-center hidden gap-4 text-sm md:flex">
            <Link className="hover:font-medium" href={'/components'}>Components</Link>
            <Link className="hover:font-medium" href={'/documentation'}>Docs</Link>
            <Link className="hover:font-medium" href={'/blog'}>Blog</Link>
          </nav>
        </div>
        <nav className="flex items-center gap-5">
          <button className="w-6 h-6" onClick={toggleDarkMode} type="button">
            {dark ? <SunIcon className="text-yellow-500" /> : <MoonIcon />}
          </button>
          <a href="https://github.com/rayasabari/enterwindui">
            <Github size="w-5 h-5" />
          </a>
        </nav>
      </div>
    </header >
  );
}

export default Navbar;
