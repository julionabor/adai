import treinador from '../../../img/comissao/marcus.jpg'
import auxiliar from '../../../img/comissao/julio.jpg'
import treinador_goleiro from '../../../img/comissao/jesse.jpg'

import styles from './Comissao.module.css'
import Container from '../../layout/Container'

function Comissao () {
  return (
    <Container>
        <h1>Comissão Técnica</h1>
        <div className={styles.comissao}>
            <div>
              <img src={treinador} alt="" />
              <h4>Treinador: Marcus Manfredo</h4>
              <p>Idade: 31 anos</p>
            </div>
            <div>
              <img src={auxiliar} className={styles.foto_comissao} alt="" />
              <h4>Auxiliar: Julio Nabor</h4>
              <p>Idade: 31 anos</p>
            </div>
            <div>
              <img src={treinador_goleiro} className={styles.foto_comissao} alt="" />
              <h4>Auxiliar: Jesse Oliveira</h4>
              <p>Idade: 31 anos</p>
            </div>
          </div>
  </Container>
  )
}
export default Comissao