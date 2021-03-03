import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between p-10 sm:p-10 items-center">
      <div className="sm:hidden fixed sm:static bg-gray-200 w-full top-0 left-0 h-20 shadow-lg"></div>
        {/* Left side */}
        <div className="fixed sm:static top-6 left-8 flex justify-between items-center">
          <button
            href="/"
            className="p-2"
            onClick={() => {
              window.location = "/";
            }}
          >
            <img src="./assets/images/CPFav-02.png" alt="Logo" className="w-16 sm:w-24" />
          </button>
          <a href="/" className="ml-4 sm:ml-12 text-xl sm:text-3xl hidden md:inline-block">
            Christian Payne
          </a>
        </div>

        {/* Right side */}
        <div className="flex justify-end hidden sm:flex">
          <a href="/projects" className="px-6 py-4">
            Projects
          </a>
          <a href="/contact-me" className="px-6 py-4">
            Contact Me
          </a>
        </div>

        <div className="fixed top-6 right-8 flex justify-end sm:hidden">
          <button className="p-2" onClick={() => {}}>
            <img src="./assets/menu.png" alt="menuIcon" className="w-5" />
            
          </button>
        </div>
      
    </nav>
  );
}

export default Navbar;