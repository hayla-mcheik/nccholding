import React, { useEffect } from "react";
import Image from 'next/legacy/image'
import 'swiper/css/navigation';

const ImageSlider = () => {
  useEffect(() => {
    if (typeof window.Swiper !== "undefined") {
      const swiper = new window.Swiper(".swiper-container", {
    
        loop: true,
        autoplay: false,
        breakpoints: { // <-- Corrected syntax with curly braces
          767: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
          1600: {
            slidesPerView: 5,
          },
          2520: {
            slidesPerView: 7,
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
    
    <div className="swiper-container custom-swiper-container pt-20 pb-20" >
      <div className="swiper-wrapper">
        <div className="swiper-slide">
        <div class="imag-slider-overlay">
          <Image src="/images/goimage/serviceone.png" alt="Image 1" width={500} height={500}  />
          <div class="text-service-center">
          <h2>HOSPITALITY CATERING</h2>
          </div>
          </div>
        </div>
        <div className="swiper-slide">
        <div class="imag-slider-overlay">
          <Image src="/images/goimage/servicetwo.png" alt="Image 1" width={500} height={500}  />
          <div class="text-service-center">
          <h2>HOSPITALITY CATERING</h2>
          </div>
          </div>
        </div>
        <div className="swiper-slide">
        <div class="imag-slider-overlay">
          <Image src="/images/goimage/servicethree.png" alt="Image 1" width={500} height={500}  />
          <div class="text-service-center">
          <h2>HOSPITALITY CATERING</h2>
          </div>
          </div>
        </div>
        <div className="swiper-slide">
        <div class="imag-slider-overlay">
          <Image src="/images/goimage/servicefour.png" alt="Image 1" width={500} height={500}  />
          <div class="text-service-center">
          <h2>HOSPITALITY CATERING</h2>
          </div>
          </div>
        </div>

        <div className="swiper-slide">
        <div class="imag-slider-overlay">
          <Image src="/images/goimage/servicefour.png" alt="Image 1" width={500} height={500}  />
          <div class="text-service-center">
          <h2>HOSPITALITY CATERING</h2>
          </div>
          </div>
        </div>


        <div className="swiper-slide">
        <div class="imag-slider-overlay">
          <Image src="/images/goimage/servicefour.png" alt="Image 1" width={500} height={500}  />
          <div class="text-service-center">
          <h2>HOSPITALITY CATERING</h2>
          </div>
          </div>
        </div>


        <div className="swiper-slide">
        <div class="imag-slider-overlay">
          <Image src="/images/goimage/servicefour.png" alt="Image 1" width={500} height={500}  />
          <div class="text-service-center">
          <h2>HOSPITALITY CATERING</h2>
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

export default ImageSlider;
