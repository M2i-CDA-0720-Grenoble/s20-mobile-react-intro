import './App.css';

import TodoList from './components/TodoList';

// Cette façon d'écrire des fonctions est la nouvelle écriture en ES6
// Ces deux écritures sont équivalentes:
//
// const myFunction = (param) => { return param; }
// function myFunction(param) { return param; }
const App = () => {
  const todos = [
    'Bananes',
    'Frites',
    'Poires',
    'Chocolat',
    'Poulet',
    'Produit vaisselle',
    'Papier toilette'
  ];

  return (
    <div className="App">
      <h1 className="App-title">Ma liste de courses</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
