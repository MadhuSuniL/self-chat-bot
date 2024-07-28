import React from 'react';
import '../assets/style.css'
import '../assets/swiper.min.css'
import Swiper from 'swiper';

const Portfolio = () => {
  React.useEffect(() => {
    new Swiper('.client-swiper', {
      slidesPerView: 3,
      paginationClickable: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      spaceBetween: 60,
      breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 10, pagination: { el: '.swiper-pagination' } },
        480: { slidesPerView: 1, spaceBetween: 20 },
        640: { slidesPerView: 1, spaceBetween: 30 },
      },
    });

    new Swiper('.testimonial-swiper', {
      slidesPerView: 3,
      pagination: { el: '.swiper-pagination', clickable: true },
      spaceBetween: 30,
      grabCursor: true,
      freeMode: true,
      breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 10 },
        480: { slidesPerView: 1, spaceBetween: 10 },
        640: { slidesPerView: 1, spaceBetween: 10 },
      },
    });
  }, []);

  return (
    <div>
      <header className="hero bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-end">
            <nav>
              <div id="menu-toggle" className="cursor-pointer">
                <div className="hamburger">
                  <span className="block w-8 h-1 bg-white mb-1"></span>
                  <span className="block w-8 h-1 bg-white mb-1"></span>
                  <span className="block w-8 h-1 bg-white"></span>
                </div>
                <div className="cross hidden">
                  <span className="block w-8 h-1 bg-white mb-1 transform rotate-45"></span>
                  <span className="block w-8 h-1 bg-white transform -rotate-45"></span>
                </div>
              </div>
              <ul className="main-nav hidden">
                <li><a href="#" className="text-white">Home</a></li>
                <li><a href="#" className="text-white">Portfolio</a></li>
                <li><a href="#" className="text-white">About</a></li>
                <li><a href="#" className="text-white">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div className="hero-text mt-8">
            <h1 className="text-4xl font-bold"><span>Hi, I am</span><br />Maria Ferrero.</h1>
            <h3 className="text-xl">Freelance designer from Melbourne</h3>
            <a href="#" className="btn btn-lg btn-primary mt-4">Know More</a>
            <ul className="social-links flex mt-4">
              <li className="mr-4"><a href="#"><img src="assets/behance.png" alt="Behance" /></a></li>
              <li className="mr-4"><a href="#"><img src="assets/dribbble.png" alt="Dribbble" /></a></li>
              <li className="mr-4"><a href="#"><img src="assets/twitter.png" alt="Twitter" /></a></li>
              <li className="mr-4"><a href="#"><img src="assets/github.png" alt="GitHub" /></a></li>
            </ul>
          </div>
        </div>
      </header>

      <section className="case-study py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h4 className="sub-heading text-purple-500">Exclusively</h4>
            <h1 className="heading text-4xl font-bold"><span className="text-purple-500">works</span> with <br />Startups and founders</h1>
          </div>
          <div className="swiper-container client-swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide client-box">
                <img src="assets/logo-1.png" className="client-logo" alt="Logo 1" />
                <h3 className="text-left title">Visual identity for upsidedown</h3>
                <p className="text-left tag">Branding, UI, Website</p>
                <p className="text-left"><a href="#">Know More &#8594;</a></p>
              </div>
              <div className="swiper-slide client-box">
                <img src="assets/logo-2.png" className="client-logo" alt="Logo 2" />
                <h3 className="text-left title">User Experience design for the AI</h3>
                <p className="text-left tag">Branding, UI, Website</p>
                <p className="text-left"><a href="#">Know More &#8594;</a></p>
              </div>
              <div className="swiper-slide client-box">
                <img src="assets/logo-3.png" className="client-logo" alt="Logo 3" />
                <h3 className="text-left title">Rebranding of the best motion studio</h3>
                <p className="text-left tag">Branding, UI, Website</p>
                <p className="text-left"><a href="#">Know More &#8594;</a></p>
              </div>
            </div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </div>
      </section>

      <section className="testimonial py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h4 className="sub-heading text-pink-500">Happy</h4>
            <h1 className="heading text-4xl font-bold"><span className="text-pink-500">Client's</span> hello <br />testimonials</h1>
          </div>
          <div className="swiper-container testimonial-swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide testimonial-box bg-yellow-200 p-4">
                <h1 className="text-xl font-bold">Pixel Perfect design</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="text-right">
                  <p className="name">- John Doe</p>
                  <p className="designation">Founder, Arrow</p>
                </div>
              </div>
              <div className="swiper-slide testimonial-box bg-purple-200 p-4">
                <h1 className="text-xl font-bold">Minimal and Clean</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="text-right">
                  <p className="name">- Rocky Hych</p>
                  <p className="designation">CTO, Upside Down</p>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>

      <section className="stats py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-around">
            <div className="text-center stat-box">
              <h1 className="text-4xl font-bold text-purple-500"><span className="counter">3.2</span>k</h1>
              <h3>Hours</h3>
            </div>
            <div className="text-center stat-box">
              <h1 className="text-4xl font-bold text-blue-500 counter">217</h1>
              <h3>Projects</h3>
            </div>
            <div className="text-center stat-box">
              <h1 className="text-4xl font-bold text-pink-500"><span className="counter">18.3</span>k</h1>
              <h3>Cups of Coffee</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-banner py-16 bg-blue-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h1>Let’s talk about your product</h1>
          <a href="#" className="btn btn-lg btn-primary mt-4">Get in touch now</a>
        </div>
      </section>

      <footer className="py-8 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1>Maria<br /><span className="text-purple-500">Ferrero</span></h1>
          <ul className="social-links flex justify-center mt-4">
            <li className="mr-4"><a href="#"><img src="assets/behance.png" alt="Behance" /></a></li>
            <li className="mr-4"><a href="#"><img src="assets/dribbble.png" alt="Dribbble" /></a></li>
            <li className="mr-4"><a href="#"><img src="assets/twitter.png" alt="Twitter" /></a></li>
            <li className="mr-4"><a href="#"><img src="assets/github.png" alt="GitHub" /></a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
