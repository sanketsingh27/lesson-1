export default function TodoListItem({ task, taskId, markComplete, isCompleted, markDelete }) {
  const taskStyle = {
    textDecorationLine: isCompleted === true ? "line-through" : "none",
  };

  return (
    <>
      <div className="todoListItem">
        <div style={taskStyle}>{task}</div>
        <div>
          <button onClick={() => markComplete(taskId)}>Mark Complete</button>
          <button onClick={() => markDelete(taskId)}>Delete Item</button>
        </div>
      </div>
    </>
  );
}
