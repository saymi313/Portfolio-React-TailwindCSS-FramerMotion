import { motion } from 'framer-motion';
import Breadcrumbs from '../components/common/Breadcrumbs';
import ProjectCard from '../components/Projects/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Walkeezy E-commerce Website",
      stack: "Stack: React JS, Tailwind CSS",
      description: "An intuitive and responsive e-commerce platform developed using React JS. This project focuses on providing a seamless shopping experience with features such as product browsing, cart management, and secure checkout. It also integrates with payment gateways for easy transactions.",
      icon: "/images/react.svg"
    },
    {
      title: "FAST Event Management System",
      stack: "Stack: Java, JavaFX, MySQL",
      description: "A comprehensive event management system designed to streamline the process of organizing and managing events. Developed using Java and JavaFX for the desktop application, and MySQL for the database. The system includes features for event scheduling, participant registration, and real-time updates.",
      icon: "/images/java.png"
    },
    {
      title: "DASAEH+",
      stack: "Stack: Flutter, Dart",
      description: "DASAEH+ is a dynamic medical mobile application built with Flutter and Dart. It offers modern solutions to different health issues, user interface and a range of medical features aimed at enhancing user experience. The app provides functionalities such as user authentication, data synchronization, and interactive user interfaces.",
      icon: "/images/flutter.svg"
    },
    {
      title: "Console-based Instagram",
      stack: "Stack: C++, Binary File Handling",
      description: "A console-based application mimicking Instagram's core functionalities using C++. The project focuses on binary file handling for data storage and retrieval. It includes features like user account management, photo uploading, and basic social interactions.",
      icon: "/images/c++.svg"
    },
  ];

  return (
    <motion.section 
      className="text-white py-10 relative pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Breadcrumbs items={[{ label: 'Projects', path: '/projects' }]} />
      <motion.div 
        className="text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-5xl font-bold mb-10">Projects</h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 md:px-20"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Projects;

