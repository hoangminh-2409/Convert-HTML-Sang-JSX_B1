
import React from "react";
import '../css/Todo.css'

const Footer = (props) => {
  const {
    setStatusFilter,
    activeButton,
    clearCompleted,
    numOfTodosLeft,
    numOfTodos,
  } = props;
  // console.log("1111111", setStatusFilter);
  // console.log("2222222222", activeButton);
  // console.log("333333", clearCompleted);
  // console.log("44444", numOfTodosLeft);
  // console.log("55555555", numOfTodos);
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{numOfTodosLeft}</strong>
        <span> </span>
        <span>{numOfTodosLeft > 1 ? "items" : "item"}</span>
        <span> left</span>
      </span>
      <ul className="filters">
        <li>
          <a
            href="#/"
            className={`${activeButton === "ALL" ? "selected" : ""}`}
            onClick={() => setStatusFilter("ALL")}
          >
            All
          </a>
        </li>
        <span></span>
        <li>
          <a
            href="#/active"
            className={`${activeButton === "ACTIVE" ? "selected" : ""}`}
            onClick={() => setStatusFilter("ACTIVE")}
          >
            Active
          </a>
        </li>
        <span></span>
        <li>
          <a
            href="#/completed"
            className={`${activeButton === "COMPLETED" ? "selected" : ""}`}
            onClick={() => setStatusFilter("COMPLETED")}
          >
            Completed
          </a>
        </li>
      </ul>
      {numOfTodosLeft < numOfTodos && (
        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  );
}

    
export default Footer






