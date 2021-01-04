import './TodoList.css';

import Todo from './Todo';

// Lorsque l'on veut définir une fonction qui ne fait que renvoyer une valeur
// (return), on en peut omettre les {} et le mot-clé "return"
// Ces deux écritures sont équivalentes:
//
// const myFunction = (param) => { return String(param); }
// const myFunction = (param) => String(param);

// On peut "extraire" des propriétés des object JavaScript et les assigner
// automatiquement à des variables portant le même nom avec l'écriture:
// const { prop1, prop2, prop3 } = myObject;
//
// Ici, écrire { todos } au lieu de props est l'équivalent de:
// const { todos } = props;
// Qui est elle-même l'équivalent de:
// const todos = props.todos;
const TodoList = ({ todos }) =>
  <ul className="TodoList">
    {
      todos.map(
        (text, index) => <Todo key={index} text={text} />
      )
    }
  </ul>
;

export default TodoList;
