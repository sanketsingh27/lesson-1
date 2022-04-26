import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { nanoid } from "nanoid";
import { useState } from "react";

export default function Todo() {
  const initialTasks = [
    { id: "001a", task: "task 1", isCompleted: false, isDeleted: false },
    { id: "001b", task: "task 2", isCompleted: false, isDeleted: false },
    { id: "001c", task: "task 3", isCompleted: false, isDeleted: false },
  ];

  const [allTodo, setAllTodo] = useState(initialTasks);

  const markComplete = (todoId) => {
    // const targetTodo = allTodo.find((element) => element.id === todoId);
    // const newValue = { ...targetTodo, isCompleted: true };
    // const newArr = [...allTodo, newValue];
    // setAllTodo(newArr);

    const newTodoList = allTodo.map((element) => {
      if (element.id === todoId) {
        const newValue = { ...element, isCompleted: true };
        return newValue;
      }

      return element; // return as it is
    });
    setAllTodo(newTodoList);
  };

  const handleNewTodo = (newTodoItem) => {
    let newTodoObj = {
      id: nanoid(5),
      task: newTodoItem,
      isCompleted: false,
      isDeleted: false,
    };
    const newTodoList = [...allTodo, newTodoObj];
    setAllTodo(newTodoList);
  };

  return (
    <>
      <AddTodo handleNewTodo={handleNewTodo} />
      <TodoList markComplete={markComplete} allTodo={allTodo} />
    </>
  );
}
