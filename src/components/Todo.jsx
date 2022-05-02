import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import FilteredData from "./FilteredData";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";

export default function Todo() {
  const initialTasks = [
    { id: "001a", task: "task 1", isCompleted: false, isDeleted: false },
    { id: "001b", task: "task 2", isCompleted: false, isDeleted: false },
    { id: "001c", task: "task 3", isCompleted: false, isDeleted: false },
  ];

  const [allTodo, setAllTodo] = useState(initialTasks);

  const [showFilteredData, setShowFilteredData] = useState(false); // which list to show
  const [filteredData, setFilteredData] = useState([]);

  const markComplete = (todoId) => {
    const newTodoList = allTodo.map((element) => {
      if (element.id === todoId) {
        const newValue = { ...element, isCompleted: true };
        return newValue;
      }

      return element; // return as it is
    });
    setAllTodo(newTodoList);
  };

  const markDelete = (todoId) => {
    const newTodoList = allTodo.map((element) => {
      if (element.id === todoId) {
        const newValue = { ...element, isDeleted: true };
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

  const handleViewDeletedTask = () => {
    setShowFilteredData(true);
    const tasks = allTodo.filter((element) => element.isDeleted === true);
    setFilteredData(tasks);
  };

  const handleViewAllTask = () => {
    setShowFilteredData(true);
    setFilteredData(allTodo);
  };

  return (
    <>
      <AddTodo handleNewTodo={handleNewTodo} />

      <div>
        <button onClick={() => setShowFilteredData(false)}>Active TODO</button>
        <button onClick={handleViewDeletedTask}>All deleted Todo</button>
        <button onClick={handleViewAllTask}>All Task</button>
      </div>

      {showFilteredData === true ? (
        <FilteredData filteredData={filteredData} />
      ) : (
        <>
          <TodoList markComplete={markComplete} markDelete={markDelete} allTodo={allTodo} />
        </>
      )}
    </>
  );
}
