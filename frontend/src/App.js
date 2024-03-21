// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from './components/create';
import View from './components/view';
import Update from './components/Update';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/view" element={<View />} />
        <Route path="/update/:id" element={<Update />} />
        
      </Routes>
    </Router>
  );
}

export default App;
