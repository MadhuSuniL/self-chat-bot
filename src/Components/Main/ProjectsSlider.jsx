import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import 'swiper/swiper-bundle.css';
import Images from '../../assets/projects/Images';

 const projects = [
    {
      title: "Project Management Software",
      img: Images.PMS,
      company: "TechFnatic"
    },
    {
      title: "Point Of Sale Pro",
      img: Images.POS2,
      company: "TechFnatic"
    },
    {
      title: "Ux9 Site & Admin Panel",
      img: Images.UX9,
      company: "TechFnatic"
    },
    {
      title: "Point of Sale System",
      img: Images.POS,
      company: "TechFnatic"
    },
    {
      title: "Customer/Lead Management Software",
      img: Images.CRM,
      company: "TechFnatic"
    },
    {
      title: "Simmi Foundation Site",
      img: Images.SIMMI,
      company: "Simmi Foundation Organization"
    },
    {
      title: "AI Mock Interview Simulator",
      img: Images.AIMOCK,
      company: "Self"
    }
  ];

const ProjectsSlider = () => {
 
  const [autoPlay, setAutoPlay] = React.useState(true);

  return (
    <div>
      <div className='pt-10 md:hidden lg:hidden'>
          <Swiper
        modules={[Pagination, Autoplay, Mousewheel ]}
        autoplay = {autoPlay ? {delay: 2500} : {delay: 1112500}}
        spaceBetween={30}
        mousewheel
        slidesPerView={1}
        style={{padding: '50px'}}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <ProjectCard project={project} setAutoPlay={setAutoPlay} />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      <div className='pt-10 hidden md:block lg:hidden'>
          <Swiper
        modules={[Pagination, Autoplay, Mousewheel ]}
        autoplay = {autoPlay ? {delay: 2500} : {delay: 1112500}}
        spaceBetween={30}
        mousewheel
        slidesPerView={2}
        style={{padding: '50px'}}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <ProjectCard project={project} setAutoPlay={setAutoPlay} />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      <div className='pt-10 hidden lg:block'>
          <Swiper
        modules={[Pagination, Autoplay, Mousewheel ]}
        autoplay = {autoPlay ? {delay: 2500} : {delay: 1112500}}
        spaceBetween={30}
        mousewheel
        slidesPerView={3}
        style={{padding: '50px'}}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <ProjectCard project={project} setAutoPlay={setAutoPlay} />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>

    </div>
  );
};

export default ProjectsSlider;


const ProjectCard = ({ project, setAutoPlay }) => {
    return (
      <div onMouseOver={()=> setAutoPlay(false)}
      onMouseOut={()=> setAutoPlay(true)}
       className="shadow-lg shadow-gray-500 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <div className="relative">
          <img src={project.img} alt={project.title} className="w-full h-96 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-700 via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-xl font-semibold" style={{fontFamily: 'monospace'}}>{project.title}</h2>
            <p className="text-sm my-1">{project.company}</p>
          </div>
        </div>
      </div>
    );
  };
  