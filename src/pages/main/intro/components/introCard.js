import React, {useEffect} from 'react';

export default function IntroCard({icon, heading, text}) {

  return (
    <div className="col-4">
      <div className="intro-card-icon">
        <div className="circle">
          <img className="icon bf-center" src={icon} alt=""/>
        </div>
      </div>
      <div className="intro-card-heading text h4-text bold-text dark-text">{heading}</div>
      <div className="intro-card-text text dark-text">{text}</div>
    </div>
  );
}