const SkillIcon = ({ src, alt, name }) => (
    <div className="relative bg-black p-4 rounded-lg shadow-xl flex items-center justify-center h-32 transition-transform duration-300 hover:scale-110 hover:border-zinc-400 border-2 border-transparent cursor-pointer overflow-hidden">
      <img src={src} alt={alt} className="w-16 h-16" />
      <div className="absolute inset-0 flex flex-col items-center justify-end p-2 text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
        <span className="text-sm">{name}</span>
      </div>
    </div>
  );
  
  export default SkillIcon;
  
  