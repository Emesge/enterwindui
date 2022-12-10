import React from 'react';
import { EnterWind as Logo, Github } from '../../elements/Icons';

function Navbar(){
  return (
    <header className="fixed top-0 left-0 right-0 flex justify-center bg-white shadow">
      <div className="container flex justify-between px-3 py-3 bg-white lg:py-5">
        <Logo />
        <nav>
          <a href="https://github.com/rayasabari/enterwindui">
            <Github size="w-5 h-5" />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
