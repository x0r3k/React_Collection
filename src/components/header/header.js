import React, {useEffect, useRef} from 'react';
import './styles/style.scss';
import Logo from './img/4.svg';

export default function Header(props) {

  function testScroll () {
    if(document.documentElement.scrollTop > 50) console.log('changeClass');
  }

  useEffect(() => {
    window.addEventListener('scroll', testScroll, true)
  }, []);

  return (
    <nav className="navbar navbar-custom fixed-top">
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
      </div>
    </nav>
  );
}