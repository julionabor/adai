import assinatura from "../../img/assinatura.jpg"
import poster from "../../img/adaixnariz.jpg"
import poster2 from "../../img/travancaxadai.png"
import barraca from "../../img/barraca.jpg"
import Card from "../layout/Card"

import styles from './Home.module.css'
import { Link } from "react-router-dom"

function Home () {
  return (
    <section className={styles.section_home}>
    <h1>
        Bem vindo a Associação Desportiva dos Imigrantes
    </h1>
    <h3 className={styles.subtitle}>Associa-te a nós e obtenha imensas vantagens e descontos em nossos parceiros.
      Quer saber mais? <br /> <Link to="/Associar" >Clique aqui...</Link>
    </h3>
    
    <div className={styles.notices}>
      <Card 
        img={assinatura}
        title="Assinatura do contrato"
        text="Na sexta feira ocorreu a assinatura do nosso contrato com a Camara de Sao Joao da Madeira"
      />
      <Card 
        img={poster2}
        title="Travanca 0 x 1 ADAI"
        text="Em partida díficil, ADAI supera adversário com 1 a menos."
      />
      <Card 
        img={barraca}
        title="Feira de Natal"
        text="Ja temos nossa barraca montada, com produtos exclusivos do Brasil. Venha nos conhecer"
      />
      <Card 
        img={poster}
        title="Nariz 0 x 1 ADAI"
        text="ADAI vence fora de casa debaixo de forte chuva."
      />
    </div>
  </section>
  )
}
export default Home