import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const closeMenu = (e) => {
      if (!e.target.closest('#menu-toggle') && !e.target.closest('#mobile-menu')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, []);

  const menuItems = [
    { to: "/", text: "Home" },
    { to: "/profile", text: "Profile" },
    { to: "/goals", text: "Goals" },
    { to: "/projects", text: "Projects" },
    { to: "/skills", text: "Skills" },
    { to: "/contact", text: "Contact us" }
  ];

  return (
    <motion.nav className="w-full fixed top-0 z-50 " initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="container mx-auto py-5 px-4 flex items-center justify-between">
        <Link to="/" className="name">
          <img src="/images/logo.png" alt="Usairam Saeed" className="w-16 h-16 md:w-10 md:h-10 lg:w-12 lg:h-12" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-400">
          {menuItems.map((item, index) => (
            <li key={index} className="hover:text-zinc-50">
              <Link to={item.to}>{item.text}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          id="menu-toggle" 
          className="md:hidden flex flex-col items-center justify-center space-y-1 cursor-pointer p-2 z-50 h-10 w-10" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-gray-400 transition-all ${isMenuOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-gray-400 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-gray-400 transition-all ${isMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            id="mobile-menu"
            className="fixed top-0 right-0 h-full bg-zinc-900 text-gray-400 w-64 md:hidden flex flex-col space-y-4 p-4 pt-20"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
          >
            {menuItems.map((item, index) => (
              <li key={index} className="hover:text-zinc-50">
                <Link to={item.to} onClick={toggleMenu}>{item.text}</Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

