import './styles/style.scss';
import './styles/text.scss';
import React, {useEffect} from 'react';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import HomePart from './home/homePart';
import ContentPart from './content/contentPart';
import IntroPart from './intro/introPart';

export default function MainPage(props) {

  return (
    <div id="mainPage">
      <Navbar/>
      <HomePart/>
      <IntroPart/>
      <ContentPart/>
      <Footer/>
    </div>
  );
}