import React from 'react';

const ButtonLink = (props) => {
  return (
    <button 
      className={`border-2 bg-green-400 rounded-md text-black ${props.className}`}
      onClick={()=>{
        if(props.href)
        {
          window.location = `${props.href}`;
        }
        }}>
      {props.children}
    </button>
  );
};

export default ButtonLink;