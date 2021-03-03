import React from 'react';
import Modal from "react-modal";

Modal.setAppElement("#root");

function ProjectModal(props) {
  
  return (
    <div>
      <Modal isOpen={props.modalIsOpen} onRequestClose={()=> {
        // props.setModalIsOpen(false)
        
        }}>
        {/* Spacing Wrappers */}
        <div className="md:m-12">
          <button className="p-4 bg-green-400 bg-opacity-70 rounded" onClick={()=>{props.setModalIsOpen(false)}}>Close</button>
          
        </div>
        {props.children}
      </Modal>
    </div>
  );
}

export default ProjectModal;