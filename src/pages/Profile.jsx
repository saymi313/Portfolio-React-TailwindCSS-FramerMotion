import { motion } from 'framer-motion';
import Breadcrumbs from '../components/common/Breadcrumbs';
import ProfileInfo from '../components/Profile/ProfileInfo';
import Education from '../components/Profile/Education';
import Background from '../components/Profile/Background';
import SocialLinks from '../components/Profile/SocialLinks';

const Profile = () => {
  return (
    <motion.div 
      className="min-h-screen flex flex-col  px-4 pt-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Breadcrumbs items={[{ label: 'Profile', path: '/profile' }]} />
      <motion.h1 
        className="text-white lg:text-4xl sm:text-2xl font-bold mt-4 lg:mt-6 mx-[11%]"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Personal Profile:
      </motion.h1>
      
      <motion.div 
        className="border-white flex-grow w-full sm:w-[90%] lg:w-[80%] mx-auto my-4 p-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-shrink-0 w-[180px] h-[180px] bg-gray-800">
            <img src="/images/black.jpeg" alt="Profile" className="w-full h-full object-cover rounded-lg" />
          </div>
          <ProfileInfo 
            name="Usairam Saeed"
            description="Full Stack Developer and undergraduate student of Pakistan's top CS University, I am proficient in the MERN stack (MongoDB, Express.js, React.js, Node.js), SQL databases, and modern UI/UX design with Figma. I bring experience with Docker, Linux, Git workflows, and CI/CD using GitHub Actions, along with solid problem-solving skills in Data Structures & Algorithms (DSA). I build scalable, responsive web applications with clean, maintainable code"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <Education />
          <Background />
        </div>

        <SocialLinks />
      </motion.div>
    </motion.div>
  );
};

export default Profile;

