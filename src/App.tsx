import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import './App.css';
import Main from 'Pages/Main';

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/category/:selected" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
