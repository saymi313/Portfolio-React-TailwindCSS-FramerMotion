import { motion } from 'framer-motion';

const ProjectCard = ({ title, stack, description, icon, figmaLink, liveDemo, github }) => (
  <motion.div
    className="bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-lg p-6 shadow-2xl  border-zinc-950 border-2"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    whileHover={{
      scale: 1.05,
      transition: { type: 'spring', stiffness: 300, damping: 20 }
    }}
  >
    <div className="flex flex-col items-start gap-6">
      <div className="w-full flex justify-center mb-4">
        <img src={icon} alt="Icon" className="w-20 h-20 object-contain" />
      </div>
      <div className="w-full">
        <h3 className="text-left text-2xl font-semibold text-white">{title}</h3>
        <p className="text-left text-lg text-zinc-400">Stack: {stack}</p>
        <p className="text-left mt-2 text-sm text-zinc-400">{description}</p>
        <div className="mt-4 flex flex-wrap justify-center items-center gap-4">
          {figmaLink && (
            <a
              href={figmaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="justify-center items-center bg-zinc-800 hover:bg-zinc-700 text-white py-1 px-3 rounded-lg border border-zinc-600 transition duration-200 text-sm"
            >
              View in Figma
            </a>
          )}
          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-800 hover:bg-zinc-700 text-white py-1 px-3 rounded-lg border border-zinc-600 transition duration-200 text-sm"
            >
              Live Demo
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-800 hover:bg-zinc-700 text-white py-1 px-3 rounded-lg border border-zinc-600 transition duration-200 text-sm"
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
