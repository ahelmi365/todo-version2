import "./TodoList.css";
export default function TodoList({
  toDoItemsList,
  removeToDoItem,
  setTodoItemDone,
}) {
  return (
    <div className="todo-list-container">
      {toDoItemsList.length > 0 ? (
        <div className="todo-list-items">
          {toDoItemsList.map((todo) => {
            return (
              <div key={todo.itemVal}>
                <div className="todo-item">
                  <div className="todo-item-text-container">
                    <input
                      type="checkbox"
                      name={String(todo.isDone)}
                      id={todo.itemVal}
                      className="todo-item-check"
                      onChange={setTodoItemDone}
                    />
                    <label htmlFor={todo.itemVal}  className={"todo-item-text " + (todo.isDone? "checked":"")}>
                      Item: {todo.itemVal} - By: {todo.itemBy}
                    </label>
                  </div>
                  <div className="todo-item-btns">
                    <button
                      className="remove-item-btn btn"
                      id={todo.itemVal}
                      onClick={removeToDoItem}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="no-todo-items">
          <p>No Items to be Shown</p>
        </div>
      )}
    </div>
  );
}
