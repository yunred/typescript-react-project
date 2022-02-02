import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Main from 'Pages/Main';
import Category from 'Pages/Category';

function App() {
  return (
    <>
      <Route path="/" component={Main} />
      <Route path="/category/:selected" component={Category} />
    </>
  );
}

export default App;
