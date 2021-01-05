import './App.css';

import { useState } from 'react';
import { RiMenuAddLine } from 'react-icons/ri';
import { Button, Layout, TodoList } from './components';

// Cette façon d'écrire des fonctions est la nouvelle écriture en ES6
// Ces deux écritures sont équivalentes:
//
// const myFunction = (param) => { return param; }
// function myFunction(param) { return param; }
const App = () => {
  // Crée un état permettant de retenir la valeur actuelle du champ "Ajouter une tâche"
  const [newTodo, setNewTodo] = useState('');

  // Crée un état permettant de retenir les tâches existant actuellement
  const [todos, setTodos] = useState([
    'Bananes',
    'Poires',
    'Chocolat'
  ]);

  // Crée une fonction permettant de gérer la validation du formulaire "Ajouter une tâche"
  const handleSubmit = (event) => {
    // Empêche le rechargement de la page
    event.preventDefault();
    // Remplace la liste des tâches existantes par une nouvelle liste contenant...
    setTodos([
      // ...toutes les tâches actuellement existantes...
      ...todos,
      // ...ainsi que la nouvelle tâche à ajouter
      newTodo
    ]);

    // Vide le champ "Ajouter une tâche"
    setNewTodo('');
  }

  const deleteTodo = (text) => {
    // Remplace la liste des tâches existantes par une nouvelle liste contenant...
    setTodos(
      // ...toutes les tâches actuelle, sauf celle passée en paramètre
      todos.filter( (item) => item !== text )
    );
  }

  const updateTodo = (text, newText) => {
    // Remplace la liste des tâches existantes par une nouvelle liste...
    setTodos (
      // ...dans laquelle seul le texte recherché est remplacé par un nouveau texte
      todos.map(
        (item) => item === text ? newText : item
      )
    );
  }

  return (
    <Layout>
      <h1>Ma liste de courses</h1>
      <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Entrez une nouvelle tâche"
          onChange={(event) => setNewTodo(event.target.value)}
          value={newTodo}
        />
        <Button color="blue" dark>
          <RiMenuAddLine /> Ajouter
        </Button>
      </form>
    </Layout>
  );
}

export default App;
