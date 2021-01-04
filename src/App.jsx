import './App.css';

import TodoList from './components/TodoList';
import Layout from './components/Layout';

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
    <Layout>
      <h1>Ma liste de courses</h1>
      <TodoList todos={todos} />
    </Layout>
  );
}

export default App;
