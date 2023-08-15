import Head from 'next/head';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import AOS from 'aos'
export default function Subsidiaries() {
  return (
    <div>
      <Head>
        <title>About Page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
<section>
<div className="subsidaries-section" style={{ backgroundImage: "url('/images/goimage/subsid.jpg')" }}>
<div className="container">
<nav aria-label="breadcrumb pt-5">
  <ol class="breadcrumb pt-5">
    <li class="breadcrumb-item text-uppercase" ><a href="/">Home</a></li>
    <li class="breadcrumb-item active text-uppercase" aria-current="page">Subsidiaries</li>
  </ol>
</nav>
</div>

<div className="sub-contents">
<div class="container">
<div className="row">
<div className="col-md-4 col-12">
<div className="img-sub pt-5 pb-5">
<img src="/images/goimage/subfour.svg" className="img-fluid" />
</div>

<div class="title-desc-page">
     <h2>A Healthy Life Delivered Right To Your Doorstep</h2>
     <p>Slim’n Lite is a lifestyle & nutrition center that serves healthy food made from farm-fresh ingredients. Our team of licensed dietitians & highly skilled chefs will customize meal plans to suit your health & fitness goals; may it be weight loss, weight gain, controlling a medical condition or simply eating healthily. Our Services include: Dietary Consultation Customized Healthy Meal Plan Catering Nursery & School Catering Clinics & Hospitality</p>
      </div>

      <div className="sub-li">
      <div class="services-include"><p>Our Services Include:</p><ul><li class="b-c-items">Dietary Consultation</li><li class="b-c-items">Customized Healthy Meal Plan Catering</li><li class="b-c-items">Nursery &amp; School Catering</li><li class="b-c-items">Clinic &amp; Hospitality</li></ul>
      <button type="button" class="btn-primary-border mt-5 mb-5" ><a>For More Information   |   Visit Website</a></button></div>
      </div>

</div>
</div>
</div>
</div>
</div>
</section>
<Footer />

    </div>
  )
}
