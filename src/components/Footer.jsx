import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white py-6 mt-10 fixed bottom-0 left-0 w-full">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-bold">TODO</h2>
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Todo. All rights reserved.</p>
        </div>

        {/* Right section: links */}
        
      </div>
    </footer>
  );
}

export default Footer;
