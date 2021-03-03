import React from 'react';


const PageCenter = (props) => {
  return (
    <div className="flex justify-around">
      {props.children}
    </div>
  );
};


export default PageCenter;