import React from 'react';
import Icon from '../SiteWide/Icon';

const ProjectCard = (props) => {
  const imgSrc = props.screenshotSrc ? ("./assets/" + props.screenshotSrc) : "./assets/CPFav-01.png";
  const projectLink = props.link ? props.link : "https://github.com/ChristianPayne"
  
  return (
    <div className="m-4 p-2 shadow-lg border border-gray-300">
      <button className="p-2" onClick={()=> {
          window.open (projectLink, "_blank");
        }}>
        <img src={imgSrc} alt={props.screenshotAlt} />
        <div className="flex py-4">
          <h1 className="font-Sans text-left text-2xl md:text-3xl">{props.projectName}</h1>
          <div className="flex ml-4">
            <Icon name="code-slash-outline" className="flex pr-2 h-full items-center"/>
            <Icon name="code-slash-outline" className="flex pr-2 h-full items-center"/>
          </div>
        </div>
        
          <h2 className="font-Sans px-4">{props.description}</h2>
        {props.children}
      </button>
    </div>
  );
}

export default ProjectCard;