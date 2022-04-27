import TodoListItem from "./TodoItem";

export default function TodoList({ allTodo, markComplete, markDelete }) {
  const TodoListTemp = allTodo.map((item) => {
    return (
      <>
        {item.isDeleted === false && (
          <TodoListItem
            key={item.id}
            task={item.task}
            taskId={item.id}
            isCompleted={item.isCompleted}
            markComplete={markComplete}
            markDelete={markDelete}
          />
        )}
      </>
    );
  });

  return (
    <>
      <ul>{TodoListTemp}</ul>
    </>
  );
}
