import './styles/style.scss';
import React from 'react';
import Header from './components/header';
import HeaderContent from './components/headerContent';
import Content from './components/content';

export default function MainPage(props) {
  return (
    <div className="full-page">
      <div className="background full-page">
        <Header/>
        <HeaderContent/>
      </div>
      <Content/>
    </div>
  );
}