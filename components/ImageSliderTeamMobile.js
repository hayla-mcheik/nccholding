import React, { useEffect } from "react";
import 'swiper/css/navigation';
import Link from 'next/link'
const ImageSliderTeamMobile = () => {
  useEffect(() => {
    if (typeof window.Swiper !== "undefined") {
      const swiper = new window.Swiper(".swiper-containerrrrrrr", {
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
          2000: {
            slidesPerView: 7,
          },
        },
        navigation: {
          nextEl: '.swiper-button-nextt',
          prevEl: '.swiper-button-prevv',
        },
        // Add other Swiper configuration options as needed
      });

    }
  }, []);

  return (
    
    <div className="swiper-containerrrrrrr custom-swiper-container pt-20 pb-20">
      <div className="swiper-wrapper">
        <div className="swiper-slide">   
        <div className="team-member">
<img src="/images/goimage/teamone.png" className="img-fluid"/>
<div className="team-text">
<h2>Full Name</h2>
<p>Title</p>
</div>
</div>
        </div>

        <div className="swiper-slide">   
        <div className="team-member">
<img src="/images/goimage/teamone.png" className="img-fluid"/>
<div className="team-text">
<h2>Full Name</h2>
<p>Title</p>
</div>
</div>
        </div>
        <div className="swiper-slide">   
        <div className="team-member">
<img src="/images/goimage/teamone.png" className="img-fluid"/>
<div className="team-text">
<h2>Full Name</h2>
<p>Title</p>
</div>
</div>
        </div>
        <div className="swiper-slide">   
        <div className="team-member">
<img src="/images/goimage/teamone.png" className="img-fluid"/>
<div className="team-text">
<h2>Full Name</h2>
<p>Title</p>
</div>
</div>
        </div>

        <div className="swiper-slide">   
        <div className="team-member">
<img src="/images/goimage/teamone.png" className="img-fluid"/>
<div className="team-text">
<h2>Full Name</h2>
<p>Title</p>
</div>
</div>
        </div>
        <div className="swiper-slide">   
        <div className="team-member">
<img src="/images/goimage/teamone.png" className="img-fluid"/>
<div className="team-text">
<h2>Full Name</h2>
<p>Title</p>
</div>
</div>
        </div>
        <div className="swiper-slide">   
        <div className="team-member">
<img src="/images/goimage/teamone.png" className="img-fluid"/>
<div className="team-text">
<h2>Full Name</h2>
<p>Title</p>
</div>
</div>
        </div>

        <div className="swiper-slide">   
        <div className="team-member">
<img src="/images/goimage/teamone.png" className="img-fluid"/>
<div className="team-text">
<h2>Full Name</h2>
<p>Title</p>
</div>
</div>
        </div>
        <div className="swiper-slide">   
        <div className="team-member">
<img src="/images/goimage/teamone.png" className="img-fluid"/>
<div className="team-text">
<h2>Full Name</h2>
<p>Title</p>
</div>
</div>
        </div>
        <div className="swiper-slide">   
        <div className="team-member">
<img src="/images/goimage/teamone.png" className="img-fluid"/>
<div className="team-text">
<h2>Full Name</h2>
<p>Title</p>
</div>
</div>
        </div>
        <div className="swiper-slide">   
        <div className="team-member">
<img src="/images/goimage/teamone.png" className="img-fluid"/>
<div className="team-text">
<h2>Full Name</h2>
<p>Title</p>
</div>
</div>
        </div>

        <div className="swiper-slide">   
        <div className="team-member">
<img src="/images/goimage/teamone.png" className="img-fluid"/>
<div className="team-text">
<h2>Full Name</h2>
<p>Title</p>
</div>
</div>
        </div>

        <div className="swiper-slide">   
        <div className="team-member">
<img src="/images/goimage/teamone.png" className="img-fluid"/>
<div className="team-text">
<h2>Full Name</h2>
<p>Title</p>
</div>
</div>
        </div>

        <div className="swiper-slide">   
        <div className="team-member">
<img src="/images/goimage/teamone.png" className="img-fluid"/>
<div className="team-text">
<h2>Full Name</h2>
<p>Title</p>
</div>
</div>
        </div>

        <div className="swiper-slide">   
        <div className="team-member">
<img src="/images/goimage/teamone.png" className="img-fluid"/>
<div className="team-text">
<h2>Full Name</h2>
<p>Title</p>
</div>
</div>
        </div>

        <div className="swiper-slide">   
        <div className="team-member">
<img src="/images/goimage/teamone.png" className="img-fluid"/>
<div className="team-text">
<h2>Full Name</h2>
<p>Title</p>
</div>
</div>
        </div>

        <div className="swiper-slide">   
        <div className="team-member">
<img src="/images/goimage/teamone.png" className="img-fluid"/>
<div className="team-text">
<h2>Full Name</h2>
<p>Title</p>
</div>
</div>
        </div>

        <div className="swiper-slide">   
        <div className="team-member">
<img src="/images/goimage/teamone.png" className="img-fluid"/>
<div className="team-text">
<h2>Full Name</h2>
<p>Title</p>
</div>
</div>
        </div>


        {/* Add more slides here */}
      </div>
      <div className="container position-relative">
      <div className="swiper-button pb-5 position-relative">
      <div className="swiper-button-prev swiper-button-prevv pb-5">
        <img src="/images/goimage/prev.png" />
      </div>
      <div className="swiper-button-next swiper-button-nextt pb-5">
      <img src="/images/goimage/next.png" />
      </div>
      <div className=" swiper-button-next swiper-button-view pb-5">
      </div>
      </div>
      </div>
    </div>
  );
};

export default ImageSliderTeamMobile;
