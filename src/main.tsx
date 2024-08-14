import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TesteComponente from './screens/testeComponente';
import './styles/base.css'

import ArteModerna from './screens/arteModerna';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='arte' element={<ArteModerna />} />
          <Route path="teste" element={<TesteComponente />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
