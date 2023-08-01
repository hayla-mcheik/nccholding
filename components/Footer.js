import React from 'react'
import Image from 'next/legacy/image'
import {HiOutlineMailOpen} from 'react-icons/hi'
const Footer = () => {
  return (
    <div>
      <div className="footer">
      <div className="footer-subscribe">
      <div className="container">
      <div className="footer-desc">
      <h2>STAY IN THE KNOW</h2>
      <p>Register for our email newsletter to get the freshest takes, straight to your inbox.</p>
      <div className="form-subsc d-flex">
      

<form action="POST"><div class="text-white">
<div class="form-group text-white">
<div class="d-flex flex-column flex-sm-row flex-column-mobile gap-2">
<HiOutlineMailOpen />
<span><p class="pt-3 text-white">Email</p></span>
<div class="mt-2"><div class="form-group form-group-transparent"><input type="email" class="form-control" /></div></div>
<span class="d-flex align-items-center gap-2">
<div>
<p class="pt-3 text-white">Sign up</p>
</div>
<div>
<img src="/images/goimage/sign-up.png" />
</div>
</span>
      </div>
      </div>
      </div>
      </form>

      </div>
    </div>
    </div>
    </div>


    <div className="footer-bottom">
      <div className="container">
      <div class="img-footer ">
      <Image src="/images/goimage/img-footer.png" width={100} height={100} />
      </div>
      <div class="footer-navigations pt-4 pb-4 d-lg-flex align-items-center justify-content-center ">
      <div className="mx-md-2 text-light"><a href="/about">ABOUT</a></div>
      <div className="mx-md-2 text-light"><a href="/subsidiaries">SUBSIDIARIES</a></div><div className="mx-md-2 text-light"><a href="/services">SERVICES</a></div><div className="mx-md-2 text-light"><a href="#pur-clients">OUR CLIENTS</a></div>
      <div className="mx-md-2 text-light"><a href="#team">TEAM</a></div><div className="mx-md-2 text-light"><a href="/insights">INSIGHT</a></div><div className="mx-md-2 text-light"><a href="#cetifications">CERTIFICATIONS</a></div><div className="mx-md-2 text-light"><a href="/careers">CAREERS</a></div><div className="mx-md-2 text-light"><a href="/contact">CONTACT</a></div><div className="mx-md-2 text-light"><a href="/privacy-posicy">PRIVACY POLICY</a></div><div className="mx-md-2 text-light"><a href="/terms-conditions">TERMS &amp; CONDITIONS</a></div>
      </div>

      <div className="social-media-footer d-flex align-items-center justify-content-center ">
<img src="/images/goimage/socialone.png" />
<img className="mx-2" src="/images/goimage/socialtwo.png" />
<img src="/images/goimage/socialthree.png" />
      </div>
      </div>
      </div>
    </div>

    </div>
  )
}

export default Footer
