import React, { useEffect } from "react";
import 'swiper/css/navigation';
import Link from 'next/link'
const ImageSliderFour = () => {
  useEffect(() => {
    if (typeof window.Swiper !== "undefined") {
      const swiper = new window.Swiper(".swiper-containerr", {
        loop: true,
        autoplay: {
          delay: 3000,
        },
        breakpoints: { // <-- Corrected syntax with curly braces
          290: {
            slidesPerView: 1,
          },
          767: {
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
          nextEl: '.swiper-button-nexttwo',
          prevEl: '.swiper-button-prevtwo',
        },
        // Add other Swiper configuration options as needed
      });
    }
  }, []);

  return (
    
    <div className="swiper-containerr custom-swiper-container pt-20 pb-20">
      <div className="swiper-wrapper">
        <div className="swiper-slide">   
        <div class="card-card-shadow">  
        <div className="card">
 <div className="card-header card-header-latest">
 <Link href="/team">
 <img src="/images/goimage/latest-news.png" alt="img 1" className="img-fluid" />
 </Link>
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
 <div className="card-header card-header-latest">
 <Link href="/team">
 <img src="/images/goimage/latest-news.png" alt="img 1" className="img-fluid" />
 </Link>
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
 <div className="card-header card-header-latest">
 <Link href="/team">
 <img src="/images/goimage/latest-news.png" alt="img 1" className="img-fluid" />
 </Link>
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
 <div className="card-header card-header-latest">
 <Link href="/team">
 <img src="/images/goimage/latest-news.png" alt="img 1" className="img-fluid" />
 </Link>
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
 <div className="card-header card-header-latest">
 <Link href="/team">
 <img src="/images/goimage/latest-news.png" alt="img 1" className="img-fluid" />
 </Link>
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
 <div className="card-header card-header-latest">
 <Link href="/team">
 <img src="/images/goimage/latest-news.png" alt="img 1" className="img-fluid" />
 </Link>
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
 <div className="card-header card-header-latest">
 <Link href="/team">
 <img src="/images/goimage/latest-news.png" alt="img 1" className="img-fluid" />
 </Link>
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
 <Link href="/team">
 <img src="/images/goimage/latest-news.png" alt="img 1" className="img-fluid" />
 </Link>
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
 <Link href="/team">
 <img src="/images/goimage/latest-news.png" alt="img 1" className="img-fluid" />
 </Link>
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
 <Link href="/team">
 <img src="/images/goimage/latest-news.png" alt="img 1" className="img-fluid"  />
 </Link>
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
      <div className="swiper-button-prev swiper-button-prevtwo pb-5">
        <img src="/images/goimage/prev.png" />
      </div>
      <div className="swiper-button-next swiper-button-nexttwo pb-5">
      <img src="/images/goimage/next.png" />
      </div>
      <div className=" swiper-button-next swiper-button-view pb-5">
      <Link href="/news">
 <h4>View All</h4>
 </Link>
      </div>
      </div>
      </div>
    </div>
  );
};

export default ImageSliderFour;
