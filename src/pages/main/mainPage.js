import './styles/style.scss';
import React, {useEffect} from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import HomePart from './home/homePart';
import ContentPart from './content/contentPart';

export default function MainPage(props) {

  return (
    <div id="mainPage">
      <Header/>
      <HomePart/>
      <ContentPart/>
      <Footer/>
    </div>
  );
}