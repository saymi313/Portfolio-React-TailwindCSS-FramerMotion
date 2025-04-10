import { motion } from 'framer-motion';
import Breadcrumbs from '../components/common/Breadcrumbs';
import SkillIcon from '../components/Skills/SkillIcon';
import AdditionalSkillIcon from '../components/Skills/AdditionalSkillIcon';

const Skills = () => {
  const mainSkills = [
    { src: "/images/icons8-html.svg", alt: "HTML5 Icon", name: "HTML5" },
    { src: "/images/icons8-css.svg", alt: "CSS3 Icon", name: "CSS3" },
    { src: "/images/icons8-javascript.svg", alt: "JS Icon", name: "JavaScript" },
    { src: "/images/react.svg", alt: "React Icon", name: "React" },
    { src: "/images/docker.svg", alt: "Docker Icon", name: "Docker" },
    { src: "/images/nodejs-icon.svg", alt: "Node Icon", name: "Node JS" },
    { src: "/images/express.svg", alt: "Express", name: "Express JS" },
  ];

  const additionalSkills = [
    { src: "/images/c++.svg", alt: "C++ Icon", name: "C++" },
    { src: "/images/icons8-tailwind-css.svg", alt: "Tailwind Icon", name: "Tailwind" },
    { src: "/images/icons8-figma.svg", alt: "Figma Icon", name: "Figma" },
    { src: "/images/icons8-mysql.svg", alt: "MySQL Icon", name: "MySQL" },
    { src: "/images/icons8-linux-96.png", alt: "Linux Icon", name: "Linux" },
    { src: "/images/mongo-svgrepo-com.svg", alt: "Mongo Icon", name: "Mongo db" },
    { src: "/images/git.svg", alt: "git Icon", name: "Git" },
    { src: "/images/github.svg", alt: "github Icon", name: "Git Hub" },
    { src: "/images/icons8-bootstrap.svg", alt: "Bootstrap Icon", name: "Bootstrap" },
    { src: "/images/capcut.png", alt: "Capcut Icon", name: "Capcut" },
    { src: "/images/lightroom.svg", alt: "lightroom Icon", name: "Lightroom" },
  ];

  return (
    <motion.div 
      className=" min-h-screen flex items-center justify-center pt-30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div className="fixed top-24 left-4 z-10">
        <Breadcrumbs items={[{ label: 'Skills', path: '/skills' }]} />
      </div>

      <motion.section 
        className="text-center py-10 w-full"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold mb-10 text-white">My Skills</h2>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 px-10"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {mainSkills.map((skill, index) => (
              <SkillIcon key={index} {...skill} />
            ))}
            <div className="bg-zinc-950 p-6 rounded-lg shadow-xl flex flex-col justify-center items-center h-32 transition-transform duration-300 hover:border-zinc-400 border-2 border-transparent cursor-pointer">
              <h3 className="text-4xl font-bold text-white">2</h3>
              <p className="text-lg mt-2 text-zinc-400">Years of Experience</p>
              <button className="mt-4 bg-zinc-900 hover:bg-zinc-700 text-white font-semibold py-2 px-4 rounded-lg border border-zinc-400 hover:scale-110 transition duration-200 text-sm md:text-base">
                <a href="/docs/Usairam Saeed.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
              </button>
            </div>
          </motion.div>

          <motion.div 
            className="flex justify-center items-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="mt-16 mb-8 w-3/4 bg-zinc-900 p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-semibold text-white mb-6">ADDITIONAL SKILLS</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {additionalSkills.map((skill, index) => (
                  <AdditionalSkillIcon key={index} {...skill} />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.section 
            className="flex justify-center items-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex w-3/4 justify-center items-center py-10 bg-black rounded-lg shadow-xl">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6 text-white">My Interests</h2>
                <p className="text-lg text-zinc-400 mb-8">I have a deep interest in exploring emerging technologies, particularly in the fields of Software development, AI and UI/UX design. Outside of tech, I enjoy traveling to scenic spots, capturing moments through photography, and learning about different cultures. My curiosity drives me to continuously seek new challenges and innovative solutions.</p>
              </div>
            </div>
          </motion.section>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Skills;

