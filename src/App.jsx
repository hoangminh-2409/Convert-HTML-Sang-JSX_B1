// import React, { useState } from "react";
import MenuExample from "./accordion/MenuExample";
import SubmenuExample from "./accordion/SubmenuExample";
import Dropdown from "./dropdown/Dropdown";
import Modal from "./modal/Modal";
import "./css/Todo.css";
import React, { useState } from "react";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import Footer from "./components/Footer";

const filterByStatus = (listTodos = [], status = "", id) => {
  switch (status) {
    case "ACTIVE":
      return listTodos.filter((item) => !item.isCompleted);
    case "COMPLETED":
      return listTodos.filter((item) => item.isCompleted);
    case "REMOVE":
      return listTodos.filter((item) => item.id !== id);
    default:
      return listTodos;
  }
};

const filterTodosLeft = (listTodos = []) => {
  return listTodos.filter((item) => !item.isCompleted);
};

const App = () => {
  const [listTodos, setListTodos] = useState([]);

  const [isCheckedAll, setIsCheckedAll] = useState(false);

  const [status, setStatus] = useState("ALL");
  const [todoEditingId, setTodoEditingId] = useState("");

  const addTodos = (todo = {}) => {
    setListTodos((prevListTodos) => [...prevListTodos, todo]);
  };

  const markCompleted = (id = "") => {
    let isCheckedAll = true;
    const updatedListTodos = listTodos.map((item) => {
      if (
        (!item.isCompleted && item.id !== id) ||
        (item.isCompleted && item.id === id)
      ) {
        isCheckedAll = false;
      }
      if (item.id === id) {
        return { ...item, isCompleted: !item.isCompleted };
      }
      return item;
    });

    setIsCheckedAll(isCheckedAll);
    setListTodos(updatedListTodos);
  };

  const checkAll = () => {
    const { listTodos, isCheckedAll } = this.state;
    const updatedListTodos = listTodos.map((item) => ({
      ...item,
      isCompleted: !isCheckedAll,
    }));
    setIsCheckedAll((prevIsCheckedAll) => !prevIsCheckedAll);
    setListTodos(updatedListTodos);
  };

  const clearCompleted = () => {
    setListTodos((prevListTodos) => filterTodosLeft(prevListTodos));
  };

  const getEditTodo = (id = "") => {
    setTodoEditingId(id);
  };

  const editTodo = (todo, index) => {
    setListTodos((prevListTodos) => {
      const updatedList = [...prevListTodos];
      updatedList.splice(index, 1, todo);
      return updatedList;
    });
  };

  const removeTodo = (id = "") => {
    setListTodos((prevListTodos) =>
      filterByStatus(prevListTodos, "REMOVE", id)
    );
  };

  return (
    <div className="todoapp">
      <Header addTodo={addTodos} />
      <TodoList
        listTodos={filterByStatus(listTodos, status)}
        markCompleted={markCompleted}
        checkAll={checkAll}
        isCheckedAll={isCheckedAll}
        todoEditingId={todoEditingId}
        getEditTodo={getEditTodo}
        editTodo={editTodo}
        removeTodo={removeTodo}
      />
      <Footer
        activeButton={status}
        setStatusFilter={(status) => setStatus(status)}
        clearCompleted={clearCompleted}
        numOfTodosLeft={filterTodosLeft(listTodos).length}
        numOfTodos={listTodos.length}
      />
    </div>
  );
};

export default App;

// const [isModalOpen, setIsModalOpen] = useState(false);

// const openModal = () => {
//   setIsModalOpen(true);
// };

// const closeModal = () => {
//   setIsModalOpen(false);
// };

// <div className="mx-full">
//   <MenuExample />
//   <SubmenuExample />
//   <Dropdown />
//   <div className="App">
//     <button onClick={openModal}>Open Modal</button>
//     {isModalOpen && (
//       <Modal onClose={closeModal}>
//         <h2>Modal Content</h2>
//         <p>This is the modal content.</p>
//       </Modal>
//     )}
//   </div>
// </div>
