import React from 'react';

const Header = (props) => {
  return (
    <div className={`flex justify-center ${props.className}`}>
      <h1>{props.children}</h1>
    </div>
  );
};

export default Header;