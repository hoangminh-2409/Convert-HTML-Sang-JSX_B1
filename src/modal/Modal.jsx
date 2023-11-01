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

// import React from 'react'

// function Modal() {
//   return (
//     <div className='modal'>
//         <div className='modal-content'>
//             <div className='modal-header'>
//                 <h4 className='modal-title'>Modal title</h4>    
//             </div>
//             <div className='modal-body'>
//                 This is modal content
//             </div>
//             <div className='modal-footer'>
//                 <button className='button'>Close</button>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Modal
