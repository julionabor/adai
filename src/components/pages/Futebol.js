import plantel from '../../img/postersemfundo.png'
import jogadores from '../../img/team.png'
import comissao from '../../img/coach.png'
import diretoria from '../../img/diretor.png'
import galeria from '../../img/fotografia.png'
import jogos from '../../img/calendario.png'

import styles from './Futebol.module.css' 
import { Link } from 'react-router-dom'
import Enquete from './Enquete'
import Container from '../layout/Container'

function Futebol() {
  return (
    <Container>
      <h1> Plantel </h1>
      <div className={styles.topo} >
        <img src={plantel} alt="" className={styles.poster}   />
        <Enquete />
      </div>
        <div className={styles.menuFutebol} >
          <div className={styles.cardInfo}>
            <span><p><strong>Próximo Jogo: </strong> "Os Arrifanenses"</p></span>
            <span><p><strong>Data Jogo: </strong> 17/12 as 19h</p></span>
            <span><strong>Campeonato: </strong><p> 3º Colocado</p></span>
            <span><strong>Melhor Marcador: </strong><p> Mineiro</p></span>
            <span><strong>Rei das Assistências: </strong><p> João</p></span>
          </div>
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