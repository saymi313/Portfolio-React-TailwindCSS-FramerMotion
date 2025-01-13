import { motion } from 'framer-motion';
import Breadcrumbs from '../components/common/Breadcrumbs';
import GoalCard from '../components/Goals/GoalCard';

const Goals = () => {
  return (
    <motion.div 
      className="bg-gradient-to-b  min-h-screen flex flex-col relative pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Breadcrumbs items={[{ label: 'Goals', path: '/goals' }]} />
   
      <motion.div 
        className="flex justify-center items-center mt-4 w-full px-4 sm:px-0 "
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-center text-3xl md:text-5xl font-bold text-white">My Goals</h2>
      </motion.div>

      <motion.section 
        className="text-center py-10 w-full mt-8 md:mt-12 px-4 sm:px-0"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2 sm:px-10">
            <GoalCard 
              title="Short-Term Goals"
              description="Enhance my expertise in React and Flutter through advanced projects and certifications. Collaborate on innovative software solutions and contribute to open-source initiatives."
            />
            <GoalCard 
              title="Long-Term Goals"
              description="Become a lead software engineer and mentor aspiring developers. Drive impactful projects that blend technology and design to create seamless user experiences. Establish a tech community to foster innovation."
            />
            <GoalCard 
              title="Motivational Quote"
              description="The future belongs to those who believe in the beauty of their dreams – Eleanor Roosevelt"
            />
          </div>
        </div>
      </motion.section>

      <motion.div 
        className="relative bottom-5 w-full flex justify-center text-center px-4 mt-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-xs md:text-xl lg:text-2xl text-white font-semibold leading-relaxed" style={{fontFamily: "'Noto Nastaliq Urdu', serif"}}>
          ارادے جن کے پختہ ہوں نظر جن کی خدا پر ہو <br/><br/>
          تلاطم خیز موجوں سے وہ کبھی گھبرایا نہیں کرتے
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Goals;
