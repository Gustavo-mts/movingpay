import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/mainComponents/Header';
import MakeSale from './Components/pages/makeSale';
import MakeSalesman from './Components/pages/makeSalesman';
import ListSale from './Components/pages/listSale';
import ListSalesman from './Components/pages/listSalesman'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/sales" element={<MakeSale />} />
          <Route path="/" element={<MakeSalesman />} />
          <Route path="/listsale" element={<ListSale />} />
          <Route path="/listsalesman" element={<ListSalesman />} />
        </Routes>
    </div>
  );
}

export default App;
