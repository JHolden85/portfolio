import React from 'react';

const iconNames = [
  "call-outline",
  "code-slash-outline",
  "document-outline",
  "ellipsis-vertical-outline",
  "logo-css3",
  "logo-github",
  "logo-html5",
  "logo-javascript",
  "logo-linkedin",
  "logo-nodejs",
  "logo-react",
  "mail-outline",
  "menu-outline",
  "server-outline",
]

const Icon = (props) => {
  
  let src = undefined;
  iconNames.forEach(element => {
    
      if(element === props.name) 
      {
        src = `./assets/icons/${element}.svg`;
      }
  });

  return (
      <div className={props.className} >
        {
          src && 
          (<ion-icon src={src}/>)
        }
      </div>
    );
}

export default Icon;