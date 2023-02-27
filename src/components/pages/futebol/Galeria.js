
import fotografa from '../../../img/kamylle.png'
import Container from '../../layout/Container'
import Voltar from '../Voltar'
import FotosGaleria from './FotosGaleria'

import styles from './Galeria.module.css'

function Galeria () {
  return (
    <Container>
      <section>
        <h1>Galeria de fotos</h1>
        <Voltar />
        <div className={styles.galeria}>
          <div className={styles.fotografa} >
            <a href="https://instagram.com/kamyllefotografias" target="blank"><img src={fotografa} alt="" /></a>
            <h5>Fotógrafa:</h5> 
            <p>Kamylle Santos</p>
          </div>
          <div className={styles.subtitulo}>
            <h2>Foto dos Jogos</h2>
          </div>
          <div className={styles.foto_jogos}>
            <FotosGaleria  />
          </div>
      </div>
    </section>
    </Container>

  )
}
export default Galeria