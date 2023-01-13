import presidente from '../../../img/diretoria/ronaldo.jpg'
import diretor1 from '../../../img/diretoria/luciano.jpg'
import diretor2 from '../../../img/diretoria/renato.jpg'

import styles from './Diretoria.module.css'
import Container from '../../layout/Container'

function Diretoria () {
  return (
    <Container>
      <h1>Diretoria</h1>
      <div className={styles.diretoria}>
          <div>
            <img src={presidente} alt="" />
            <h4>Presidente: Ronaldo Pereira</h4>
            <p>Idade: 45 anos</p>
          </div>
          <div>
            <img src={diretor1} className={styles.foto_diretoria} alt="" />
            <h4>Diretor: Luciano Oliveira</h4>
            <p>Idade: 40 anos</p>
          </div>
          <div>
            <img src={diretor2} className={styles.foto_diretoria} alt="" />
            <h4>Diretor: Renato Costa</h4>
            <p>Idade: 40 anos</p>
          </div>
        </div>
  </Container>
  )
}
export default Diretoria