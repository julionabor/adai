import plantel from '../../img/postersemfundo.png'
import jogadores from '../../img/team.png'
import comissao from '../../img/coach.png'
import diretoria from '../../img/diretor.png'
import galeria from '../../img/fotografia.png'
import jogos from '../../img/calendario.png'

import styles from './Futebol.module.css' 
import { Link } from 'react-router-dom'

function Futebol() {
  return (
    <section>
      <h1> Plantel </h1>
      <img src={plantel} className={styles.poster} alt="" />
        <article>
        <div className={styles.menuFutebol} >
          <div className={styles.item_plantel}>
            <Link to="/jogadores">
              <img src={jogadores} alt="" />
              <p>Jogadores</p>
            </Link>
          </div>
          <div className={styles.item_plantel}>
            <img src={comissao} alt="" />
            <p>Comissão Técnica</p>
          </div>
          <div className={styles.item_plantel}>
            <img src={diretoria} alt="" />
            <p>Diretoria</p>
          </div>
          <div className={styles.item_plantel}>
            <img src={galeria} alt="" />
            <p>Galeria de Fotos</p>
          </div>
          <div className={styles.item_plantel}>
            <img src={jogos} alt="" />
            <p>Jogos da Época</p>
          </div>
          
        </div>

      </article>
    </section>
  )
        
       
}
export default Futebol