import React, {useEffect, useRef} from 'react';
import './styles/style.scss';
import Logo from './img/logo/4.svg';
import FacebookLogo from './img/socials/facebook.svg';
import InstagramLogo from './img/socials/instagram.svg';
import TwitterLogo from './img/socials/twitter.svg';

export default function Header(props) {
  const navbarRef = useRef();

  function testScroll () {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navbarRef.current.classList.add('collapsed-navbar');
    }
    else {
      navbarRef.current.classList.remove('collapsed-navbar');
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', testScroll, true)
  }, []);

  return (
    <nav className="navbar navbar-custom fixed-top" ref={navbarRef}>
      <a href="#" className="navbar-logo">
        <img src={Logo} alt="site logo"/>
        <span className="text">Pro</span>
      </a>
      <div className="navbar-nav navbar-collapse">
        <div className="navbar-item active">
          <a href="" className="navbar-link navbar-item-text">Home</a>
        </div>
        <div className="navbar-item">
          <a href="" className="navbar-link navbar-item-text">Intro</a>
        </div>
        <div className="navbar-item">
          <a href="" className="navbar-link navbar-item-text">Services</a>
        </div>
        <div className="navbar-item">
          <a href="" className="navbar-link navbar-item-text">Projects</a>
        </div>
        <div className="navbar-item">
          <a href="" className="navbar-link navbar-item-text">Contact</a>
        </div>
        <div className="navbar-item social-icons">
          <span className="social-icon-padding">
            <a href="">
              <span className="facebook-logo social-icon"/>
            </a>
          </span>
          <span className="social-icon-padding">
            <a href="">
              <span className="twitter-logo social-icon"/>
            </a>
          </span>
          <span className="social-icon-padding">
            <a href="">
              <span className="instagram-logo social-icon"/>
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
}