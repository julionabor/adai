import { Link } from 'react-router-dom'
import { BiEdit, BiHome } from 'react-icons/bi'
import { FaPoll, FaSlackHash, FaPhoneSquareAlt, FaInfoCircle, FaFutbol } from 'react-icons/fa'

import styles from './Navbar.module.css'
import logo from '../../img/adai.jpg'

function Navbar () {
  return (
    <nav>
    <div className={styles.menu}>
      <img src={logo} alt="Associação Desportiva dos Imigrantes" />
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/"><BiHome /> Home</Link>
        </li>
        <li className={styles.item}>
          <Link to="/about"><FaSlackHash /> Sobre Nós</Link>
        </li>
        <li className={styles.item}>
          <Link to="/futebol"><FaFutbol /> Futebol</Link>
        </li>
        <li className={styles.item}>
          <Link  to="/patrocinadores"><FaInfoCircle /> Patrocinadores</Link>
        </li>
        <li className={styles.item}>
          <Link  to="/associar"><BiEdit /> Associar-se</Link>
        </li>
        <li className={styles.item}>
          <Link  to="/contact"><FaPhoneSquareAlt /> Contactos</Link>
        </li>
      </ul>
    
    <div className={styles.enquete}>
    <FaPoll />
    <h4>Craque da galera: </h4>
    <p>Quem foi o melhor jogador do último jogo?</p> <br />
    <select>
      <option>Selecione o jogador</option>
      <option>12- Christian</option>
      <option>3- Anderson</option>
      <option>4- Thiago</option>
      <option>5- Gegê</option>
      <option>2- João</option>
      <option>6- Washington</option>
      <option>8- Hiago</option>
      <option>7- Di Maria</option>
      <option>10- Feitosa</option>
      <option>11- Julio</option>
      <option>9- Mineiro</option>
      <option>12- Emanuel</option>
      <option>13- Vitinho</option>
      <option>15- Paulo</option>
      <option>14- Nino</option>
      <option>16- Angerson</option>
      <option>18- Henrik</option>
      <option>17- Lucas</option>
    </select>
    <button>Votar</button>
  
  </div>
  </div>
  </nav>
  )
}
export default Navbar