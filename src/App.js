import logo from './logo.svg';
import './App.css';


function Todo(props) {
  return (
    <li>
      <h3>{props.text}</h3>
    </li>
  );
}

function App() {
  return (
    <div>
      <h1>Ma liste de courses</h1>
      <ul>
        <Todo text="Bananes" />
        <Todo text="Frites" />
        <Todo text="Poires" />
        <Todo text="Chocolat" />
        <Todo text="Poulet" />
      </ul>
    </div>
  );
}

export default App;
