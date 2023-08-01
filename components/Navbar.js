import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '../styles/navbar.module.css'; 
import styless from '../styles/styless.css'; 
import Hamburger from 'hamburger-react'
import {BiLogoFacebook , BiLogoLinkedin , BiLogoTwitter} from 'react-icons/bi'
const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  const [showNavbar, setShowNavbar] = useState(false)
  const [sticky, setSticky] = useState(false);
  
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  return (
    <nav className={`${styles.navbar} ${sticky ? styles.sticky : ''}`}>
      <div className="container d-flex">
        <div className="logo">
        <Link href="/">     
        <img src="/images/goimage/nccholding.png"/>
        </Link>
        </div>
        <div className="d-lg-flex d-none ">
        <ul className="d-md-flex align-items-center menu-nav">
        <li className="mx-5"><Link href="/" className="text-white">Home</Link></li>
        <li className="mx-5"><Link href="/about" className="text-white" >About Us</Link></li>
        <li className="mx-5"><Link href="/services" className="text-white">Services</Link></li>
        <li className="ml-50">
          <Link href="/enqyuiry">
            <button class="btn btn-primary-border">
            INQUIRE NOW
            </button>
          </Link>
        </li>
        </ul>
        </div>
  
        <div className="menu-icon" onClick={handleShowNavbar}>
        <Link href="/">
        <Hamburger toggled={isOpen} toggle={setOpen} />

        </Link>
        </div>
  

        <div className={`nav-elements  ${showNavbar && 'active' }`}>
        <div className="container position-relative">
        <div className="d-flex menu-logo">
        <div className="logo2">
        <Link onClick={handleShowNavbar} href="/">
        <img src="/images/goimage/nccwhite.svg" className="img-fluid"/>
        </Link>
        </div>

        <div className="menu-icon2" onClick={handleShowNavbar}>
        <Hamburger toggled={isOpen} toggle={setOpen} />

        </div>
        </div>

</div>

        <div className="container d-md-flex ul-item-center">
        <div class="ncc-text-vertical">
        <h5>NCC Group©. 2023.</h5>
        </div>
        <div className="ul-item">
          <ul>
            <li> 
              <Link onClick={handleShowNavbar} href="/about">ABOUT US</Link>
            </li>
            <li> 
              <Link onClick={handleShowNavbar} href="/services">SERVICES</Link>
            </li>
       
            <li> 
            <Link onClick={handleShowNavbar} href="/projects">SUBSIDIARIES</Link>
          </li>
          <li> 
          <Link onClick={handleShowNavbar} href="/services">TEAM MANAGEMENT</Link>
        </li>
        <li> 
        <Link onClick={handleShowNavbar} href="/blogs">LATEST NEWS</Link>
      </li>


        <li> 
        <Link onClick={handleShowNavbar} href="/job-list">CONTACT</Link>
      </li>
          <li class="size-sm">
          <Link onClick={handleShowNavbar} href="/contact">CERTIFICATIONS</Link>
        </li>   
        <li class="size-sm">
          <Link onClick={handleShowNavbar} href="/contact">CAREERS</Link>
        </li> 
        <li class="size-sm">
          <Link onClick={handleShowNavbar} href="/contact">VIEW OUR COMPANY PROFILE</Link>
        </li> 
        <li class="size-xsm">
          <Link onClick={handleShowNavbar} href="/contact">Privacy Policy</Link>
        </li> 
        <li class="size-xsm">
          <Link onClick={handleShowNavbar} href="/contact">Terms & Condition</Link>
        </li> 
          </ul>
          </div>

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
</div>
</div>
<div class="container">
<div class="button-border-button">
<button class="btn btn-border mx-md-3">
INQUIRE NOW
</button>
<button class="btn btn-border mx-md-3">
GET A QUOTE
</button>
</div>
</div>

        </div>
      </div>

    </nav>

  )
}

export default Navbar;