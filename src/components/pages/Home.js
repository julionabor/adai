import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import { GiSoccerField,GiCalendar,GiPhotoCamera } from "react-icons/gi";

import patrocinador from "../../img/patrocinadores/patrocinador (1).jpg"
import patrocinador2 from "../../img/patrocinadores/patrocinador (2).jpg"
import patrocinador3 from "../../img/patrocinadores/patrocinador (3).jpg"
import patrocinador4 from "../../img/patrocinadores/patrocinador (4).jpg"
import patrocinador5 from "../../img/patrocinadores/patrocinador (5).jpg"
import patrocinador6 from "../../img/patrocinadores/patrocinador (6).jpg"
import patrocinador7 from "../../img/patrocinadores/patrocinador (7).jpg"

import team2 from "../../img/icons/team2.png"
import calendario from "../../img/icons/calendario.png"
import fotografia from "../../img/icons/fotografia.png"
import individual from "../../img/icons/individual.png"
import familiar from "../../img/icons/familiar.png"
import pelada from "../../img/pelada.jpg"
import poster3 from "../../img/adaixadrav.jpg"
import cidade_jardim from "../../img/cidade-jardim.png"
import irs from "../../img/IRS.jpg"
import classificacao from "../../img/classificacao3103.jpg"

import video from "../../img/carnaval/video_carnaval.mp4"
import video2 from "../../img/carnaval/video_carnaval2.mp4"
import imgcarnaval from "../../img/carnaval/1.jpg"
import imgcarnaval2 from "../../img/carnaval/2.jpg"
import imgcarnaval3 from "../../img/carnaval/3.jpg"
import imgcarnaval4 from "../../img/carnaval/4.jpg"


import Card from "../layout/Card"

import styles from './Home.module.css'
import associar from './Associar.module.css'

import { Link } from "react-router-dom"
import Container from "../layout/Container"
/* import { CarouselCard } from '../carousel/CarouselCard'; */


