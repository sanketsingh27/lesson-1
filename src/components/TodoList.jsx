import TodoListItem from "./TodoItem";

export default function TodoList({ allTodo, markComplete }) {
  const TodoListTemp = allTodo.map((item) => {
    return (
      <TodoListItem
        key={item.id}
        task={item.task}
        taskId={item.id}
        isCompleted={item.isCompleted}
        markComplete={markComplete}
      />
    );
  });

  return (
    <>
      <ul>{TodoListTemp}</ul>
    </>
  );
}
