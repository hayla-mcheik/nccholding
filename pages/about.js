import Head from 'next/head';
import Navbar from '../components/Navbar'
import {BiLogoFacebook , BiLogoLinkedin , BiLogoTwitter} from 'react-icons/bi'
import ImageSliderMilestone from '../components/ImageSliderMilestone';
import ImageSliderTeam from '../components/ImageSliderTeam';
import Footer from '../components/Footer';
import AOS from 'aos'
export default function About() {
  return (
    <div>
      <Head>
        <title>About Page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <section class="img-landing-relative">
      <div className="landing-screen">
<div className="container">
<div className="row">
<div className="landing">
<div className="text-landing">
<h2>ABOUT US</h2>
<h5>Since 1990, NCC Holding has been at the forefront of life support services across the UAE & the Middle East, with our owned companies in Kuwait, Iraq and Kingdom of Saudi Arabia we try to expand our partnerships and experiences to grow our market share. 
<br/> <br/>We are pioneers in our specialties including: Industrial & Corporate Catering, Facilities Management, Construction, Food Distribution & Supply, Specialist Dietary Services, Retail, Food & Beverage. 
<br/><br/>Our main goal is to become a perfect partner for our client’s businesses & to adapt quickly to evolving new market developments.</h5>
</div>
</div>
</div>
<div className="box-landing mt-5" >
<div class="row mt-5">
<div class="col-md-8 col-12 d-md-flex d-content mx-auto justify-content-center">
<div class="col-md-3 col-4">
<div class="box-image">
<img src="/images/goimage/aboutcardone.png" className="img-fluid" />
</div>
</div>


<div class="col-md-3 col-4">
<div class="box-image">
<img src="/images/goimage/cardabouttwo.png" className="img-fluid" />
</div>
</div>


<div class="col-md-3 col-4">
<div class="box-image">
<img src="/images/goimage/cardaboutthree.png" className="img-fluid" />
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
<div class="col-md-5 col-12">
<div class="description-about mt-5">
<div className="mt-5">
<h2 className="mt-5 mb-4">OUR VALUES.</h2>
<p>We have built the profiles of the world’s best-known entrepreneurs.
<br/><br/> For more than a decade, we have run dynamic campaigns for members of The Sunday Times Rich List and Forbes Billionaires’ List, drawing on our in-house creative team and global contacts.</p>
</div>
<div className="mt-5 ">
<h2 className="mt-5 mb-4">INNOVATION</h2>
<p>NCC has proven continuously vto adjust to change and address client needs with innovative approach in all business aspects with creative, efficient and cost effective ways.
</p>
</div>
</div>
</div>
<div className="col-md-2">
</div>

<div class="col-md-5 col-12">
<div class="description-about mt-5">
<div className="mt-5">
<h2 className="mt-5 mb-4">CLIENT SATISFACTION</h2>
<p>Client satisfaction is of paramount importance to us and we ensure to achieve that with the highest level of capability. 
<br/>We are committed to fulfilling their expectations by striving for quality in everything that we do through continuous internal and external improvements and building strength to support our clients’ needs
</p>
</div>
<div className="mt-5">
<h2 className="mt-5 mb-4">QUALITY</h2>
<p>Our employees embrace their responsibilities and enjoy the process of problem solving. This results in effective solutions ensuring the highest quality of services for our customers.
</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>




<section>
<div class="slider-services slider-two slider-milestone slider-two pt-40 pb-40">
<div class="container">
<div class="row">
<div class="home-title-desc">
     <h2>OUR MILESTONES</h2>
     <p>Our main goal is to become a perfect partner for our client’s businesses & to adapt quickly to evolving new market developments.</p>
      </div>
      </div>
      </div>

      <ImageSliderMilestone />

</div>

</section>



<section>
<div class="slider-services slider-two mt-40 mb-40">
<div class="container">
<div class="row">
<div class="home-title-desc">
     <h2>TEAM MANAGEMENT</h2>
     <p>Our main goal is to become a perfect partner for our client’s businesses & to adapt quickly to evolving new market developments.</p>
      </div>
      </div>
      </div>
      <ImageSliderTeam />
</div>

</section>
<Footer />

    </div>
  )
}
