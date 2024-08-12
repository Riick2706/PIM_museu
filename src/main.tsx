import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import TesteComponente from './screens/testeComponente';
import './styles/base.css';
import Navbar from './components/layout/SwitchHeader';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="teste" element={<TesteComponente />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
