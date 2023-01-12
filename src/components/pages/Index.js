import logo from '../../img/adai1.png'
import bandeiras from '../../img/bandeira.png'
import { Link } from 'react-router-dom'

import styles from './Index.module.css'

function Index () {
  return (
  <main>
    <div className={styles.capa}>
        <div className={styles.adai}>
          <img src={logo} alt="Associação Desportiva do Imigrante" /> 
          <h2>Bem vindo ao site da Associação Desportiva do Imigrante</h2>
          <p>Aqui você poderá acompanhar nossas novidades da equipa e os nossos novos projectos.</p>
        
        </div>
        <div>
          <img src={bandeiras} alt="Associação Desportiva do Imigrante" /> 
        </div>
      <div>
        <Link to="/home">Entrar</Link>
      </div>
    </div>
  </main>
  )
}
export default Index