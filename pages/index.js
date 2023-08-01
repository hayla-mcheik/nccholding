import Head from 'next/head';
import Navbar from '../components/Navbar'
import {BiLogoFacebook , BiLogoLinkedin , BiLogoTwitter} from 'react-icons/bi'
import ImageSlider from '../components/ImageSlider';
import ImageSliderTwo from '../components/ImageSliderTwo';
import ImageSliderFour from '../components/ImageSliderFour';
import ImageSliderThree from '../components/ImageSliderThree';
import Footer from '../components/Footer';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <section>
      <div className="landing-screen">
<div className="container">
<div className="row">
<div className="landing">
<div className="text-landing">
<h2>LEADERS 
IN QUALITY 
PIONEERS IN 
OUR SPECIALTIES</h2>
<h5>Our main goal is to become a perfect partner for our client’s businesses & to adapt quickly to evolving new market developments.</h5>
</div>
</div>
</div>
<div className="box-landing mt-5">
<div class="row">
<div class="col-md-8 col-12 d-md-flex d-content mx-auto">
<div class="col-md-3 col-6">
<div class="box-image">
<img src="/images/goimage/box-one.svg" className="img-fluid" />
</div>
</div>


<div class="col-md-3 col-6">
<div class="box-image">
<img src="/images/goimage/boxtwo.svg" className="img-fluid" />
</div>
</div>


<div class="col-md-3 col-6">
<div class="box-image">
<img src="/images/goimage/boxthree.png" className="img-fluid" />
</div>
</div>


<div class="col-md-3 col-6">
<div class="box-image">
<img src="/images/goimage/boxfour.png" className="img-fluid" />
</div>
</div>
</div>

</div>
</div>

<div class="social-landing position-absolute d-md-block d-none ">
<div class="social-media d-block fixed">
<div class="social-media-icon">
<BiLogoTwitter />
</div>
<div class="social-media-icon">
<BiLogoFacebook />
</div>
<div class="social-media-icon">
<BiLogoLinkedin />
</div>
<div class="arabic-image mt-5">
<img src="/images/goimage/ar.svg" className="img-fluid" />
</div>
<div class="scroll-img mt-5">
<img src="/images/goimage/scroll-img.png"/>
</div>
</div>
</div>
</div>
</div>
</section>
<section>
<div class="landing-home-about pb-50 pt-40">
<div class="container">
<div class="row">
<div class="col-md-7 col-12">
<div class="description-home-about mt-5">
<h2 >WHO WE ARE</h2>
<p>
Since 1990, NCC Holding has been at the forefront of life support services across the UAE & the Middle East, with our owned companies in Kuwait, Iraq and Kingdom of Saudi Arabia we try to expand our partnerships and experiences to grow our market share. 
<br/><br/>
We are pioneers in our specialties including: Industrial & Corporate Catering, Facilities Management, Construction, Food Distribution & Supply, Specialist Dietary Services, Retail, Food & Beverage.
<br/><br/> Our main goal is to become a perfect partner for our client’s businesses & to adapt quickly to evolving new market developments.
</p>
</div>
</div>
<div class="col-md-5 col-12">
<div class="box-about">
<div class="row mt-5 align-items-center">
<div class="col-6">
<div class="box-about-img">
<img src="/images/goimage/aboutimgone.png"  className="img-fluid"/>
</div>
</div>
<div class="col-6">
<div class="box-about-img">
<img src="/images/goimage/aboutimgtwo.png"  className="img-fluid"/>
</div>
</div>
<div class="col-6">
<div class="box-about-img">
<img src="/images/goimage/aboutimgthree.png"  className="img-fluid"/>
</div>
</div>
<div class="col-6">
<div class="box-about-img">
<img src="/images/goimage/aboutimgfour.png"  className="img-fluid"/>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section>
<div class="slider-services mt-40 mb-40">
<div class="container">
<div class="row">
<div class="home-title-desc">
     <h2>OUR SERVICES</h2>
     <p>Our main goal is to become a perfect partner for our client’s businesses & to adapt quickly to evolving new market developments.</p>
      </div>
      </div>
      </div>
      <div>
      <ImageSlider />
  </div>
</div>

</section>


<section>
<div class="slider-services slider-two mt-40 mb-40">
<div class="container">
<div class="row">
<div class="home-title-desc">
     <h2>OUR SERVICES</h2>
     <p>Our main goal is to become a perfect partner for our client’s businesses & to adapt quickly to evolving new market developments.</p>
      </div>
      </div>
      </div>
      <div className="container">
      <ImageSliderTwo />
  </div>
</div>

</section>

<section>
<div class="slider-services  clients-section mt-40 ">
<div class="container">
<div class="home-title-client pt-50">
     <h2>OUR CLIENTS</h2>
      </div>
</div>
      <div className="container">
      <ImageSliderThree />
  </div>
</div>
</section>

<section>
<div class="slider-services slider-two mt-40 mb-40">
<div class="container">
<div class="row">
<div class="home-title-desc">
     <h2>LATEST NEWS</h2>
     <p>Our main goal is to become a perfect partner for our client’s businesses & to adapt quickly to evolving new market developments.</p>
      </div>
      </div>
      </div>
      <div className="container">
      <ImageSliderFour />
  </div>
</div>

</section>
<Footer />

    </div>
  )
}
