const GalleryItem = ({ src, alt, caption }) => (
    <div className="bg-gray-800 h-40 rounded-lg overflow-hidden relative group cursor-pointer">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 w-full bg-gray-900 bg-opacity-70 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <p className="text-sm">{caption}</p>
      </div>
    </div>
  );
  
  export default GalleryItem;
  
  