function Home () {

  
  return (
    <Container>
       
      <section className={styles.section_home}>
        <div className={styles.patrocinio}>
          <h3 className={styles.subtitle}>Apoio:</h3>
          <Link to="/patrocinadores">
          <Carousel show={2.5} children={true} slide={2} swiping={true} infinite={true} responsive={true}>
            <img src={patrocinador} alt="48 e Pico" className={styles.img_patrocinador} />
            <img src={patrocinador2} alt="48 e Pico" className={styles.img_patrocinador} />
            <img src={patrocinador3} alt="48 e Pico" className={styles.img_patrocinador} />
            <img src={patrocinador4} alt="48 e Pico" className={styles.img_patrocinador} />
            <img src={patrocinador5} alt="48 e Pico" className={styles.img_patrocinador} />
            <img src={patrocinador6} alt="48 e Pico" className={styles.img_patrocinador} />
            <img src={patrocinador7} alt="48 e Pico" className={styles.img_patrocinador} />
          </Carousel>
          </Link>
        </div>
        <div className={styles.wallpapper}>
          <div className={styles.card_futebol}>
            <img src={team2} alt="48 e Pico" className={styles.img_patrocinador} />
            <button><GiSoccerField /><Link to="/jogadores">Plantel</Link>  </button>
          </div>
          <div className={styles.card_futebol}>
            <img src={calendario} alt="48 e Pico" className={styles.img_patrocinador} />
            <button><GiCalendar /><Link to="/jogos">Jogos</Link>  </button>
          </div>
          <div className={styles.card_futebol}>
            <img src={fotografia} alt="48 e Pico" className={styles.img_patrocinador} />
            <button><GiPhotoCamera /><Link to="/galeria"> Fotos </Link></button>
          </div>
        
      </div>
        <div className={styles.notices}>
          <h3 className={styles.subtitle}>
            Carnaval Em São João da Madeira
          </h3>
          <div className={styles.carnaval}>
            <video controls width="40%"  muted autoPlay>
              <source src="/video-example.webm" type="video/webm" />
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <video controls width="40%">
              <source src="/video-example.webm" type="video/webm" />
              <source src={video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className={styles.carnaval}>
            <img src={imgcarnaval} alt="Carnaval São João da Madeira"  />
            <img src={imgcarnaval2} alt="Carnaval São João da Madeira"  />
            <img src={imgcarnaval3} alt="Carnaval São João da Madeira"  />
            <img src={imgcarnaval4} alt="Carnaval São João da Madeira"  />
          </div>
        </div>
        <h3 className={styles.subtitle}>Associa-te a nós e obtenha imensas vantagens e descontos em nossos parceiros.
          Quer saber mais? <br /> <Link to="/Associar" >Clique aqui</Link>
        </h3>
        <div className={styles.planos} >
          <div className={associar.selectPlan}>
              <Link to="/associar/individual">
                <div className={associar.cardPlano} /*onClick={(e) => showplano(e,"individual")}*/>
                  <h2>Plano Individual</h2>
                  <img src={individual} alt="Plano Individual"  />
                  <legend>
                    <strong>Valor:</strong> 
                    5,00€ por mês
                  </legend>
                </div>
              </Link>
              <Link to="/associar/familiar">
                <div className={associar.cardPlano}>
                    <h2>
                      Plano Familiar
                    </h2>
                    <img src={familiar} alt="Familiar"  />
                    <legend>
                      <strong>Valor:</strong> 
                      12,00€ por mês (pode incluir até 5 pessoas)
                    </legend>
                  </div>
              </Link>
          </div>
        </div>
        <div className={styles.notices}>
          <Card 
            img={irs}
            title="Mês do IRS (Abril)"
            subtitle="Você sabia que como Associado, você tem desconto com nosso contabilista?"
            text="Você sabia que ao declarar seu IRS e comunicar nossa associação, você pode estar colaborando conosco sem ter nenhum prejuizo?
            Muito pelo contrario até, nos do ADAI pensamos em ti e conseguimos negociar um desconto para todos que comunicarem nosso NIF no IRS e paga apenas 10€ com nosso contabilista. Aproveite!"
          />
              <Card 
                img={cidade_jardim}
                title="Evento Cidade no Jardim"
                subtitle="A Cidade no Jardim de 9 a 13 de junho"
                text="Tasquinhas, stands e muitas atividades de palco no Jardim Municipal. Evento tem como protagonistas as associações e instituições sanjoanenses.
  
                Já é quase uma tradição no início de junho: o Jardim Municipal de S. João da Madeira transforma-se no ponto de encontro dos sanjoanenses e de muitos visitantes. Este ano não foge à regra, com a 14.ª edição do evento “A Cidade no Jardim” a proporcionar cinco dias de animado convívio, num recinto repleto de propostas interessantes para o público de todas as idades.
                 
                Assim, de 9 a 13 de Junho, o Jardim Municipal (junto ao edifício da Câmara), acolhe mais de 80 stands de exposição, cerca de duas dezenas de tasquinhas e um diversificado programa de animação. Tudo isto com a chancela das associações e instituições locais, grandes protagonistas deste certame promovido pela autarquia e que, todos os anos, atrai milhares de pessoas.
                 
                Este é, por excelência, o momento em que o movimento associativo sanjoanense mostra a sua atividade nos stands de exposição, assegurando simultaneamente a vertente gastronómica do evento nas 23 tasquinhas, assim como a animação de palco e de todo o recinto, onde haverá música, dança, teatro, zumba, concursos, recriações, desporto, rastreios de saúde, sensibilização ambiental, campanha de adoção de animais, ações de solidariedade..."
              />
            <Card 
              img={classificacao}
              title="Classificação Inatel 22/23"
              subtitle="Após a derrota contra o ADRAV, a nossa equipa sofreu uma grave descida na tabela, confira."
              text="Após o último jogo, a equipa do ADAI encontra-se em 5º lugar. Infelizmente, os ultimos jogos são para cumprir tabela uma vez que a equipa não possui matematicamente chances de classificação."
            />
            <Card 
              img={poster3}
              title="ADAI 0 x 2 ADRAV"
              subtitle="No derby da cidade, nossa equipa sofreu derrota por 2 bolas."
              text="Num jogo bastante disputado e por vezes ate tenso, a equipa do ADRAV conseguiu conquistar os 3 pontos.
                    Em um dia que a arbitragem novamente tomou os centro das atenções, tendo decisões extremamente polemicas e discutíveis, na qual 
                    assinalou 2 penaltis para a equipa do ADRAV, em que o primeiro deu lugar a inauguração do placar.
                    Minutos depois, num lance de contacto normal, que nem o proprio jogador do ADRAV contestou, foi marcado outro penalti, que desta vez, desperdiçado pela equipa visitante.
                    O encontro seguiu com muitas faltas, bastante discussões entre os jogadores.
                    Numa bola em que nosso defesa esquerdo André invadiu a área e foi derrubado pelo opositor, o árbitro marcou falta, que gerou grande revolta
                    na equipa do ADAI.
                    Posteriormente, ja na segunda parte, o ADRAV ampliou o placar em jogada pelo lado direito, com um toque para tras, o avançado completou com remate colocado fechando o placar."
            />
            <Card 
              img={pelada}
              title="Pelada de Futebol"
              subtitle="Venha conhecer nossa pelada semanal"
              text="Entre em contacto conosco e venha participar da nossa pelada. Todos os domingos, as 9h iniciamos nossa pelada.
              Algumas vezes, ate sobra espaço para fazermos um churrasco. Vem fazer parte você também!
              Associado ADAI possui desconto!"
            />
            <Card 
              img={imgcarnaval2}
              title="Carnaval Sao Joao da Madeira"
              subtitle="Este foi nosso primeiro ano juntos no carnaval da cidade"
              text="Em conjunto com a Camara Municipal de Sao Joao da Madeira, com um bloco com cerca de 200 pessoas , no dia 11/02 desfilamos pela cidade
              junto com o carnaval das escolas. Certamente, para quem la esteve, foi um momento extremamente inesquecivel.
              Associa-te e nao perca mais nossos eventos."
            />
      </div>
      {/* <CarouselCard /> */}
  </section>
  </Container>
  )
}
export default Home