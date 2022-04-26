import { useState } from "react";
export default function AddTodo({ handleNewTodo }) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    //logic for add new todo
    handleNewTodo(todo);
  };

  const handleTodo = (event) => {
    setTodo(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={todo} type="text" onChange={handleTodo} />
        <button type="submit">Add Todo</button>
      </form>
    </>
  );
}
