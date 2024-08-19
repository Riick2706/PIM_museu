import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TesteComponente from './screens/testeComponente';
import './styles/base.css'

import ArteModerna from './screens/arteModerna';
import SantosDumont from './screens/santosDumont';
import SkinsVirtuais from './screens/skinsVirtuais';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/artes' element={<ArteModerna />} />
      <Route path='/dumont' element={<SantosDumont />} />
      <Route path='/skinsVirtuais' element={<SkinsVirtuais />} />
      <Route path="teste" element={<TesteComponente />} />
    </Routes>
  </BrowserRouter>
);
