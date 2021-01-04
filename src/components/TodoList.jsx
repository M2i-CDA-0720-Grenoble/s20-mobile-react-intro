import './TodoList.css';

import Todo from './Todo';

function TodoList(props) {
  return (
    <ul className="TodoList">
      {
        props.todos.map(
          function(text) {
            return <Todo text={text} />
          }
        )
      }
    </ul>
  );
}

export default TodoList;
