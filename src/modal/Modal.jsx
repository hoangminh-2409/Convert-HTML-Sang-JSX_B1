import React from 'react';

function Modal(props) {
  return (
    <div className="modal">
      <div className="modal-content">
        {props.children}
      </div>
      <button onClick={props.onClose}>Close</button>
    </div>
  );
}

export default Modal;

