import './Todo.css';

function Todo(props) {
  return (
    <li className="Todo">
      <input type="checkbox" className="Todo-check" />
      <h3 className="Todo-text">{props.text}</h3>
    </li>
  );
}

export default Todo;
