import './Todo.css';

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
// Ici, écrire { text } au lieu de props est l'équivalent de:
// const { text } = props;
// Qui est elle-même l'équivalent de:
// const text = props.text;
const Todo = ({ text }) => 
  <li className="Todo">
    <input type="checkbox" className="Todo-check" />
    <h3 className="Todo-text">{text}</h3>
  </li>
;

export default Todo;
