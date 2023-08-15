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
      <p className="text-light">Register for our email newsletter to get the freshest takes, straight to your inbox.</p>
      <div className="form-subsc pt-4">
      


<div class="col-sm-12">
        <div class="subscribe_now">
        
          <form class="subscribe_form">
            <div class="input-group d-flex">
            <div className="d-flex">
            <h5 className="text-light"><HiOutlineMailOpen/>Email.</h5>
               <input type="text" class="form-control mx-2" name="email" placeholder="Enter your email" />
               </div>
               <div className="mt-2 mt-md-0">
               <span class="input-group-btn mt-4 mt-md-0">
                    <h5 class="text-white" type="button">Sign Up</h5>
                    <img src="/images/goimage/sign-up.png" width={40} />
               </span>
               </div>
            </div>
          </form>
          <p className="mt-5 text-light">For further details on how your personal data will be processed and how your consent can be managed, refer to the NCC Holding Privacy Notice.</p>
        </div>
      </div>
 

      </div>
    </div>
    </div>
    </div>


    <div className="footer-bottom">
      <div className="container">
      <div class="img-footer ">
      <img src="/images/goimage/img-footer.png" className="img-fluid"/>
      </div>
      <div class="footer-navigations pt-4 pb-4 d-lg-flex align-items-center justify-content-center ">
      <div className="mx-md-2 text-light"><a href="/about">ABOUT</a></div>
      <div className="mx-md-2 text-light"><a href="/subsidiaries">SUBSIDIARIES</a></div><div className="mx-md-2 text-light"><a href="#">SERVICES</a></div><div className="mx-md-2 text-light"><a href="#">OUR CLIENTS</a></div>
      <div className="mx-md-2 text-light"><a href="/team">TEAM</a></div><div className="mx-md-2 text-light"><a href="#">INSIGHT</a></div><div className="mx-md-2 text-light"><a href="#">CERTIFICATIONS</a></div><div className="mx-md-2 text-light"><a href="/careers">CAREERS</a></div><div className="mx-md-2 text-light"><a href="/contact">CONTACT</a></div><div className="mx-md-2 text-light"><a href="#">PRIVACY POLICY</a></div><div className="mx-md-2 text-light"><a href="#">TERMS &amp; CONDITIONS</a></div>
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
