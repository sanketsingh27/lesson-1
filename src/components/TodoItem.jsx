export default function TodoListItem({ task, taskId, markComplete, isCompleted }) {
  const taskStyle = {
    textDecorationLine: isCompleted === true ? "line-through" : "none",
  };

  return (
    <>
      <div className="todoListItem">
        <div style={taskStyle}>{task}</div>
        <div>
          <button onClick={() => markComplete(taskId)}>Mark Complete</button>
          <button>Delete Item</button>
        </div>
      </div>
    </>
  );
}
