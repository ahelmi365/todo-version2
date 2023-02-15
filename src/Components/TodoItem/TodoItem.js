import { useRef } from "react";
import "./TodoItem.css";

export default function TodoItem({ todoItem, setTodoItem, addTodoItem }) {
  const todoInputRef = useRef(null);
  return (
    <div className="todo-item-container">
      <form onSubmit={addTodoItem} className="todo-item-form">
        <div className="todo-item-inputs">
          <input
            name="itemVal"
            required
            value={todoItem.itemVal}
            onChange={setTodoItem}
            type="text"
            placeholder="to do?"
            ref={todoInputRef}
          />
          <input
            name="itemBy"
            required
            value={todoItem.itemBy}
            onChange={setTodoItem}
            type="text"
            placeholder="by?"
          />
        </div>
        <div className="submit">
          <button
            className="btn submit-btn "
            onClick={() => {
              todoInputRef.current.focus();
            }}
          >
            Add Todo Item
          </button>
        </div>
      </form>
    </div>
  );
}
