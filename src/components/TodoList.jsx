import './TodoList.css';

import { useContext } from 'react';
import Todo from './Todo';
import { TodoContext } from '../contexts';

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
const TodoList = () => {
  // Récupère la liste des tâches à faire dans le contexte
  const { todos } = useContext(TodoContext);

  return (
    <ul className="TodoList">
      {
        todos.map(
          (todo, index) => <Todo key={index} index={index} />
        )
      }
    </ul>
  );
}

export default TodoList;
