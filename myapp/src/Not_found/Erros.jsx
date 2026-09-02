import '../Not_found/Erros.scss'
import { Link } from 'react-router-dom';

export default function Erros() {
  return (
    <div className="Erros">
      <h1>404 - Página não encontrada</h1>
      <Link to="/Landing">Voltar para a página inicial</Link>
    </div>
  );
}