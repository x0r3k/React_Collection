import React, { useState, useEffect, useRef } from 'react';

export default function HeaderContent(props) {
  const [currWord, setCurrWord] = useState('examples')
  let words = ['projects', 'solutions', 'examples'];
  const animationText = useRef();

  function fadeIn() {
    let opacity = 0;
    function increase() {
      opacity += 0.02;
      if (opacity >= 1) {
        animationText.current.style.opacity = 1;
        return true;
      }
      animationText.current.style.opacity = opacity;
      requestAnimationFrame(increase);
    }
    increase();
  }

  useEffect(() => {
    let index = 0;
    let interval = setInterval(() => {
      requestAnimationFrame(fadeIn);
      let word = words[index % words.length];
      setCurrWord(word);
      index++;
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-part full-height-vp background" id="home">
      <div className="bf-center home-content">
        <p className="text h1-text bold-text center-text uppercase-text">
          {'React '}
          <span className="animated fadeIn" ref={animationText}>
            {currWord}
          </span>
        </p>
        <p className="text center-text home-content-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati labore quisquam temporibus distinctio praesentium laudantium atque odio consequuntur doloremque! Assumenda odio doloribus aperiam harum odit tenetur voluptas ut modi!
        </p>
      </div>
    </div>
  );
}