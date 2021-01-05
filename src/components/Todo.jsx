import './Todo.css';
import { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { Button } from '.';

// On peut "extraire" des propriétés des object JavaScript et les assigner
// automatiquement à des variables portant le même nom avec l'écriture:
// const { prop1, prop2, prop3 } = myObject;
//
// Ici, écrire { text } au lieu de props est l'équivalent de:
// const { text } = props;
// Qui est elle-même l'équivalent de:
// const text = props.text;
const Todo = ({ text }) => {
  // Crée un état permettant de retenir si la tâche a été déclarée terminée ou non
  const [done, setDone] = useState(false);

  return (
    <li className="Todo">
      <input type="checkbox" className="Todo-check" onChange={(event) => setDone(event.target.checked)} />
      <h3 className={ 'Todo-text' + (done ? ' done' : '') }>{text}</h3>
      <div className="Todo-icons">
        <Button color="red" dark>
          <FaTrashAlt />
        </Button>
      </div>
    </li>
  );
}

export default Todo;
