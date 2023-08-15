import Head from 'next/head';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import AOS from 'aos'
export default function News() {
  return (
    <div>
      <Head>
        <title>Lates News Page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
<section>
<div className="latest-section" >
<div className="container">
<nav aria-label="breadcrumb pt-5">
  <ol class="breadcrumb pt-5">
    <li class="breadcrumb-item text-uppercase text-dark" ><a href="/">Home</a></li>
    <li class="breadcrumb-item text-uppercase text-dark"><a href="#">latest news</a></li>
  </ol>
</nav>
</div>

<div className="latest-news mt-5">
<div className="container">
<div className="row">
<div className="col-md-4 col-12">
<div class="img-latest-news">
<img src="/images/goimage/latest-news.png" className="img-fluid" />
<img src="/images/goimage/latest-two.png" className="img-fluid mt-5 mb-5" />
</div>
</div>
<div className="col-md-5 col-12">
<div className="text-latest mb-5">
<h2 className="mb-4">What is a headless CMS and do you need one?</h2>
<p>Traditionally, a content management system (CMS) is responsible for both the backend management of the site’s content and serving that content to end-users.
<br/> <br/>For example, WordPress offers an admin area where content editors can manage the site content, but also provides ways for that content to be displayed to site visitors, via a WordPress theme. 
<br/>These themes can be heavily customised, or built from scratch, but they are still very closely tied to WordPress and how it stores its data. Traditional CMSs are often called ‘monolithic’ because they are usually large and powerful but slow to change.
<br/> <br/>A headless CMS is one that does not know where its data will be displayed. It will store and manage content, but where and how that content (the ‘head’) is displayed is decided separately. 
<br/><br/>This means the content stored within your CMS can be connected to multiple ‘heads’, such as websites, apps, chatbots, and voice apps – anywhere that content can be delivered. While there are lots of different benefits to using a headless CMS, it all boils down to one core concept: headless CMSes enable everyone on the team to do their best work. A well-designed headless CMS can store content for a variety of channels, and not just digital! Manage content for any product or service – app, website or even print – all from the same place.
</p>
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
