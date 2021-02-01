import './styles/style.scss';
import React from 'react';
import Header from '../../components/header/header';
import HeaderContent from './components/headerContent';
import Content from './components/content';

export default function MainPage(props) {
  return (
    <div className="full-page">
      <Header/>
      <div className="background full-page">
        <HeaderContent/>
      </div>
      <Content/>
    </div>
  );
}