import './Todo.css';
import { useState } from 'react';
import { FaCheck, FaTrashAlt, FaEdit } from "react-icons/fa";
import { Button } from '.';

// On peut "extraire" des propriétés des object JavaScript et les assigner
// automatiquement à des variables portant le même nom avec l'écriture:
// const { prop1, prop2, prop3 } = myObject;
//
// Ici, écrire { text } au lieu de props est l'équivalent de:
// const { text } = props;
// Qui est elle-même l'équivalent de:
// const text = props.text;
const Todo = ({ text, deleteTodo, updateTodo }) => {
  // Crée un état permettant de retenir si la tâche a été déclarée terminée ou non
  const [done, setDone] = useState(false);
  // Crée un état permettant de retenir si la tâche est en cours de modification
  const [editing, setEditing] = useState(false);
  // Crée un état permettant de retenir le contenu actuel du champ texte
  const [newText, setNewText] = useState(text);

  // Crée une fonction permettant de gérer la validation du formulaire
  const handleSubmit = (event) => {
    // Empêche le rechargement de la page
    event.preventDefault();
    // Applique la modification
    updateTodo(text, newText);
    // Sort du mode "édition"
    setEditing(false);
  }

  return (
    <li className="Todo">
      <input type="checkbox" className="Todo-check" onChange={(event) => setDone(event.target.checked)} />

      {
        editing ?
          <form className="Todo-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nom de la tâche"
              value={newText}
              onChange={(event) => setNewText(event.target.value)}
            />
            <Button color="blue" dark>
              <FaCheck />
            </Button>
          </form>
        :
          <h3 className={ 'Todo-text' + (done ? ' done' : '') }>{text}</h3>
      }

      <div className="Todo-icons">
        <Button color="yellow" onClick={() => setEditing(true)}>
          <FaEdit />
        </Button>
        <Button color="red" dark onClick={() => deleteTodo(text)}>
          <FaTrashAlt />
        </Button>
      </div>
    </li>
  );
}

export default Todo;
