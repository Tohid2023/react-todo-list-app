import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white px-6 py-4 flex items-center justify-between">
      {/* Logo / Brand */}
      <div className="text-xl font-bold">
        TODO
      </div>

      {/* Desktop Menu */}
      

      {/* Hamburger Icon */}
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-4 md:hidden">
          <li className="hover:text-gray-300 cursor-pointer" onClick={toggleMenu}>Home</li>
          <li className="hover:text-gray-300 cursor-pointer" onClick={toggleMenu}>About</li>
          <li className="hover:text-gray-300 cursor-pointer" onClick={toggleMenu}>Services</li>
          <li className="hover:text-gray-300 cursor-pointer" onClick={toggleMenu}>Contact</li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
