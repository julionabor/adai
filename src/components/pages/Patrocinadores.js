import patrocinador from "../../img/patrocinador (1).jpg"
import patrocinador2 from "../../img/patrocinador (2).jpg"
import patrocinador3 from "../../img/patrocinador (3).jpg"
import patrocinador4 from "../../img/patrocinador (4).jpg"
import patrocinador5 from "../../img/patrocinador (5).jpg"
import patrocinador6 from "../../img/patrocinador (6).jpg"
import patrocinador7 from "../../img/patrocinador (7).jpg"

import styles from './Patrocinadores.module.css'

function Patrocinadores () {
  return (
    <section>
      <h1>
        Seja você também um patrocinador da Associação.
      </h1>
    <p>Entre em contacto connosco e descubra os benefícios em ser nosso parceiro.</p><br />
    <h3>E você que pretende ser associado, obtenha descontos especiais nos seguintes segmentos:</h3>
    <div className={styles.patrocinadores}>
      <img src={patrocinador} alt="48 e Pico" />
      <img src={patrocinador2} alt="48 e Pico" />
      <img src={patrocinador3} alt="48 e Pico" />
      <img src={patrocinador4} alt="48 e Pico" />
      <img src={patrocinador5} alt="48 e Pico" />
      <img src={patrocinador6} alt="48 e Pico" />
      <img src={patrocinador7} alt="48 e Pico" />
    </div>
    </section>
  )
}
export default Patrocinadores