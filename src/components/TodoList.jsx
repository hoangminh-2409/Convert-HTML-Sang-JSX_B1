import Todo from "./Todo";
import react from "react";
import '../css/Todo.css'

const TodoList = (props) => {
  const { listTodos, checkAll, isCheckedAll } = props;

  console.log("11111111111", listTodos)
  console.log("222222222", checkAll);
  console.log("33333333", isCheckedAll);
  return (
    <section className="main">
      <input
        className="toggle-all"
        type="checkbox"
        onChange={() => {
          console.log("mmark done");
          checkAll();
        }}
        checked={isCheckedAll}
      />
      <label htmlFor="toggle-all" onClick={checkAll}></label>
      <ul className="todo-list">
        {listTodos.map((todo, index) => (
          <Todo index={index} key={todo.id} todo={todo} {...props} />
        ))}
      </ul>
    </section>
  );
}

export default TodoList;

