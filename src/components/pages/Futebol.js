import plantel from '../../img/postersemfundo.png'
import jogadores from '../../img/icons/team2.png'
import comissao from '../../img/icons/coach.png'
import diretoria from '../../img/icons/diretor.png'
import galeria from '../../img/icons/fotografia.png'
import jogos from '../../img/icons/calendario.png'

import styles from './Futebol.module.css' 
import { Link } from 'react-router-dom'

import Container from '../layout/Container'

function Futebol() {
  return (
    <Container>
      <h1> Plantel </h1>
      <div className={styles.topo} >
        <img src={plantel} alt="" className={styles.poster}   />
        
      </div>
        <div className={styles.menuFutebol} >
          
          <div className={styles.item_plantel}>
            <Link to="/jogadores">
              <img src={jogadores} alt="" />
              <p>Jogadores</p>
            </Link>
          </div>
          <div className={styles.item_plantel}>
            <Link to="/comissao">
              <img src={comissao} alt="" />
              <p>Comissão Técnica</p>
            </Link>
          </div>
          <div className={styles.item_plantel}>
            <Link to="/diretoria">
              <img src={diretoria} alt="" />
              <p>Diretoria</p>
            </Link>
          </div>
          <div className={styles.item_plantel}>
            <Link to="/galeria">
              <img src={galeria} alt="" />
              <p>Galeria de Fotos</p>
            </Link>
          </div>
          <div className={styles.item_plantel}>
            <Link to="/jogos">
              <img src={jogos} alt="" />
              <p>Jogos da Época</p>
            </Link>
          </div>
          
        </div>

    </Container>
  )
        
       
}
export default Futebol