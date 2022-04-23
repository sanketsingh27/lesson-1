import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { useState } from "react";

export default function Todo() {
  const [allTodo, setAllTodo] = useState(["task1", "task2", "task3"]);

  //   const handleNewTodo = () =>{
  //     newTodoItem =  // function to fetch new todo
  //     const newTodoList = [...allTodo,newTodoItem];
  //     setAllTodo(newTodoList)
  //   }

  return (
    <>
      <AddTodo addNewTodo={setAllTodo} />
      <TodoList allTodo={allTodo} />
    </>
  );
}
