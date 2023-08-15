import Head from 'next/head';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import AOS from 'aos'
export default function Teamdetail() {
  return (
    <div>
      <Head>
        <title>Team Detail Page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
<section>
<div className="subsidaries-section" style={{ backgroundImage: "url('/images/goimage/teamland.png')" }}>
<div className="container">
<nav aria-label="breadcrumb pt-5">
  <ol class="breadcrumb pt-5">
    <li class="breadcrumb-item text-uppercase" ><a href="/">Home</a></li>
    <li class="breadcrumb-item text-uppercase"><a href="/team">TEAM MANAGEMENT</a></li>
    <li class="breadcrumb-item active text-uppercase" aria-current="page">SLUG</li>
  </ol>
</nav>
</div>

<div className="sub-contents">
<div class="container">
<div className="row">
<div className="col-md-6 col-12">
<div className="img-sub pt-5 pb-5">
<img src="/images/goimage/team-img.png" className="img-fluid"/>
</div>

</div>

<div class="col-md-4 col-12 pb-5">
<div class="text-team">
<div class="title-desc-page">
     <h2 className="mb-2">Sana Tag</h2>
     <h4 className="text-light-bold">Founder & CEO</h4>
     <p className="text-light-bold mt-4">Few words about Sana, We have team members on the ground in more than 20 countries³ who bring experience as entrepreneurs, investors, and operators from some of the world’s leading technology companies.</p>
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
