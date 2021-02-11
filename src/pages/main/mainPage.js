import './styles/style.scss';
import './styles/text.scss';
import React, {useEffect} from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import HomePart from './home/homePart';
import ContentPart from './content/contentPart';
import IntroPart from './intro/introPart';

export default function MainPage(props) {

  return (
    <div id="mainPage">
      <Header/>
      <HomePart/>
      <IntroPart/>
      <ContentPart/>
      <Footer/>
    </div>
  );
}