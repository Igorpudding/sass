import './index.css';
import App from './Landing_page/App';
import Contato from './Contatos/Contatos.jsx';
import Erros from './Not_found/Erros.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Contatos" element={<Contato />} />
        <Route path="*" element={<Erros />} />
      </Routes>
    </BrowserRouter>
  );
}