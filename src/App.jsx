import React, { useState } from "react";
import MenuExample from "./accordion/MenuExample";
import SubmenuExample from "./accordion/SubmenuExample";
import Dropdown from "./dropdown/Dropdown";
import Modal from "./modal/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mx-full">
      <MenuExample />
      <SubmenuExample />
      <Dropdown />
      <div className="App">
        <button onClick={openModal}>Open Modal</button>
        {isModalOpen && (
          <Modal onClose={closeModal}>
            <h2>Modal Content</h2>
            <p>This is the modal content.</p>
          </Modal>
        )}
      </div>
    </div>
  );
}

export default App;

// import { useState } from "react"

// function App() {

//   return (
//
//   );
// }

// export default App;
