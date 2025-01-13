import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaFileDownload } from 'react-icons/fa';
import { useState, useEffect, useCallback } from 'react';

const Home = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300, 500], [1, 0.5, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.2]);

  const taglines = [
    "Engaging Frontend Development",
    "Building Robust Backend Systems",
    "Stunning UI/UX Designs"
  ];

  const [currentTagline, setCurrentTagline] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const typingSpeed = 60;
  const eraseSpeed = 30;
  const pauseBeforeErasing = 2000;
  const pauseBeforeNextTagline = 700;

  const eraseText = useCallback(() => {
    if (displayedText.length > 0) {
      setTimeout(() => {
        setDisplayedText(prev => prev.slice(0, -1));
      }, eraseSpeed);
    } else {
      setTimeout(() => {
        setCurrentTagline(prev => (prev + 1) % taglines.length);
        setIsTyping(true);
      }, pauseBeforeNextTagline);
    }
  }, [displayedText, eraseSpeed, pauseBeforeNextTagline, taglines.length]);

  useEffect(() => {
    let timer;

    if (isTyping) {
      if (displayedText.length < taglines[currentTagline].length) {
        timer = setTimeout(() => {
          setDisplayedText(taglines[currentTagline].slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        setIsTyping(false);
        timer = setTimeout(eraseText, pauseBeforeErasing);
      }
    } else {
      timer = setTimeout(eraseText, eraseSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentTagline, displayedText, eraseText, isTyping, pauseBeforeErasing, taglines, typingSpeed]);

  return (
    <motion.div 
      className="relative min-h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/heroBG.jpg')",
          y: y1,
          scale: scale
        }}
      />
      <motion.div 
        className="absolute inset-0 "
        style={{ y: y2 }}
      />
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4"
        style={{ opacity }}
      >
        <motion.div 
          className="w-24 h-24 rounded-full bg-white overflow-hidden border-2 border-zinc-500 mb-4"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src="/images/profile.png" alt="Profile" className="w-full h-full object-cover" />
        </motion.div>
        <motion.h3 
          className="text-2xl mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          I'm Usairam Saeed &#128075;
        </motion.h3>

        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-4 text-center max-w-3xl mx-auto h-32"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {displayedText}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <a href="/docs/Usairam Saeed.pdf" className="inline-flex items-center hover:bg-opacity-70 text-white py-2 px-6 border border-zinc-400 transition duration-300 hover:bg-white hover:text-black" target="_blank" rel="noopener noreferrer">
            <FaFileDownload className="mr-2" />
            Download Resume
          </a>
        </motion.div>
        <motion.div 
          className="flex mt-8 space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.a 
            href="https://github.com/saymi313" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub className="text-3xl text-white hover:text-gray-300 transition-colors" />
          </motion.a>
          <motion.a 
            href="https://pk.linkedin.com/in/usairam-saeed-148044285" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin className="text-3xl text-white hover:text-gray-300 transition-colors" />
          </motion.a>
          <motion.a 
            href="https://www.instagram.com/saymi.png/" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaInstagram className="text-3xl text-white hover:text-gray-300 transition-colors" />
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;

