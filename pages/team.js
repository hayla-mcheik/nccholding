import Head from 'next/head';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import AOS from 'aos'
export default function Team() {
  return (
    <div>
      <Head>
        <title>All Team</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
<section>
<div className="latest-section" >
<div className="container">
<nav aria-label="breadcrumb pt-5">
  <ol class="breadcrumb pt-5">
    <li class="breadcrumb-item text-uppercase text-dark" ><a href="/">Home</a></li>
    <li class="breadcrumb-item text-uppercase text-dark"><a href="#">Team</a></li>
  </ol>
</nav>
</div>

<div className="team pb-5 pt-5">
<div className="container">
<div className="row" data-aos="fade-up"
     data-aos-duration="1000">
<div className="col-md-3 col-12 px-md-0 mx-md-0">
<div className="team-member">
<img src="/images/goimage/teamone.png" className="img-fluid"/>
<div className="team-text">
<h2>Full Name</h2>
<p>Title</p>
</div>
</div>
</div>
<div className="col-md-3 col-12 px-md-0 mx-md-0">
<div className="team-member">
<img src="/images/goimage/teamtwo.png" className="img-fluid"/>
<div className="team-text">
<h2>Full Name</h2>
<p>Title</p>
</div>
</div>
</div>
<div className="col-md-3 col-12 px-md-0 mx-md-0">
<div className="team-member">
<img src="/images/goimage/teamthree.png" className="img-fluid"/>
<div className="team-text">
<h2>Full Name</h2>
<p>Title</p>
</div>
</div>
</div>
<div className="col-md-3 col-12 px-md-0 mx-md-0">
<div className="team-member">
<img src="/images/goimage/teamtwo.png" className="img-fluid"/>
<div className="team-text">
<h2>Full Name</h2>
<p>Title</p>
</div>
</div>
</div>


<div className="col-md-3 col-12 px-md-0 mx-md-0">
<div className="team-member">
<img src="/images/goimage/teamone.png" className="img-fluid"/>
<div className="team-text">
<h2>Full Name</h2>
<p>Title</p>
</div>
</div>
</div>
<div className="col-md-3 col-12 px-md-0 mx-md-0">
<div className="team-member">
<img src="/images/goimage/teamtwo.png" className="img-fluid"/>
<div className="team-text">
<h2>Full Name</h2>
<p>Title</p>
</div>
</div>
</div>
<div className="col-md-3 col-12 px-md-0 mx-md-0">
<div className="team-member">
<img src="/images/goimage/teamthree.png" className="img-fluid"/>
<div className="team-text">
<h2>Full Name</h2>
<p>Title</p>
</div>
</div>
</div>
<div className="col-md-3 col-12 px-md-0 mx-md-0">
<div className="team-member">
<img src="/images/goimage/teamtwo.png" className="img-fluid"/>
<div className="team-text">
<h2>Full Name</h2>
<p>Title</p>
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
