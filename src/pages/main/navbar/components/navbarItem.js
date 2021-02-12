import React, {useEffect} from 'react';
import clsx from 'clsx';

export default function MainPage({isActive, href, title, id, setActive}) {

  return (
    <div 
      className={clsx('navbar-item', {'active': isActive})}
      onClick={() => setActive(id)}
    >
      <a href={href} className="navbar-link navbar-item-text">{title}</a>
    </div>
  );
}