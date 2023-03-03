import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';

import patrocinador from "../../img/patrocinador (1).jpg"
import patrocinador2 from "../../img/patrocinador (2).jpg"
import patrocinador3 from "../../img/patrocinador (3).jpg"
import patrocinador4 from "../../img/patrocinador (4).jpg"
import patrocinador5 from "../../img/patrocinador (5).jpg"
import patrocinador6 from "../../img/patrocinador (6).jpg"
import patrocinador7 from "../../img/patrocinador (7).jpg"

import assinatura from "../../img/assinatura.jpg"
import poster from "../../img/adaixnariz.jpg"
import poster2 from "../../img/travancaxadai.png"
import barraca from "../../img/barraca.jpg"
import passista from "../../img/passista.jpg"
import classificacao from "../../img/tabela2401.png"
import Card from "../layout/Card"

import styles from './Home.module.css'
import { Link } from "react-router-dom"
import Container from "../layout/Container"

function Home () {

  
  return (
    <Container>
      <section className={styles.section_home}>
      <h1>
          Bem vindo a Associação Desportiva dos Imigrantes
      </h1>

      <Carousel show={2.5} children={true} slide={2} swiping={true} infinite={true} responsive={true}>
        <img src={patrocinador} alt="48 e Pico" className={styles.img_patrocinador} />
        
        
        <img src={patrocinador2} alt="48 e Pico" className={styles.img_patrocinador} />
        <img src={patrocinador3} alt="48 e Pico" className={styles.img_patrocinador} />
        <img src={patrocinador4} alt="48 e Pico" className={styles.img_patrocinador} />
        <img src={patrocinador5} alt="48 e Pico" className={styles.img_patrocinador} />
        <img src={patrocinador6} alt="48 e Pico" className={styles.img_patrocinador} />
        <img src={patrocinador7} alt="48 e Pico" className={styles.img_patrocinador} />
      </Carousel>
      <h3 className={styles.subtitle}>Associa-te a nós e obtenha imensas vantagens e descontos em nossos parceiros.
        Quer saber mais? <br /> <Link to="/Associar" >Clique aqui</Link>
      </h3>
      
      <div className={styles.notices}>
        <Card 
          img={classificacao}
          title="Classificação Inatel 22/23"
          text="Após a pesada derrota em Pigeiros, a nossa equipa sofreu uma grave descida na tabela, confira."
        />
        <Card 
          img={passista}
          title="Carnaval SJM"
          text="Iniciamos os preparativos do nosso carnaval em conjunto com a Camara de São João da Madeira."
        />
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
  </Container>
  )
}
export default Home