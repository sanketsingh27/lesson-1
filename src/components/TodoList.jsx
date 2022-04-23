export default function TodoList({ allTodo }) {
  const TodoListTemp = allTodo.map((item) => {
    return <li>{item}</li>;
  });

  return (
    <>
      <ul>{TodoListTemp}</ul>
    </>
  );
}
