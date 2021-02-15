import React from 'react';
import '../styles/style.scss';

export default function ServicePart(props) {

  const mockData = [
    {
      img: '',
      title: 'Standart',
      description: 'Бесплатная полнофункциональная интегрированная среда разработки для учащихся, разработчиков открытого ПО и отдельных разработчиков',
      items: [],
      price: 'Free'
    }, 
    {
      img: '',
      title: 'Enterprise',
      description: 'Профессиональные инструменты и службы для разработки; выгодные подписки для небольших команд разработчиков',
      items: [],
      price: '$5999'
    },
    {
      img: '',
      title: 'Professional',
      description: 'Всеобъемлющее решение, которое удовлетворяет требованиям к качеству и масштабированию команд разработчиков любых размеров',
      items: [],
      price: '$1199'
    }
  ];

  return (
    <div className="service main-page-part" id='service'>
      <div className="content-container">
        <p className="center-text section-title-text">Service</p>
        <h2 className="text heading-text dark-text center-text">Check out and choose the most suitable service</h2>
        <div className="flex-row service-cards">

        </div>
      </div>
    </div>
  );
}