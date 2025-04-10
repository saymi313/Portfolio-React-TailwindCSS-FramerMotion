const Background = () => (
    <div className="flex-grow h-auto rounded-lg border-[1px] border-white p-3 bg-gradient-to-r from-zinc-800 to-zinc-900 overflow-clip">
      <h3 className="text-white text-xl font-bold">Personal Background:</h3>
      <p className="text-gray-400">I am currently living in G11/2 Islamabad but basically I am from Mansehra, KPK Pakistan</p>
      <ul className="px-5 list-decimal text-gray-400 ">
        <li>Campus Ambassador <strong className="text-zinc-300">Devsinc</strong></li>
        <li> Campus Lead <strong className="text-zinc-300">Metrix Pakistan</strong></li>
        <li> ETEA Gold Medalist</li>
        {/* <li>FAST VOLLEYBALL Team player</li>
        <li>Vice Head Photography FAST PRODUCTION SOCIETY</li> */}
      </ul>
    </div>
  );
  
  export default Background;
  
  