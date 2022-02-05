import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import './App.css';
import Main from 'Pages/Main';
import Bookmark from 'Pages/Bookmark';

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/category/:selected" element={<Main />} />
          <Route path="/:bookmark" element={<Bookmark />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
