import React, { useEffect } from 'react';
import '../styles/style.scss';
import IntroPicture from '../img/intro.jpg';
import IntroCard from './components/introCard';

export default function MainPage(props) {
  const mockData = [
    {
      heading: 'Version Control',
      text: 'Version control is the procedure for tracking and controlling changes in your source code. By using version control software such as open source stalwart Git, you can track the changes in order to go back to a previous version of your work.'
    },
    {
      heading: 'Front End Frameworks',
      text: 'Front end frameworks do for CSS what JavaScript Frameworks do for JavaScript. Since a lot of CSS begins with the same elements from one project to another, a framework which defines all these for you up front is valuable.'    
    },
    {
      heading: 'Debugging & Testing',
      text: 'Bugs occur during the development process of any website. In order to ensure that things keep moving, you must test your code for bugs during the development process.'
    }
  ]

  return (
    <div className="intro main-page-part" id='intro'>
      <div className="content-container">
        <div className="flex-row">
          <div className="col-5">
            <p className="section-title-text">Intro</p>
            <h2 className="text heading-text dark-text">Who we are and what we suggest</h2>
            <p className="text dark-text mb-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque repudiandae vel non dolores, maiores sit nam laboriosam harum dicta fugit eveniet suscipit! Porro itaque vero, voluptas laudantium explicabo aliquam.</p>
            <p className="text dark-text italic-text mb-text">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque repudiandae vel non dolores, maiores sit nam laboriosam harum dicta fugit eveniet suscipit! Porro itaque vero, voluptas laudantium explicabo aliquam."</p>
            <p className="text dark-text bold-text">Kyrylo Dolhopolov - JS Developer</p>
          </div>
          <div className="col-7">
            <div className="image-container">
              <img src={IntroPicture} alt="" />
            </div>
          </div>
        </div>
        <div className="flex-row">
          { mockData.map(item => <IntroCard heading={item.heading} text={item.text}/>)}
        </div>
      </div>
    </div>
  );
}