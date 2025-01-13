import { motion } from 'framer-motion';

const ProjectCard = ({ title, stack, description, icon, figmaLink, liveDemo, github }) => (
  <motion.div
    className="bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-lg p-6 shadow-2xl"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    whileHover={{
      scale: 1.05,
      transition: { type: 'spring', stiffness: 300, damping: 20 } // Smooth transition on hover
    }}
  >
    <div className="flex flex-col md:flex-row items-center gap-6">
      <div className="hidden md:block">
        <img src={icon} alt="Icon" className="w-96 h-20" />
      </div>
      <div className="text-center md:text-left">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="text-lg text-zinc-400">{stack}</p>
        <p className="mt-2 text-sm text-zinc-400">{description}</p>
        <div className="mt-4 flex flex-col md:flex-row justify-center gap-4">
          {figmaLink && (
            <a
              href={figmaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900 hover:bg-zinc-700 text-white py-1 px-3 rounded-lg border border-zinc-400 transition duration-200 text-sm md:text-base"
            >
              View in Figma
            </a>
          )}
          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900 hover:bg-zinc-700 text-white py-1 px-3 rounded-lg border border-zinc-400 transition duration-200 text-sm md:text-base"
            >
              Live Demo
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900 hover:bg-zinc-700 text-white py-1 px-3 rounded-lg border border-zinc-400 transition duration-200 text-sm md:text-base"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

export default ProjectCard;
