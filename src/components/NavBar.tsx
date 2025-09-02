import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full h-auto text-white px-4 py-4 flex items-center justify-between relative">
      {/* Left side: Logo */}
      <div className="flex items-center gap-3">
        <div className="bg-white rounded-full h-10 w-10"></div>
        <h2 className="font-bold text-lg sm:text-xl md:text-2xl">Your-Logo</h2>
      </div>

      {/* Hamburger (visible on mobile) */}
      <button
        className="flex flex-col gap-1 md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className="block w-6 h-0.5 bg-white"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>

      {/* Menu: hidden on mobile, inline on md+ */}
      <div className="hidden md:flex">
        <div>
          
        <div className="bg-white h-1 w-10 my-1"></div>
        <div className="bg-white h-1 w-10 my-1"></div>
        </div> 
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-800 flex flex-col items-center py-6 gap-4 md:hidden shadow-md z-50">
        <div>
          
        <div className="bg-white h-1 w-10 my-1"></div>
        <div className="bg-white h-1 w-10 my-1"></div>
        </div> 
        </div>
      )}
    </nav>
  );
};

export default NavBar;
