import Head from 'next/head';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
export default function Quote() {
  return (
    <div>
      <Head>
        <title>Get A Quote</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
<section>
<div className="subsidaries-section" style={{ backgroundImage: "url('/images/goimage/contact.jpg')" }}>
<div className="container">
<nav aria-label="breadcrumb pt-5">
  <ol class="breadcrumb pt-5">
    <li class="breadcrumb-item text-uppercase" ><a href="/">Home</a></li>
    <li class="breadcrumb-item active text-uppercase" aria-current="page">Get A Quote</li>
  </ol>
</nav>
</div>


<div className="contact-form mt-5">
<div className="container">
<div className="row">
<div className="col-md-6 col-lg-7 col-12">
<div className="form flex-item-q mb-5">
<div class="container gk-form"><h3 class="text-uppercase">Get A Quote </h3><p>Drop us a line. Hear back from an our expert.</p>
<form action="">
<div class="row form-row">
<div class="col-md-6 mb-3"><input type="text" class="form-control" placeholder="First Name" /></div>
<div class="col-md-6 mb-3"><input type="text" class="form-control" placeholder="Last Name" /></div></div>
<div class="row form-row"><div class="col-md-6 mb-3"><input type="email" class="form-control" placeholder="Email" /></div>
<div class="col-md-6 mb-3"><input type="number" class="form-control no-arrows" placeholder="Phone Number" /></div></div>
<div><textarea class="form-control" placeholder="Message" rows="7" cols="50"></textarea>
</div><div class="d-flex justify-content-center mt-3">
<button type="submit" class="btn-light btn-block btn-extendeded" >
Send Message</button>
</div>
</form>
</div>
</div>
</div>

<div className="col-md-6 col-lg-5 col-12">

<div class="button-address panel with-nav-tabs panel-default">
<h2>OUR LOCATIONS</h2>
<div className="button-add d-flex justify-content align-items-center">
<div class="nav nav-tabs" id="nav-tab" role="tablist">

<div class="sps-f d-flex gap-3 align-items-center px-3 py-1 nav-link active"  id="nav-uae-tab" data-bs-toggle="tab" data-bs-target="#nav-uae" type="button" role="tab" aria-controls="nav-uae" aria-selected="true"><img src="/images/goimage/uae.png" width={30} /><div className="ek">UAE</div></div>


<div class="sps-f d-flex gap-3 align-items-center px-3 py-1 mx-5 nav-link"  id="nav-kuwait-tab" data-bs-toggle="tab" data-bs-target="#nav-kuwait" type="button" role="tab" aria-controls="nav-kuwait" aria-selected="true"><img src="/images/goimage/kuwait.png" width={30} /><div className="ek">Kuwait</div></div>

</div>

</div>



<div class="tab-content mt-4" id="nav-tabContent">
                        <div class="tab-pane show active" id="nav-uae" role="tabpanel" aria-labelledby="nav-uae-tab">
                        <div class="flex-item-2 mb-5">
<h5>UAE</h5>
<div class="lineHeight-form">
<p>NCC Head Office - KIZAD AB, Abu Dhabi, UAE</p>
<p>Tel: +971 2634 5151 <br/> Fax : +971 2634 4010</p>
<p>NCC Central Stores</p><p>Tel: +971 2555 4071 <br/> Fax : +971 2555 9502</p>
<p>NCC Dubai Office</p><p>Tel: +971 4422 7726 <br/> Fax : +971 4422 7725</p></div></div>
                        </div>
                        <div class="tab-pane " id="nav-kuwait" role="tabpanel" aria-labelledby="nav-kuwait-tab">
                        <div class="flex-item-2 mb-5">
<h5>Kuwait</h5>
<div class="lineHeight-form">
<p>NCC Head Office - KIZAD AB, Abu Dhabi, UAE</p>
<p>Tel: +971 2634 5151 <br/> Fax : +971 2634 4010</p>
<p>NCC Central Stores</p><p>Tel: +971 2555 4071 <br/> Fax : +971 2555 9502</p>
<p>NCC Dubai Office</p><p>Tel: +971 4422 7726 <br/> Fax : +971 4422 7725</p></div></div>
                        </div>
</div>
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
