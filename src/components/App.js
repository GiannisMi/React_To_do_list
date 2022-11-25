import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const initialState = [
  {
    title: "Learn JavaScript",
    done: false,
  },
  {
    title: "Learn PHP",
    done: true,
  },
];

const App = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const updateInput = (e) => {
    setTodoInput(e.target.value);
  };
  const addTodo = (e) => {
    setTodos([...todos, { title: todoInput, done: false }]);
    setTodoInput("");
  };
  const removeTodo = (index) => {
    const newTodos = todos.filter((_todo, i) => i !== index);
    setTodos(newTodos);
  };
  const toggleTodo = (e, index) => {
    const newTodos = [...todos];
    newTodos[index].done = e.target.checked;
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <h1>Todo list</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <TodoInput
            todoInput={todoInput}
            updateInput={updateInput}
            addTodo={addTodo}
          />
          <br />

          <div className="items">
            {todos.map(({ title, done }, i) => (
              <TodoItem
                key={title}
                index={i}
                title={title}
                done={done}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
