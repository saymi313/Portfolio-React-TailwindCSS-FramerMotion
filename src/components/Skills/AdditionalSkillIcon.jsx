const AdditionalSkillIcon = ({ src, alt, name }) => (
    <div className="relative bg-black p-4 rounded-lg shadow-xl flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:border-zinc-400 border-2 border-transparent cursor-pointer overflow-hidden">
      <img src={src} alt={alt} className="w-12 h-12" />
      <div className="absolute inset-0 flex flex-col items-center justify-end p-2 text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
        <span className="text-xs">{name}</span>
      </div>
    </div>
  );
  
  export default AdditionalSkillIcon;
  
  