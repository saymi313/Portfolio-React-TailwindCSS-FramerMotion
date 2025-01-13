const ProjectCard = ({ title, stack, description, icon }) => (
    <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-lg p-6 shadow-2xl transition-transform duration-300 hover:scale-105">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="hidden md:block">
          <img src={icon} alt="Icon" className="w-96 h-20" />
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold text-white">{title}</h3>
          <p className="text-lg text-zinc-400">{stack}</p>
          <p className="mt-2 text-sm text-zinc-400">{description}</p>
          <div className="mt-4 flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-zinc-900 hover:bg-zinc-700 text-white py-1 px-3 rounded-lg border border-zinc-400 transition duration-200 text-sm md:text-base">
              Live demo
            </button>
            <button className="bg-zinc-900 hover:bg-zinc-700 text-white py-1 px-3 rounded-lg border border-zinc-400 transition duration-200 text-sm md:text-base">
              GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  
  export default ProjectCard;
  
  