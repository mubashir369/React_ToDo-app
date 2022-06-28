import React from "react";
import {v4 as uuidV4} from 'uuid'

function Form({ input, setInput, todos, setTodos }) {
  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  const onFormeSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos,{id:uuidV4(),title:input,completed:false}])
    setInput()
  };
  return (
    <form onSubmit={onFormeSubmit}>
      <input
        type="text"
        value={input}
        placeholder="Enter a Todo..."
        className="task-input"
        required
        onChange={onInputChange}
      />
      <button className="button-add" type="submit">
        Add
      </button>
    </form>
  );
}

export default Form;
