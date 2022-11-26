import React from 'react';
import './App.css';
import RecipesList from "./app/components/RecipesList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        RECEPTY
      </header>
      <div className='ui container'>
        <RecipesList />
      </div>
    </div>
  );
}

export default App;
