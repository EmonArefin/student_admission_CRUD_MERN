import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FirstPage/>}/>
          <Route path='/registration' element={<SecondPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
