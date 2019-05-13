import React from 'react';
import Todo from './todo.js';
import Doing from './doing.js';
import Done from './done.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Todo />
      <Doing />
      <Done />
    </div>
  );
}

export default App;
