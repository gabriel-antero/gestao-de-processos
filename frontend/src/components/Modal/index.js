import React, { useState, useEffect } from 'react';

import ReactModal from 'react-modal';

const Modal = ({ children, isOpen, setIsOpen, width, height }) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#fff',
          padding: '0px',
          border: '0',
          borderRadius: '0px',
          color: '#000000',
          width: '90%',
          maxWidth: `${width}`,
          height: '90vh',
          maxHeight: `${height}`,
        },
        overlay: {
          backgroundColor: '#121214c3',
          heigth: '100vh',
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
