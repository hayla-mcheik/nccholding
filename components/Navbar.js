import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import styles from '../styles/navbar.module.css'; 
import styless from '../styles/styless.css'; 
import { Squash as Hamburger } from 'hamburger-react'
import {BiLogoFacebook , BiLogoLinkedin , BiLogoTwitter} from 'react-icons/bi'
import AOS from 'aos'
const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  const [showNavbar, setShowNavbar] = useState(false)
  const [sticky, setSticky] = useState(false);
  const [showSubsidiaries, setShowSubsidiaries] = useState(false); 
  const router = useRouter();
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

    // Step 2: Toggle the Subsidiaries submenu
    const handleToggleSubsidiaries = () => {
      setShowSubsidiaries(!showSubsidiaries);
    };


  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      // When the scroll position is greater than or equal to 100px,
      // apply the sticky class to the navbar; otherwise, remove the sticky class.
      if (window.scrollY >= 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar}`}>
      <div className="container d-flex">
        <div className="logo">
        <Link href="/">     
        <img src="/images/goimage/nccholding.png"/>
        </Link>
        </div>
        <div className="d-lg-flex d-none ">
        <ul className="d-md-flex align-items-center menu-nav">
  <li className={`mx-5 ${router.pathname === '/' ? 'active' : ''}`}>
    <Link href="/" className="text-hover">Home</Link>
  </li>
  <li className={`mx-5 ${router.pathname === '/about' ? 'active' : ''}`}>
    <Link href="/about" className="text-hover">About Us</Link>
  </li>
  <li className={`mx-5`}>
    <Link href="#" className="text-hover">Services</Link>
  </li>
  <li className="ml-50">
    <Link href="/inquiry"><button className="btn-border mx-md-3" fdprocessedid="vuapce">INQUIRE NOW</button></Link>
  </li>
</ul>
        </div>
  
        <div className="menu-icon" onClick={handleShowNavbar}>
              <Hamburger toggled={isOpen} toggle={setOpen} />
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
        <div className="ul-item" data-aos="zoom-in"
     data-aos-duration="1000">
          <ul className="mobile-scroll">
            <li> 
              <Link onClick={handleShowNavbar} href="/about">ABOUT US</Link>
            </li>
            <li> 
              <Link onClick={handleShowNavbar} href="#">SERVICES</Link>
            </li>
       
            <li>
                  <span onClick={handleToggleSubsidiaries}>SUBSIDIARIES</span>
                  <div class="ul-items d-md-none d-block">
<ul className={showSubsidiaries ? 'show' : 'hide'}>
                    <li>
                      <Link  onClick={handleShowNavbar} href="/subsidiaries">
                      SLIM N LITE
                      </Link>
                    </li>
                    <li>
                    <Link  onClick={handleShowNavbar} href="/subsidiaries">
                      NATIONAL CATERING COMPANY
                      </Link>
                    </li>
                    <li>
                    <Link  onClick={handleShowNavbar} href="/subsidiaries">
                      TAMWEEN
                      </Link>
                    </li>     
                         <li>
                         <Link  onClick={handleShowNavbar} href="/subsidiaries">
                      FRESH PLANET
                      </Link>
                    </li>   
                             <li>
                             <Link  onClick={handleShowNavbar} href="/subsidiaries">
                      AMAN
                      </Link>
                    </li>   
                                   <li>
                                   <Link  onClick={handleShowNavbar} href="/subsidiaries">
                      GRAKO & GECKO
                      </Link>
                    </li>
                  </ul>
</div>
                </li>

          <li> 
          <Link onClick={handleShowNavbar} href="/team">TEAM MANAGEMENT</Link>
        </li>
        <li> 
        <Link onClick={handleShowNavbar} href="/news">LATEST NEWS</Link>
      </li>


        <li> 
        <Link onClick={handleShowNavbar} href="/contact">CONTACT</Link>
      </li>
          <li class="size-sm">
          <Link onClick={handleShowNavbar} href="/#">CERTIFICATIONS</Link>
        </li>   
        <li class="size-sm">
          <Link onClick={handleShowNavbar} href="/careers">CAREERS</Link>
        </li> 
        <li class="size-sm">
          <Link onClick={handleShowNavbar} href="#">VIEW OUR COMPANY PROFILE</Link>
        </li> 
        <li class="size-xsm">
          <Link onClick={handleShowNavbar} href="#">Privacy Policy</Link>
        </li> 
        <li class="size-xsm">
          <Link onClick={handleShowNavbar} href="#">Terms & Condition</Link>
        </li> 
          </ul>
          </div>


<div class="ul-items d-md-block d-none">
<ul className={showSubsidiaries ? 'show' : 'hide'}>
                    <li>
                    <Link  onClick={handleShowNavbar} href="/subsidiaries">
                      SLIM N LITE
                      </Link>
                    </li>
                    <li>
                    <Link  onClick={handleShowNavbar} href="/subsidiaries">
                      NATIONAL CATERING COMPANY
                      </Link>
                    </li>
                    <li>
                    <Link  onClick={handleShowNavbar} href="/subsidiaries">
                      TAMWEEN
                      </Link>
                    </li>     
                         <li>
                         <Link  onClick={handleShowNavbar} href="/subsidiaries">
                      FRESH PLANET
                      </Link>
                    </li>   
                             <li>
                             <Link  onClick={handleShowNavbar} href="/subsidiaries">
                      AMAN
                      </Link>
                    </li>   
                                   <li>
                                   <Link  onClick={handleShowNavbar} href="/subsidiaries">
                      GRAKO & GECKO
                      </Link>
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
<Link href="/inquiry">
<button class="btn-border mx-md-3">
INQUIRE NOW
</button>
</Link>
   <Link href="/quote">
<button class="btn-border mx-md-3">
GET A QUOTE
</button>
</Link>
</div>
</div>

        </div>
      </div>

    </nav>

  )
}

export default Navbar;