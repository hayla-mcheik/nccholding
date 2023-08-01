import React, { useEffect } from "react";
import Image from 'next/legacy/image'
import 'swiper/css/navigation';

const ImageSliderThree = () => {
  useEffect(() => {
    if (typeof window.Swiper !== "undefined") {
      const swiper = new window.Swiper(".swiper-containerrr", {
        slidesPerView: 4,
        loop: true,
        autoplay: {
          delay: 3000,
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
    
    <div className="swiper-containerrr custom-swiper-container pt-20 pb-20">
      <div className="swiper-wrapper">
      <div class="container">
      <div class="row">
      <div class="col-md-2"> 
        <div class="client-logo">
        <Image src="/images/goimage/clientone.svg" alt="Image 1" width={100} height={100}  />
        </div>
        </div>

        <div class="col-md-2"> 
        <div class="client-logo">
        <Image src="/images/goimage/clientone.svg" alt="Image 1" width={100} height={100}  />
        </div>
        </div>
        <div class="col-md-2"> 
        <div class="client-logo">
        <Image src="/images/goimage/clientone.svg" alt="Image 1" width={100} height={100}  />
        </div>
        </div>
        <div class="col-md-2"> 
        <div class="client-logo">
        <Image src="/images/goimage/clientone.svg" alt="Image 1" width={100} height={100}  />
        </div>
        </div>
        <div class="col-md-2"> 
        <div class="client-logo">
        <Image src="/images/goimage/clientone.svg" alt="Image 1" width={100} height={100}  />
        </div>
        </div>
        <div class="col-md-2"> 
        <div class="client-logo">
        <Image src="/images/goimage/clientone.svg" alt="Image 1" width={100} height={100}  />
        </div>
        </div>
        <div class="col-md-2"> 
        <div class="client-logo">
        <Image src="/images/goimage/clientone.svg" alt="Image 1" width={100} height={100}  />
        </div>
        </div>
        <div class="col-md-2"> 
        <div class="client-logo">
        <Image src="/images/goimage/clientone.svg" alt="Image 1" width={100} height={100}  />
        </div>
        </div>
        <div class="col-md-2"> 
        <div class="client-logo">
        <Image src="/images/goimage/clientone.svg" alt="Image 1" width={100} height={100}  />
        </div>
        </div>
        <div class="col-md-2"> 
        <div class="client-logo">
        <Image src="/images/goimage/clientone.svg" alt="Image 1" width={100} height={100}  />
        </div>
        </div>
        <div class="col-md-2"> 
        <div class="client-logo">
        <Image src="/images/goimage/clientone.svg" alt="Image 1" width={100} height={100}  />
        </div>
        </div>
        <div class="col-md-2"> 
        <div class="client-logo">
        <Image src="/images/goimage/clientone.svg" alt="Image 1" width={100} height={100}  />
        </div>
        </div>
        <div class="col-md-2"> 
        <div class="client-logo">
        <Image src="/images/goimage/clientone.svg" alt="Image 1" width={100} height={100}  />
        </div>
        </div>
        <div class="col-md-2"> 
        <div class="client-logo">
        <Image src="/images/goimage/clientone.svg" alt="Image 1" width={100} height={100}  />
        </div>
        </div>
        <div class="col-md-2"> 
        <div class="client-logo">
        <Image src="/images/goimage/clientone.svg" alt="Image 1" width={100} height={100}  />
        </div>
        </div>
        <div class="col-md-2"> 
        <div class="client-logo">
        <Image src="/images/goimage/clientone.svg" alt="Image 1" width={100} height={100}  />
        </div>
        </div>
        <div class="col-md-2"> 
        <div class="client-logo">
        <Image src="/images/goimage/clientone.svg" alt="Image 1" width={100} height={100}  />
        </div>
        </div>
        <div class="col-md-2"> 
        <div class="client-logo">
        <Image src="/images/goimage/clientone.svg" alt="Image 1" width={100} height={100}  />
        </div>
        </div>
        <div class="col-md-2"> 
        <div class="client-logo">
        <Image src="/images/goimage/clientone.svg" alt="Image 1" width={100} height={100}  />
        </div>
        </div>
        <div class="col-md-2"> 
        <div class="client-logo">
        <Image src="/images/goimage/clientone.svg" alt="Image 1" width={100} height={100}  />
        </div>
        </div>
        <div class="col-md-2"> 
        <div class="client-logo">
        <Image src="/images/goimage/clientone.svg" alt="Image 1" width={100} height={100}  />
        </div>
        </div>
        <div class="col-md-2"> 
        <div class="client-logo">
        <Image src="/images/goimage/clientone.svg" alt="Image 1" width={100} height={100}  />
        </div>
        </div>
        <div class="col-md-2"> 
        <div class="client-logo">
        <Image src="/images/goimage/clientone.svg" alt="Image 1" width={100} height={100}  />
        </div>
        </div>
        <div class="col-md-2"> 
        <div class="client-logo">
        <Image src="/images/goimage/clientone.svg" alt="Image 1" width={100} height={100}  />
        </div>
        </div>

        </div>  
</div>



        {/* Add more slides here */}
      </div>

    </div>
  );
};

export default ImageSliderThree;
