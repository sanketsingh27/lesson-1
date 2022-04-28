import TodoListItem from "./TodoItem";

export default function Todo({ filteredData }) {
  const filteredTodoList = filteredData.map((item) => {
    return (
      <>
        <TodoListItem
          key={item.id}
          task={item.task}
          taskId={item.id}
          isCompleted={item.isCompleted}
        />
      </>
    );
  });

  return (
    <>
      <ul>{filteredTodoList}</ul>
    </>
  );
}
