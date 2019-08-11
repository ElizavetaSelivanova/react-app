import React from 'react';

import './index.scss';

const Header = ({ title, description, imageUrl }) => {
  return (
    <div className="header-block" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="header-block-content">
        <h1>{ title }</h1>
        <h3>{ description }</h3>
      </div>
    </div>
  );
};

export default Header;
