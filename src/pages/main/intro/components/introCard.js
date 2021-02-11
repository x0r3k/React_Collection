import React, {useEffect} from 'react';

export default function IntroCard({icon, heading, text}) {

  return (
    <div className="col-4">
      <div className="icon">

      </div>
      <div className="intro-card-heading h4-text bold-text">{heading}</div>
      <div className="intro-card-text">{text}</div>
    </div>
  );
}