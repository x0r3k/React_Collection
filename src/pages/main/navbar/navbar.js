import React, {useEffect, useRef, useState} from 'react';
import './styles/style.scss';
import Logo from './img/logo/4.svg';
import NavbarItem from './components/navbarItem';

export default function Navbar(props) {
  const navbarRef = useRef();

  let mockData = [
    {
      id: 'home',
      href: '#home',
      title: 'Home',
    },
    {
      id: 'intro',
      href: '#intro',
      title: 'Intro',
    },
    {
      id: 'services',
      href: '',
      title: 'Services',
    },
    {
      id: 'projects',
      href: '',
      title: 'Projects',
    },
    {
      id: 'contact',
      href: '',
      title: 'Contact',
    }
  ];

  const [activeNavbarItem, setActiveNavbarItem] = useState('home');

  function navbarScrollCollapse () {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navbarRef.current.classList.add('collapsed-navbar');
    }
    else {
      navbarRef.current.classList.remove('collapsed-navbar');
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', navbarScrollCollapse, true)
  }, []);

  return (
    <nav className="navbar navbar-custom fixed-top" ref={navbarRef}>
      <a href="#" className="navbar-logo">
        <img src={Logo} alt="site logo"/>
        <span className="text">Pro</span>
      </a>
      <div className="navbar-nav navbar-collapse">
        { mockData.map(item => 
          <NavbarItem 
            key={item.id} 
            href={item.href} 
            title={item.title} 
            id={item.id} 
            isActive={item.id===activeNavbarItem}
            setActive={setActiveNavbarItem}
          />
        )}
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