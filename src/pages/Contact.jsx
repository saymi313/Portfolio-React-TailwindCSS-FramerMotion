import { motion } from 'framer-motion';
import Breadcrumbs from '../components/common/Breadcrumbs';
import ContactForm from '../components/Contact/ContactForm';

const Contact = () => {
  return (
    <motion.div 
      className="relative min-h-screen flex flex-col lg:flex-row bg-cover bg-center pt-30"
    
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div className="fixed top-24 left-4 z-10">
        <Breadcrumbs items={[{ label: 'Contact', path: '/contact' }]} />
      </div>

      <motion.div 
        className="flex-1 flex-col items-center justify-center text-white p-8 lg:w-1/2 lg:items-start lg:justify-start lg:p-16 pt-10"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div>
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio!</h1>
          <p className="text-lg">I'm here to assist you. Please reach out if you have any questions or need support.</p>
        </div>
        <div className="svg">
          <img src="/images/Mention-bro.svg" alt="img" className="w-3/4 h-3/4" />
        </div>
      </motion.div>

      <motion.div 
        className="flex-1 flex items-center justify-center lg:justify-end lg:pr-16 mt-2 mb-12"
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <ContactForm />
      </motion.div>
    </motion.div>
  );
};

export default Contact;

