import { useState } from 'react';
import { Link } from 'react-router-dom'
import { BiEdit, BiHome } from 'react-icons/bi'
import { FaSlackHash, FaPhoneSquareAlt, FaInfoCircle, FaFutbol, FaFacebook, FaInstagram } from 'react-icons/fa'


import styles from './Navbar.module.css'
import logo from '../../img/logo/adai.png'

function Navbar () {
  const [ active, setMode] = useState(false)
  const ToggleMode = () => {
    setMode(!active)
  }
  
  return (
    <div>
   
    <div className={styles.menu}>
      <img src={logo} alt="Associação Desportiva dos Imigrantes" />
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/home"><BiHome /> Início</Link>
        </li>
        <li className={styles.item}>
          <Link to="/about"><FaSlackHash /> Sobre Nós</Link>
        </li>
        <li className={styles.item}>
          <Link to="/futebol"><FaFutbol /> Futebol</Link>
        </li>
        <li className={styles.item}>
          <Link  to="/comerciante"><FaInfoCircle /> Espaço do Comerciante</Link>
        </li>
        <li className={styles.item}>
          <Link  to="/beneficios"><FaInfoCircle /> Benefícios em ser Sócio</Link>
        </li>
        <li className={styles.item}>
          <Link  to="/associar"><BiEdit /> Quero ser Sócio</Link>
        </li>
        <li className={styles.item}>
          <Link  to="/eventos"><FaInfoCircle /> Próximos Eventos</Link>
        </li>
        <li className={styles.item}>
          <Link  to="/patrocinadores"><FaInfoCircle /> Patrocinadores</Link>
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


      <div className={active ? (`${styles.icon} ${styles.iconActive}`) : styles.icon} onClick={ToggleMode}>
        <div className={(`${styles.hamburguer} ${styles.hamburguerIcon}`)} ></div>
      </div>
    
  
      {active &&
       <> 
      <div className={active ? (`${styles.menu_responsivo} ${styles.menuOpen}`) : `${styles.menu_responsivo} ${styles.menuClose}`}> 
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/home"><BiHome />Pagina Inicial</Link>
          </li>
          <li className={styles.item}>
            <Link to="/about"><FaSlackHash />Sobre Nós</Link>
          </li>
          <li className={styles.item}>
            <Link to="/futebol"><FaFutbol />Futebol</Link>
          </li>
          <li className={styles.item}>
          <Link  to="/comerciante"><FaInfoCircle /> Espaço do Comerciante</Link>
        </li>
        <li className={styles.item}>
          <Link  to="/beneficios"><FaInfoCircle /> Benefícios em ser Sócio</Link>
        </li>
        <li className={styles.item}>
          <Link  to="/associar"><BiEdit /> Quero ser Sócio</Link>
        </li>
        <li className={styles.item}>
          <Link  to="/eventos"><FaInfoCircle /> Próximos Eventos</Link>
        </li>
        <li className={styles.item}>
          <Link  to="/patrocinadores"><FaInfoCircle /> Patrocinadores</Link>
        </li>
          <li className={styles.item}>
            <Link to="/contact"><FaPhoneSquareAlt />Contactos</Link>
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
        </>
        }
  </div>
  )
}
export default Navbar