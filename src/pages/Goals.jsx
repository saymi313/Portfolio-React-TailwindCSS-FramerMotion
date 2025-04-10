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
              description="As a dedicated Full Stack Developer, I aim to deepen my expertise in modern web technologies by advancing my skills in front-end frameworks like React and mastering back-end solutions. I plan to achieve this through hands-on projects, targeted certifications, active contributions to open-source initiatives, and by participating in and winning hackathons to sharpen my problem-solving and collaboration skills."
            />
            <GoalCard 
              title="Long-Term Goals"
              description="I want to lead projects that combine AI Engineering and software development to build smart and reliable solutions. My goal is to become a lead software engineer, mentor aspiring developers, and contribute to improving Pakistan's tech industry. I aim to help create a strong tech community that encourages innovation and growth in the technology sector."
            />
            <GoalCard 
  title="Motivational Quote"
  description={
    <div 
      dangerouslySetInnerHTML={{
        __html: `“Success is not final, failure is not fatal: It is the courage to continue that counts.” – <strong class="text-zinc-300">Winston Churchill</strong><br />
          This quote resonates with my journey as a Full Stack Developer. As I continue to improve my skills and pursue my goals, I believe that perseverance and continuous learning will drive me toward success. The challenges along the way are just stepping stones to greater achievements in both software development and in contributing to the growth of Pakistan's tech industry.`
      }}
    />
  }
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
