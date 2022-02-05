import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import './App.css';
import Main from 'Pages/Main';
import Category from 'Pages/Category';

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/category/:selected" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
