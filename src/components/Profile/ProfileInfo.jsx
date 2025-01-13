const ProfileInfo = ({ name, description }) => (
    <div className="flex-grow bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-lg border-[1px] border-white p-3">
      <h3 className="text-white text-xl font-bold">{name}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
  
  export default ProfileInfo;
  
  