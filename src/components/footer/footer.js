import React from 'react';
import './styles/style.scss';

export default function Footer(props) {

  return (
    <footer className="footer footer-custom">
      <div className="footer-blocks content-container">
        <div className="footer-block footer-block-about col-6">
          <h3 className="text bold-text">
            About
          </h3>
          <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nulla, nemo maiores atque ut vero reprehenderit explicabo facere excepturi, mollitia incidunt voluptate beatae sint similique ad rerum pariatur dolorem earum.</p>
        </div>
        <div className="footer-block footer-block-links col-2">
          <h3 className="text bold-text">
            Links
          </h3>
          <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="footer-block footer-block-tools col-2">
          <h3 className="text bold-text">
            Tools
          </h3>
          <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="footer-block footer-block-partners col-2">
          <h3 className="text bold-text">
            Partners
          </h3>
          <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        </div>
      </div>
      <div className="footer-copyright content-container">
        <p className="text center-text">
          Copyright © 2021 Test Project
        </p>
      </div>
    </footer>
  );
}