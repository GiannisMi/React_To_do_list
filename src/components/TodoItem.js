import React from "react";

const TodoItem = ({ index, title, done, removeTodo, toggleTodo }) => {
  return (
    <div className="alert alert-dark clearfix">
      <label className="title float-left">
        <input
          onChange={(e) => toggleTodo(e, index)}
          checked={done}
          type="checkbox"
          className="done-checkbox"
        />
        &nbsp; {done ? <strike>{title}</strike> : <span>{title}</span>}
      </label>
      <button
        onClick={() => removeTodo(index)}
        className="btn btn-danger float-right"
      >
        X
      </button>
    </div>
  );
};

export default TodoItem;
