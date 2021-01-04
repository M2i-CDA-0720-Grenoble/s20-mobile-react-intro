import './App.css';

import TodoList from './components/TodoList';

function App() {
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
