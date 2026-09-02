import './App.scss';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <section className='mae'>
          <div className='Logo'>
            <Link to="/Contatos">
            <img src='../assets/images/cachorro.png' alt="Contatos" className='dogão'/>
            </Link>
          </div>
          <div className='Pesquisa'>
            <input type="text" className='Caixinha' placeholder='Buscar produtos, marcas e muito mais...'/>
          </div>
          <div className='GifTufo'>
            <a href="https://www.mercadolivre.com.br/assinaturas/melimais/planos?plan_selected=MEGA#origin=bannermenu-acq-PROMOMEGA-240826_080926&me.audience=all&me.bu=3&me.bu_line=26&me.component_id=banner_menu_web_ml&me.content_id=BM_SOV_LOYALTY_ACQUISITION_PROMOLOGOS_2408&me.flow=-1&me.logic=user_journey&me.position=0">
              <img src="https://http2.mlstatic.com/D_NQ_988245-MLA114606762646_082026-OO.webp" alt="" className='Prop'/>
              </a>
            </div>  
 </section>
     
    </div>
  );
}