import assinatura from "../../img/assinatura.jpg"
import Container from "../layout/Container"

import styles from './About.module.css'

function About() {
  return(
    <Container>
        <h1> Sobre Nós</h1>
        <img src={assinatura} alt="Assinatura" className={styles.imgAbout} />
          <article className={styles.textAbout} >
            <p>Fundada no ano de 2022, a Associação Desportiva dos Imigrantes, 
            com sede em São João da Madeira, foi criada com intuito de criar e 
            participar de projetos desportivos e culturais na cidade. </p>
            <p> Contando com mais de 40 associados, a Associação tem cumprido
            seu papel junto da Camara Municipal de São João da Madeira, 
            começando pela equipa de futebol inscrita na Liga Inatel, e 
            articulando outros projetos como carnaval, feira de Natal, projetos desportivos 
            e entre outros. 
          </p>
        </article>
  </Container>
  )
}
export default About