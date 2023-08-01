import React, { useEffect } from "react";
import 'swiper/css/navigation';

const ImageSliderTwo = () => {
  useEffect(() => {
    if (typeof window.Swiper !== "undefined") {
      const swiper = new window.Swiper(".swiper-containerrrr", {
        slidesPerView: 4,
        loop: true,
        autoplay: {
          delay: 3000,
        },
        breakpoints: { // <-- Corrected syntax with curly braces
          300: {
            slidesPerView: 1,
          },
          300: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },

        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // Add other Swiper configuration options as needed
      });

    }
  }, []);

  return (
    
    <div className="swiper-containerrrr custom-swiper-container pt-20 pb-20">
      <div className="swiper-wrapper">
        <div className="swiper-slide">   
        <div class="card-card-shadow">  
        <div className="card">
 <div className="card-header">
 <img src="/images/goimage/subone.svg" alt="img 1" width={100} height={100}  />
 </div>
 <div class="card-body">
 <div class="card-description">
 <h2>A NICE SLOGAN GOS HERE</h2>
 <p>Our food is an art form inspired by cultures, dreams, moments and surroundings. 
 <br/><br/>Let us translate your culinary concepts on our canvas to offer a tantalizing and unique concept.</p>
 </div>
 </div>
 </div>
 </div>
        </div>

        <div className="swiper-slide">   
        <div class="card-card-shadow">  
        <div className="card">
 <div className="card-header">
 <img src="/images/goimage/subtwo.svg" alt="img 1" width={100} height={100}  />
 </div>
 <div class="card-body">
 <div class="card-description">
 <h2>A NICE SLOGAN GOS HERE</h2>
 <p>Our food is an art form inspired by cultures, dreams, moments and surroundings. 
 <br/><br/>Let us translate your culinary concepts on our canvas to offer a tantalizing and unique concept.</p>
 </div>
 </div>
 </div>
 </div>
        </div>
        <div className="swiper-slide"> 
        <div class="card-card-shadow">  
        <div className="card">
 <div className="card-header">
 <img src="/images/goimage/subthree.svg" alt="img 1" width={100} height={100}  />
 </div>
 <div class="card-body">
 <div class="card-description">
 <h2>A NICE SLOGAN GOS HERE</h2>
 <p>Our food is an art form inspired by cultures, dreams, moments and surroundings. 
 <br/><br/>Let us translate your culinary concepts on our canvas to offer a tantalizing and unique concept.</p>
 </div>
 </div>
 </div>
 </div>
        </div>
        <div className="swiper-slide">   
        <div class="card-card-shadow">  
        <div className="card">
 <div className="card-header">
 <img src="/images/goimage/subfour.svg" alt="img 1" width={100} height={100}  />
 </div>
 <div class="card-body">
 <div class="card-description">
 <h2>A NICE SLOGAN GOS HERE</h2>
 <p>Our food is an art form inspired by cultures, dreams, moments and surroundings. 
 <br/><br/>Let us translate your culinary concepts on our canvas to offer a tantalizing and unique concept.</p>
 </div>
 </div>
 </div>
 </div>
        </div>


        {/* Add more slides here */}
      </div>
      <div className="container position-relative">
      <div className="swiper-button pb-5 position-relative">
      <div className="swiper-button-prev pb-5">
        <img src="/images/goimage/prev.png" />
      </div>
      <div className="swiper-button-next pb-5">
      <img src="/images/goimage/next.png" />
      </div>
      <div className=" swiper-button-next swiper-button-view pb-5">
 <h4>View All</h4>
      </div>
      </div>
      </div>
    </div>
  );
};

export default ImageSliderTwo;
