import React, {useState, useEffect} from 'react';

export default function HeaderContent(props) {
  const [currWord, setCurrWord] = useState('')
  function titleCarousel() {
    let words = ['projects', 'solutions', 'examples'];
  }

  useEffect(() => {
    let interval = setInterval(() => {

    }, 1500);

    return clearInterval(interval);
  },[]);

  return (
    <div className="header-content">
      <div className="bf-center header-content-text">
        <p className="text main-text bold-text center-text">
          React {currWord}
        </p>
        <p className="text center-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati labore quisquam temporibus distinctio praesentium laudantium atque odio consequuntur doloremque! Assumenda odio doloribus aperiam harum odit tenetur voluptas ut modi!
        </p>
      </div>
    </div>
  );
}