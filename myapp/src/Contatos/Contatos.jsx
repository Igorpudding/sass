import './Contatos.scss';
import { Link } from 'react-router-dom';
export default function Contato() {
  return (
    <div className="Contato">
      <section className='Header'>
        <h3>Passa o zap</h3>
        <Link to="/">Voltar para a página inicial</Link>
      </section>
    </div>
  );
}