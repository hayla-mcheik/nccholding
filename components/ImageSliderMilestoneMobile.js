import React, { useEffect } from "react";
import 'swiper/css/navigation';
import Link from 'next/link'
const ImageSliderMilestoneMobile = () => {
  useEffect(() => {
    if (typeof window.Swiper !== "undefined") {
      const swiper = new window.Swiper(".swiper-containerrrrrr", {
        loop: true,
        autoplay: {
          delay: 3000,
        },
        breakpoints: { // <-- Corrected syntax with curly braces
          290: {
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
          nextEl: '.swiper-button-nexttt',
          prevEl: '.swiper-button-prevvv',
        },
        // Add other Swiper configuration options as needed
      });

    }
  }, []);

  return (
    
    <div className="swiper-containerrrrrr custom-swiper-container pt-20 pb-20">
      <div className="swiper-wrapper">
        <div className="swiper-slide px-md-0 mx-md-0">   
        <div class="card-card-shadow milestone-m-0">  
        <div className="card">
 <div className="card-header card-milestone">
<h2 className="color-green">1995</h2>
 </div>
 <div class="card-body card-body-milestone">
 <div class="card-description card-milestone-desc">
 <h2>NATIONAL CATERING COMPANY</h2>
<p>Established to develop the contract creating market whilst Abela concentrates on Food retail concepts</p>
 </div>
 </div>
 </div>
 </div>
        </div>

        <div className="swiper-slide px-md-0 mx-md-0">   
        <div class="card-card-shadow milestone-m-0">  
        <div className="card">
 <div className="card-header card-milestone">
<h2 className="color-green">2003</h2>
 </div>
 <div class="card-body card-body-milestone">
 <div class="card-description card-milestone-desc">
 <h2>NATIONAL CATERING COMPANY</h2>
<p>Established to develop the contract creating market whilst Abela concentrates on Food retail concepts</p>
 </div>
 </div>
 </div>
 </div>
        </div>
        <div className="swiper-slide px-md-0 mx-md-0">   
        <div class="card-card-shadow milestone-m-0">  
        <div className="card">
 <div className="card-header card-milestone">
<h2 className="color-green">2006</h2>
 </div>
 <div class="card-body card-body-milestone">
 <div class="card-description card-milestone-desc">
 <h2>NATIONAL CATERING COMPANY</h2>
<p>Established to develop the contract creating market whilst Abela concentrates on Food retail concepts</p>
 </div>
 </div>
 </div>
 </div>
        </div>
        <div className="swiper-slide px-md-0 mx-md-0">   
        <div class="card-card-shadow milestone-m-0">  
        <div className="card">
 <div className="card-header card-milestone">
<h2 className="color-green">2009</h2>
 </div>
 <div class="card-body card-body-milestone">
 <div class="card-description card-milestone-desc">
 <h2>NATIONAL CATERING COMPANY</h2>
<p>Established to develop the contract creating market whilst Abela concentrates on Food retail concepts</p>
 </div>
 </div>
 </div>
 </div>
        </div>
        <div className="swiper-slide px-md-0 mx-md-0">   
        <div class="card-card-shadow milestone-m-0">  
        <div className="card">
 <div className="card-header card-milestone">
<h2 className="color-green">2010</h2>
 </div>
 <div class="card-body card-body-milestone">
 <div class="card-description card-milestone-desc">
 <h2>NATIONAL CATERING COMPANY</h2>
<p>Established to develop the contract creating market whilst Abela concentrates on Food retail concepts</p>
 </div>
 </div>
 </div>
 </div>
        </div>
        <div className="swiper-slide px-md-0 mx-md-0">   
        <div class="card-card-shadow milestone-m-0">  
        <div className="card">
 <div className="card-header card-milestone">
<h2 className="color-green">2010</h2>
 </div>
 <div class="card-body card-body-milestone">
 <div class="card-description card-milestone-desc">
 <h2>NATIONAL CATERING COMPANY</h2>
<p>Established to develop the contract creating market whilst Abela concentrates on Food retail concepts</p>
 </div>
 </div>
 </div>
 </div>
        </div>

        <div className="swiper-slide px-md-0 mx-md-0">   
        <div class="card-card-shadow milestone-m-0">  
        <div className="card">
 <div className="card-header card-milestone">
<h2 className="color-green">2010</h2>
 </div>
 <div class="card-body card-body-milestone">
 <div class="card-description card-milestone-desc">
 <h2>NATIONAL CATERING COMPANY</h2>
<p>Established to develop the contract creating market whilst Abela concentrates on Food retail concepts</p>
 </div>
 </div>
 </div>
 </div>
        </div>
        <div className="swiper-slide px-md-0 mx-md-0">   
        <div class="card-card-shadow milestone-m-0">  
        <div className="card">
 <div className="card-header card-milestone">
<h2 className="color-green">2010</h2>
 </div>
 <div class="card-body card-body-milestone">
 <div class="card-description card-milestone-desc">
 <h2>NATIONAL CATERING COMPANY</h2>
<p>Established to develop the contract creating market whilst Abela concentrates on Food retail concepts</p>
 </div>
 </div>
 </div>
 </div>
        </div>
        <div className="swiper-slide px-md-0 mx-md-0">   
        <div class="card-card-shadow milestone-m-0">  
        <div className="card">
 <div className="card-header card-milestone">
<h2 className="color-green">2010</h2>
 </div>
 <div class="card-body card-body-milestone">
 <div class="card-description card-milestone-desc">
 <h2>NATIONAL CATERING COMPANY</h2>
<p>Established to develop the contract creating market whilst Abela concentrates on Food retail concepts</p>
 </div>
 </div>
 </div>
 </div>
        </div>
        <div className="swiper-slide px-md-0 mx-md-0">   
        <div class="card-card-shadow milestone-m-0">  
        <div className="card">
 <div className="card-header card-milestone">
<h2 className="color-green">2010</h2>
 </div>
 <div class="card-body card-body-milestone">
 <div class="card-description card-milestone-desc">
 <h2>NATIONAL CATERING COMPANY</h2>
<p>Established to develop the contract creating market whilst Abela concentrates on Food retail concepts</p>
 </div>
 </div>
 </div>
 </div>
        </div>
        <div className="swiper-slide px-md-0 mx-md-0">   
        <div class="card-card-shadow milestone-m-0">  
        <div className="card">
 <div className="card-header card-milestone">
<h2 className="color-green">2010</h2>
 </div>
 <div class="card-body card-body-milestone">
 <div class="card-description card-milestone-desc">
 <h2>NATIONAL CATERING COMPANY</h2>
<p>Established to develop the contract creating market whilst Abela concentrates on Food retail concepts</p>
 </div>
 </div>
 </div>
 </div>
        </div>
        <div className="swiper-slide px-md-0 mx-md-0">   
        <div class="card-card-shadow milestone-m-0">  
        <div className="card">
 <div className="card-header card-milestone">
<h2 className="color-green">2010</h2>
 </div>
 <div class="card-body card-body-milestone">
 <div class="card-description card-milestone-desc">
 <h2>NATIONAL CATERING COMPANY</h2>
<p>Established to develop the contract creating market whilst Abela concentrates on Food retail concepts</p>
 </div>
 </div>
 </div>
 </div>
        </div>


        {/* Add more slides here */}
      </div>
      <div className="container position-relative">
      <div className="swiper-button pb-5 position-relative">
      <div className="swiper-button-prev swiper-button-prevvv pb-5">
        <img src="/images/goimage/prev.png" />
      </div>
      <div className="swiper-button-next swiper-button-nexttt pb-5">
      <img src="/images/goimage/next.png" />
      </div>
      <div className=" swiper-button-next swiper-button-view pb-5">

      </div>
      </div>
      </div>
    </div>
  );
};

export default ImageSliderMilestoneMobile;
