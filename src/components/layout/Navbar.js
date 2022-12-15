import { Link } from 'react-router-dom'
import { BiEdit, BiHome } from 'react-icons/bi'
import { FaSlackHash, FaPhoneSquareAlt, FaInfoCircle, FaFutbol, FaFacebook, FaInstagram } from 'react-icons/fa'


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
      
    
  <div className={styles.redes_sociais}>
        <p>Siga-nos nas redes sociais:</p>
        <span>
          <a href="/"><FaFacebook /></a>
          <a href="https://www.instagram.com/adesportivaimigrante"><FaInstagram /></a>
        </span>
      </div>
  </div>
  <div className={styles.menu_responsivo}>
     <span>
      <ul>
        <li>
        <Link to="/"><BiHome /> </Link>
        </li>
        <li>
          <Link to="/about"><FaSlackHash /></Link>
        </li>
        <li>
          <Link to="/futebol"><FaFutbol /></Link>
        </li>
        <li>
          <Link to="/patrocinadores"><FaInfoCircle /></Link>
        </li>
        <li>
          <Link to="/associar"><BiEdit /></Link>
        </li>
        <li>
        <Link to="/contact"><FaPhoneSquareAlt /></Link>
        </li>
       
      </ul>
      </span>  
      
    </div>
    
</nav>
)
}
export default Navbar