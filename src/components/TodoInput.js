import React from "react";

const TodoInput = ({ todoInput, updateInput, addTodo }) => {
  return (
    <div className="form-row">
      <div className="col-10">
        <input
          value={todoInput}
          onChange={updateInput}
          type="text"
          className="form-control"
          placeholder="Add todo"
        />
      </div>
      <div className="col-2">
        <button
          onClick={addTodo}
          type="submit"
          className="btn btn-primary btn-block"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
