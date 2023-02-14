import React from 'react';
import './App.css';
import RecipeDetail from './app/components/RecipeDetail';
import RecipesList from "./app/components/RecipesList";
import { Container } from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        RECEPTY
      </header>
      <Container>
        <RecipeDetail/>
      </Container>
      <Container>
        <RecipesList />
      </Container>
    </div>
  );
}

export default App;
