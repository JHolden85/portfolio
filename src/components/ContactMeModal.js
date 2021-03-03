import React, {useState} from 'react';
import Modal from "react-modal";

Modal.setAppElement('#root');
const ContactMeModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={()=> {setModalIsOpen(false)}}>
      <button onClick={() => {setModalIsOpen(false)}}>Close</button>
      
    </Modal>
  );
}

export default ContactMeModal;