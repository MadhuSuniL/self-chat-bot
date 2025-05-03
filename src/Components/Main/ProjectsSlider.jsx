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
    title: "AI Agents with LLMs",
    img: Images.AI_AGENTS,
    company: "DTSkill",
    category: "generative_ai"
  },
  {
    title: "GPT Suite Like ChatGPT",
    img: Images.GPT_SUITE,
    company: "DTSkill",
    category: "generative_ai"
  },
  {
    title: "CustomGPTs",
    img: Images.CUSTOM_GPT,
    company: "DTSkill",
    category: "generative_ai"
  },
  {
    title: "Persona Builder with Prompt Templates",
    img: Images.PERSONA_BUILDER,
    company: "DTSkill",
    category: "generative_ai"
  },
  {
    title: "Project Management Software",
    img: Images.PMS,
    company: "TechFnatic",
    category: "fullstack"
  },
  {
    title: "Customer/Lead Management Software",
    img: Images.CRM,
    company: "TechFnatic",
    category: "fullstack"
  },
  {
    title: "User Management System & Controller",
    img: Images.USER_MANAGEMENT,
    company: "DTSkill",
    category: "backend"
  },
  {
    title: "Credit Card Fraud Detection",
    img: Images.CC_FRAUD,
    company: "Personal Project",
    category: "machine_learning"
  },
  {
    title: "Dynamic Pricing for Ride Sharing",
    img: Images.DYNAMIC_PRICING,
    company: "Personal Project",
    category: "machine_learning"
  },
  {
    title: "Resume Parser",
    img: Images.RESUME_PARSER,
    company: "Personal Project",
    category: "generative_ai"
  },
  {
    title: "Face Mask Detection",
    img: Images.FACE_MASK,
    company: "Personal Project",
    category: "deep_learning"
  },
  {
    title: "Visual Search Engine",
    img: Images.VISUAL_SEARCH,
    company: "Personal Project",
    category: "deep_learning"
  },
  {
    title: "Chatbot with Seq2Seq Model",
    img: Images.SEQ2SEQ_CHATBOT,
    company: "Personal Project",
    category: "deep_learning"
  },
  {
    title: "Text to Image Generation",
    img: Images.TEXT_TO_IMAGE,
    company: "Personal Project",
    category: "deep_learning"
  },
  {
    title: "Speech Emotion Recognition",
    img: Images.SPEECH_EMOTION,
    company: "Personal Project",
    category: "deep_learning"
  }
];



const ProjectsSlider = () => {

  const [autoPlay, setAutoPlay] = React.useState(true);

  return (
    <div>
      <div className='pt-10 md:hidden lg:hidden'>
        <Swiper
          modules={[Pagination, Autoplay, Mousewheel]}
          autoplay={autoPlay ? { delay: 2500 } : { delay: 1112500 }}
          spaceBetween={30}
          mousewheel
          slidesPerView={1}
          style={{ padding: '50px' }}
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
          modules={[Pagination, Autoplay, Mousewheel]}
          autoplay={autoPlay ? { delay: 2500 } : { delay: 1112500 }}
          spaceBetween={30}
          mousewheel
          slidesPerView={2}
          style={{ padding: '50px' }}
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
          modules={[Pagination, Autoplay, Mousewheel]}
          autoplay={autoPlay ? { delay: 2500 } : { delay: 1112500 }}
          spaceBetween={30}
          mousewheel
          slidesPerView={3}
          style={{ padding: '50px' }}
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
    <div
      onMouseOver={() => setAutoPlay(false)}
      onMouseOut={() => setAutoPlay(true)}
      className="shadow-lg shadow-gray-500 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
    >
      <div className="relative">
        {/* Project Image */}
        <img src={project.img} alt={project.title} className="w-full h-96 object-cover" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-700 via-transparent to-transparent"></div>

        {/* Project Title and Company */}
        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-xl font-semibold" style={{ fontFamily: 'monospace' }}>
            {project.title}
          </h2>
          <p className="text-sm my-1">{project.company}</p>

          {/* Category Tag */}
          <span
            className={`text-xs rounded-full py-1 px-3 mt-2 ${getCategoryColor(project.category)}`}
          >
            {project.category.replace("_", " ").toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  );
};

// Helper function to determine category gradient
const getCategoryColor = (category) => {
  switch (category) {
    case 'generative_ai':
      return 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600';
    case 'machine_learning':
      return 'bg-gradient-to-r from-green-400 via-green-500 to-green-600';
    case 'deep_learning':
      return 'bg-gradient-to-r from-red-400 via-red-500 to-red-600';
    case 'fullstack':
      return 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600';
    default:
      return 'bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600';
  }
};

