const GoalCard = ({ title, description }) => (
    <div className="bg-gradient-to-b from-zinc-800 to-zinc-950 p-4 sm:p-6 rounded-lg shadow-xl flex flex-col items-center border-2 border-black transition-transform duration-300 hover:scale-105 hover:border-zinc-400">
      <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2 sm:mb-4">{title}</h3>
      <p className="text-sm md:text-lg text-zinc-400 text-center">{description}</p>
    </div>
  );
  
  export default GoalCard;
  
  