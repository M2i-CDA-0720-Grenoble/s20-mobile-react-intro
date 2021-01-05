import './App.css';

import { useState } from 'react';
import { RiMenuAddLine } from 'react-icons/ri';
import { Button, Layout, TodoList } from './components';
import { TodoContext } from './contexts';


const defaultTodos = [
  { text: 'Bananes', done: false },
  { text: 'Poires', done: false },
  { text: 'Chocolat', done: false },
];

// Cette façon d'écrire des fonctions est la nouvelle écriture en ES6
// Ces deux écritures sont équivalentes:
//
// const myFunction = (param) => { return param; }
// function myFunction(param) { return param; }
const App = () => {
  // Crée un état permettant de retenir la valeur actuelle du champ "Ajouter une tâche"
  const [newTodo, setNewTodo] = useState('');

  // Crée un état permettant de retenir les tâches existant actuellement
  const [todos, setTodos] = useState(defaultTodos);

  // Crée une fonction permettant de gérer la validation du formulaire "Ajouter une tâche"
  const handleSubmit = (event) => {
    // Empêche le rechargement de la page
    event.preventDefault();

    // Si le champ texte n'est pas vide
    if (newTodo !== '') {
      addTodo(newTodo);
      // Vide le champ "Ajouter une tâche"
      setNewTodo('');
    }
  }

  // Crée une fonction permettant d'ajouter une nouvelle tâche
  const addTodo = (text) => {
    // Remplace la liste des tâches existantes par une nouvelle liste contenant...
    setTodos([
      // ...toutes les tâches actuellement existantes...
      ...todos,
      // ...ainsi que la nouvelle tâche à ajouter
      {
        text,
        done: false,
      }
    ]);
  }

  // Crée une nouvelle fonction permettant de supprimer une tâche existante
  const deleteTodo = (indexToDelete) => {
    // Remplace la liste des tâches existantes par une nouvelle liste contenant...
    setTodos(
      // ...toutes les tâches actuelle, sauf celle passée en paramètre
      todos.filter( (item, index) => index !== indexToDelete )
    );
  }

  // Crée une nouvelle fonction permettant de modifier une tâche existante
  const updateTodo = (indexToUpdate, newTodo) => {
    // Remplace la tâche demandée par la nouvelle tâche reçue en paramètre
    todos.splice(indexToUpdate, 1, newTodo);
    // Met à jour la liste des tâches existantes
    setTodos( [...todos] );
  }

  // Emballe la liste des tâches ainsi que les fonctions qui permettent de la trasnformer
  // dans un objet prêt à être passé au contexte
  const contextValue = {
    todos,
    addTodo,
    updateTodo,
    deleteTodo,
  };

  return (
    <Layout>
      <TodoContext.Provider value={contextValue}>
        <h1>Ma liste de courses</h1>

        <p>Vous avez fini {todos.filter( todo => todo.done ).length} tâches sur {todos.length}.</p>

        <TodoList />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Entrez une nouvelle tâche"
            onChange={(event) => setNewTodo(event.target.value)}
            value={newTodo}
          />
          <Button color="blue" dark disabled={newTodo === ''}>
            <RiMenuAddLine /> Ajouter
          </Button>
        </form>
      </TodoContext.Provider>
    </Layout>
  );
}

export default App;
