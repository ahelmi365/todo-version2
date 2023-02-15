import { useRef, useState } from "react";
import "./TodoItem.css";

export default function TodoItem({ todoItem, setTodoItem, addTodoItem }) {
  const todoInputValRef = useRef(null);
  const todoInputByRef = useRef(null);

  function resetTodoInputs() {
    todoInputValRef.current.value = "";
    todoInputByRef.current.value = "";
  }

  const [isValidForm, setIsValidForm] = useState(false);
  function checkFormValid() {
    setIsValidForm(
      Boolean(todoInputValRef.current.value && todoInputByRef.current.value)
    );
  }

  return (
    <div className="todo-item-container">
      <form
        onSubmit={(e) => {
          addTodoItem(e);
          resetTodoInputs();
          setIsValidForm(false);
          todoInputValRef.current.focus();
        }}
        className="todo-item-form"
      >
        <div className="todo-item-inputs">
          <input
            name="itemVal"
            required
            value={todoItem.itemVal}
            onChange={(e) => {
              setTodoItem(e);
              checkFormValid(e);
            }}
            type="text"
            placeholder="to do?"
            ref={todoInputValRef}
          />
          <input
            name="itemBy"
            required
            value={todoItem.itemBy}
            onChange={(e) => {
              setTodoItem(e);
              checkFormValid(e);
            }}
            type="text"
            placeholder="by?"
            ref={todoInputByRef}
          />
        </div>
        <div className="submit">
          <button disabled={!isValidForm} className="btn submit-btn ">
            Add Todo Item
          </button>
        </div>
      </form>
    </div>
  );
}
