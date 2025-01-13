import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import Breadcrumbs from '../components/common/Breadcrumbs';
import ProjectCard from '../components/Projects/ProjectCard';
import { figmaProjects } from '../data/figma';
import { mernProjects } from '../data/mern';
import { otherProjects } from '../data/others';
import { Pagination } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [page, setPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);
  const projectsPerPage = 4;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const allProjects = [
    ...figmaProjects,
    ...mernProjects,
    ...otherProjects
  ];

  const filteredProjects = filter === 'All' 
    ? allProjects 
    : filter === 'Others'
    ? otherProjects
    : allProjects.filter(project => project.stack.includes(filter));

  const pageCount = Math.ceil(filteredProjects.length / projectsPerPage);
  const currentProjects = filteredProjects.slice(
    (page - 1) * projectsPerPage,
    page * projectsPerPage
  );

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-zinc-800 p-2 rounded-full"
        onClick={() => {
          onClick();
          setPage((prevPage) => Math.max(prevPage - 1, 1));
        }}
        aria-label="Previous project"
      >
        <ChevronLeftIcon className="w-6 h-6 text-white" />
      </button>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-zinc-800 p-2 rounded-full"
        onClick={() => {
          onClick();
          setPage((prevPage) => Math.min(prevPage + 1, filteredProjects.length));
        }}
        aria-label="Next project"
      >
        <ChevronRightIcon className="w-6 h-6 text-white" />
      </button>
    );
  };

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    beforeChange: (current, next) => setPage(next + 1),
  };

  return (
    <motion.section 
      className="text-white py-10 relative pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Breadcrumbs items={[{ label: 'Projects', path: '/projects' }]} />
      <motion.div 
        className="text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-5xl font-bold mb-10">Projects</h2>
        <div className="flex justify-end mb-8 px-10 md:px-20">
          <Menu as="div" className="relative inline-block text-left">
            {({ open }) => (
              <>
                <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-zinc-800 rounded-md hover:bg-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 transition-all duration-200">
                  {filter}
                  <ChevronDownIcon
                    className={`w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100 transition-transform duration-200 ${
                      open ? 'transform rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </Menu.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-zinc-800 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                    <div className="px-1 py-1">
                      {['All', 'Figma', 'MERN', 'Others'].map((item) => (
                        <Menu.Item key={item}>
                          {({ active }) => (
                            <button
                              className={`${
                                active ? 'bg-zinc-700 text-white' : 'text-gray-300'
                              } group flex rounded-md items-center w-full px-2 py-2 text-sm transition-colors duration-150`}
                              onClick={() => {
                                setFilter(item);
                                setPage(1);
                              }}
                            >
                              {item}
                            </button>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
        </div>
        {isMobile ? (
          <div className="px-4 relative z-10">
            <Slider ref={sliderRef} {...sliderSettings}>
              {filteredProjects.map((project, index) => (
                <div key={index} className="px-4 ">
                  <ProjectCard {...project} />
                </div>
              ))}
            </Slider>
            <div className="text-center  text-sm text-gray-400">
              <div className="font-semibold mb-2">
                {page}/{filteredProjects.length}
              </div>
              <div>Swipe or use arrows to navigate projects</div>
            </div>
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 md:px-20"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {currentProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </motion.div>
        )}
        {!isMobile && (
          <div className="mt-16 flex justify-center">
            <Pagination 
              count={pageCount} 
              page={page} 
              onChange={handlePageChange}
              variant="outlined"
              shape="circular"
              size="large"
              sx={{
                '& .MuiPaginationItem-root': {
                  color: '#fff',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  fontWeight: 500,
                  transition: 'all 0.3s ease',
                  margin: '0 4px',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                },
                '& .MuiPaginationItem-page': {
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                '& .Mui-selected': {
                  backgroundColor: '#000',
                  color: '#fff',
                  borderColor: '#fff',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  },
                },
                '& .MuiPaginationItem-ellipsis': {
                  color: 'rgba(255, 255, 255, 0.7)',
                  backgroundColor: 'transparent',
                },
                '& .MuiPaginationItem-previousNext': {
                  border: 'none',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                },
              }}
            />
          </div>
        )}
      </motion.div>
    </motion.section>
  );
};

export default Projects;

