import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav className="w-full fixed top-0 z-10 mb-10" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="container mx-auto py-5 flex items-center justify-between">
        <div className="name ml-[5%]">
          <img src="/images/logo.png" alt="Usairam Saeed" className="w-16 h-16 md:w-10 md:h-10 lg:w-12 lg:h-12 hidden sm:block" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-gray-400 mr-[2%]">
          <li className="hover:text-zinc-50"><Link to="/profile">Profile</Link></li>
          {/* <li className="hover:text-zinc-50"><Link to="/gallery">Gallery</Link></li> */}
          <li className="hover:text-zinc-50"><Link to="/goals">Goals</Link></li>
          <li className="hover:text-zinc-50"><Link to="/projects">Projects</Link></li>
          <li className="hover:text-zinc-50"><Link to="/skills">Skills</Link></li>
          <li className="hover:text-zinc-50"><Link to="/contact">Contact us</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <div id="menu-toggle" className="md:hidden flex flex-col items-center space-y-1 cursor-pointer px-2" onClick={toggleMenu}>
          <div className="w-6 h-0.5 bg-gray-400"></div>
          <div className="w-6 h-0.5 bg-gray-400"></div>
          <div className="w-6 h-0.5 bg-gray-400"></div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="absolute top-16 right-0 flex justify-center items-center bg-zinc-900 text-gray-400 w-full md:hidden flex-col space-y-2 px-4 py-2 border-t border-zinc-700">
            <li className="hover:text-zinc-50"><Link to="/">Home</Link></li>
          <li className="hover:text-zinc-50"><Link to="/profile">Profile</Link></li>
          {/* <li className="hover:text-zinc-50"><Link to="/gallery">Gallery</Link></li> */}
          <li className="hover:text-zinc-50"><Link to="/goals">Goals</Link></li>
          <li className="hover:text-zinc-50"><Link to="/projects">Projects</Link></li>
          <li className="hover:text-zinc-50"><Link to="/skills">Skills</Link></li>
          <li className="hover:text-zinc-50"><Link to="/contact">Contact</Link></li>
        </ul>
      )}
    </motion.nav>
  );
};

export default Navbar;

