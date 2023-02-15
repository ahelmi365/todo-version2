import { useState } from "react";
import { useEffect } from "react";
import TodoItem from "../TodoItem/TodoItem";
import TodoList from "../TodoList/TodoList";
import "./Home.css";
import done_sound from "../../assests/audio/done.mp3";
import Users from "../Users/Users";

export default function Home() {
  const [todoItem, setTodoItem] = useState({
    id: -1,
    itemVal: "",
    itemBy: "",
    isDone: false,
  });
  let nextId = -1;
  function handleInputChange(e) {
    setTodoItem({
      ...todoItem,
      id: nextId++,
      [e.target.name]: e.target.value,
      isDone: false,
    });
  }

  const [toDoItemsList, updateToDoItemsList] = useState([]);

  function handleOnSubmit(e) {
    e.preventDefault();

    if (
      todoItem.itemVal.trim().length > 0 &&
      todoItem.itemBy.trim().length > 0
    ) {
      updateToDoItemsList([...toDoItemsList, todoItem]);
      setTodoItem({ itemVal: "", itemBy: "" });
    } else {
      console.log("Cannot be empty");
    }
  }

  function removeToDoItem(e) {
    const itemId = e.target.id;
    const newToDoItemsList = toDoItemsList.filter((item) => {
      return itemId !== item.itemVal;
    });
    updateToDoItemsList(newToDoItemsList);
  }

  // const done_sound = document.getElementById("done_sound");
  const done_sound_play = new Audio(done_sound);
  function setTodoItemDone(e) {
    const newToDoItemsList = toDoItemsList.map((todoItem) => {
      if (todoItem.itemVal === e.target.id) {
        return { ...todoItem, isDone: !todoItem.isDone };
      } else {
        return todoItem;
      }
    });
    updateToDoItemsList(newToDoItemsList);
    if (e.target.name === "false") {
      done_sound_play.play();
    }

    // console.log(newToDoItemsList)
  }

  // usestate to toggle the doc title
  const [docTitle, setDocTitle] = useState(false);

  // fucntion to handle header click
  function handelHeaderClick(e) {
    setDocTitle(!docTitle);
  }

  useEffect(() => {
    document.title = docTitle ? "TodoApp" : "ReactApp";
  }, [docTitle]);
  return (
    <div className="home-container">
      <header className="header">
        <h1 onClick={handelHeaderClick}>Hello React Hooks</h1>
      </header>
      <main className="main-container">
        <div className="main-container-sub">
          <div className="left">
            <Users />
          </div>
          <div className="right">
            <div className="welcome">
              <h3>Please add your tasks below...</h3>
            </div>

            <TodoItem
              todoItem={todoItem}
              setTodoItem={handleInputChange}
              addTodoItem={handleOnSubmit}
            />
          </div>
        </div>
        <div className="bottom">
          <TodoList
            toDoItemsList={toDoItemsList}
            removeToDoItem={removeToDoItem}
            setTodoItemDone={setTodoItemDone}
          />
        </div>
      </main>

      <audio id="done_sound">
        <source src="./assests/audio/done.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
