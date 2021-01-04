import logo from './logo.svg';
import './App.css';


function Todo(props) {
  return (
    <li>
      <h3>{props.text}</h3>
    </li>
  );
}

function TodoList(props) {
  return (
    <ul>
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

function App() {
  const todos = [
    'Bananes',
    'Frites',
    'Poires',
    'Chocolat',
    'Poulet',
    'Produit vaisselle'
  ];

  return (
    <div>
      <h1>Ma liste de courses</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
