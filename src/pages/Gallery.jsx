import { motion } from 'framer-motion';
import Breadcrumbs from '../components/common/Breadcrumbs';
import GalleryItem from '../components/Gallery/GalleryItem';

const Gallery = () => {
  const galleryItems = [
    { src: "/images/fav.jpeg", alt: "Gallery Image 1", caption: "Favorite Photo" },
    { src: "/images/prize.jpeg", alt: "Gallery Image 2", caption: "Gold Medal" },
    { src: "/images/volleyball.jpeg", alt: "Gallery Image 3", caption: "Volleyball Team" },
    { src: "/images/metrix.jpeg", alt: "Gallery Image 4", caption: "Metrix Summit" },
    { src: "/images/nascon.jpeg", alt: "Gallery Image 5", caption: "NASCON'24" },
    { src: "/images/workout.jpeg", alt: "Gallery Image 6", caption: "Hobby: Workout" },
    { src: "/images/color.jpeg", alt: "Gallery Image 7", caption: "Hobby: Color Grading" },
    { src: "/images/swim.jpeg", alt: "Gallery Image 8", caption: "Hobby: Swimming" },
  ];

  return (
    <motion.div 
      className="min-h-screen flex flex-col px-4 pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Breadcrumbs items={[{ label: 'Gallery', path: '/gallery' }]} />
      <motion.h1 
        className="text-white lg:text-3xl sm:text-2xl font-bold mt-4 lg:mt-6 mx-auto"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Gallery
      </motion.h1>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10 mx-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {galleryItems.map((item, index) => (
          <GalleryItem key={index} {...item} />
        ))}
        
      </motion.div>
    </motion.div>
  );
};

export default Gallery;

