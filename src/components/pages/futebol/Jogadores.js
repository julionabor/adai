import CardJogador from './CardJogador'
import styles from './Jogadores.module.css'

import christian from '../../../img/jogadores/christian.jpg'
import anderson from '../../../img/jogadores/anderson.jpg'
import thiago from '../../../img/jogadores/thiago.jpg'
import angerson from '../../../img/jogadores/angerson.jpg'
import beto from '../../../img/jogadores/beto.jpg'
import delcio from '../../../img/jogadores/delcio.jpg'
import edu from '../../../img/jogadores/edu.jpg'
import guibala from '../../../img/jogadores/guibala.jpg'
import henrik from '../../../img/jogadores/henrik.jpg'
import hiago from '../../../img/jogadores/hiago.jpg'
import italo from '../../../img/jogadores/italo.jpg'
import jonatas from '../../../img/jogadores/jonatas.jpg'
import Julio from '../../../img/jogadores/Julio.jpg'
import mineiro from '../../../img/jogadores/mineiro.jpg'
import nino from '../../../img/jogadores/nino.jpg'
import lucas from '../../../img/jogadores/lucas.jpg'
import russo from '../../../img/jogadores/russo.jpg'
import arthur from '../../../img/jogadores/arthur.jpg'
import feitosa from '../../../img/jogadores/feitosa.jpg'
import raul from '../../../img/jogadores/raul.jpg'
import vitinho from '../../../img/jogadores/vitinho.jpg'
import paulo from '../../../img/jogadores/paulo.jpg'

import foto from '../../../img/icons/user.png'

import Container from '../../layout/Container'
import Voltar from '../Voltar'

function Jogadores () {
  return (
    <Container>
    <section>
      <h1>Jogadores Época 22/23</h1>
      <Voltar />
      <div className={styles.jogadores}>
        <h2>Guarda Redes</h2>
        <div className={styles.posicao}>
        
        {/* <div className={styles.player} >
          <div className={styles.front} > <img src={christian} alt="" /></div>
          <div className={styles.back} >
            <p>Guarda Redes</p>
            <p>Clubes:</p>
            <p>Jogos: 7</p>
            <p>Gols Sofridos: 5</p>
          
          </div>
        </div> */}
       {/*  <div className={styles.container_player} > 
          <div className={styles.player_item} >
            <CardJogador
            nome="Cristian"
            posicao="Guarda Redes"
            idade="31 anos"
            natural="Minas Gerais/Brasil"
            foto={christian}
            />
         </div>
          <div className={styles.player_item} >
            <CardJogador
            nome="Cristian"
            posicao="Guarda Redes"
            idade="31 anos"
            natural="Minas Gerais/Brasil"
            foto={christian}
            />
         </div>
          <div className={styles.player_item} >
            <CardJogador
            nome="Cristian"
            posicao="Guarda Redes"
            idade="31 anos"
            natural="Minas Gerais/Brasil"
            foto={christian}
            />
         </div>
       
         
          
        </div> */}
        <CardJogador
          nome="Cristian"
          posicao="Guarda Redes"
          idade="31 anos"
          natural="Minas Gerais/Brasil"
          foto={christian}
        />
       
      </div>
      <h2>Defesas</h2>
      <div className={styles.posicao}>
        <CardJogador
          nome="Thiago Rodrigues"
          posicao="Defesa Central"
          idade="30 anos"
          natural="Rio de Janeiro/Brasil"
          foto={thiago}
        />
        <CardJogador
          nome="Anderson"
          posicao="Defesa Central"
          idade="37 anos"
          natural="Bahia/Brasil"
          foto={anderson}
        />
        <CardJogador
          nome="Vitinho"
          posicao="Defesa Central"
          idade="24 anos"
          natural="Rio de Janeiro/Brasil"
          foto={vitinho}
        />
        <CardJogador
          nome="Gegê"
          posicao="Defesa Central /Médio Centro"
          idade="28 anos"
          natural="Minas Gerais/Brasil"
          foto={foto}
        />
        
      </div>
      <h2>Laterais</h2>
      <div className={styles.posicao}>
        
        <CardJogador
          nome="André"
          posicao="Defesa Esquerdo"
          idade="28 anos"
          natural="Minas Gerais/Brasil"
          foto={foto}
        />
        <CardJogador
          nome="Washington"
          posicao="Defesa / Médio"
          idade="28 anos"
          natural="Pernambuco/Brasil"
          foto={foto}
        />
       
        <CardJogador
          nome="Pedrinho"
          posicao="Defesa Direito"
          idade="28 anos"
          natural="Minas Gerais/Brasil"
          foto={edu}
        />
      </div>
        <h2>Médios</h2>
      <div className={styles.posicao}>
        <CardJogador
          nome="Ítalo/Di Maria"
          posicao="Médio Centro"
          idade="25 anos"
          natural="Pernambuco/Brasil"
          foto={italo}
        />
        <CardJogador
          nome="Hiago"
          posicao="Médio Defensivo"
          idade="24 anos"
          natural="Paraíba/Brasil"
          foto={hiago}
        />
        <CardJogador
          nome="Arthur"
          posicao="Médio Defensivo"
          idade="19 anos"
          natural="Minas Gerais/Brasil"
          foto={arthur}
        />
        <CardJogador
          nome="Paulo"
          posicao="Medio Centro"
          idade="28 anos"
          natural="Minas Gerais/Brasil"
          foto={paulo}
        />
       
        <CardJogador
          nome="Nino"
          posicao="Medio Ofensivo"
          idade="19 anos"
          natural="Pernambuco/Brasil"
          foto={nino}
        />
        <CardJogador
          nome="Gui Bala"
          posicao="Medio Centro/Ofensivo"
          idade="46 anos"
          natural="Rio de Janeiro/Brasil"
          foto={guibala}
        />
        
        <CardJogador
          nome="Henrik"
          posicao="Medio Ofensivo/Extremo"
          idade="28 anos"
          natural="Alagoas/Brasil"
          foto={henrik}
        />
        <CardJogador
          nome="Julio"
          posicao="Medio Ofensivo/Avançado"
          idade="25 anos"
          natural="Pernambuco/Brasil"
          foto={Julio}
        />
        <CardJogador
          nome="Feitosa"
          posicao="Medio Ofensivo"
          idade="37 anos"
          natural="Pernambuco/Brasil"
          foto={feitosa}
        />
       
      </div>
        <h2>Avançados</h2>
      <div className={styles.posicao}>
        <CardJogador
          nome="Mineiro"
          posicao="Ponta de Lança"
          idade="37 anos"
          natural="Minas Gerais/Brasil"
          foto={mineiro}
        />
        
        <CardJogador
          nome="Lucas"
          posicao="Extremo"
          idade="19 anos"
          natural="Minas Gerais/Portugal"
          foto={lucas}
        />
        <CardJogador
          nome="Angerson"
          posicao="Extremo/Avançado"
          idade="21 anos"
          natural="Pernambuco/Brasil"
          foto={angerson}
        />
        <CardJogador
          nome="Russo"
          posicao="Avançado"
          idade="20 anos"
          natural="-/Russia"
          foto={russo}
        />
        <CardJogador
          nome="Delcio"
          posicao="Extremo/Avançado"
          idade="28 anos"
          natural="Luanda/Angola"
          foto={delcio}
        />
        <CardJogador
          nome="Beto"
          posicao="Ponta de Lança"
          idade="39 anos"
          natural="Rio de Janeiro/Brasil"
          foto={beto}
        />
        
        <CardJogador
          nome="Jonatas"
          posicao="Ponta de Lança"
          idade="32 anos"
          natural="Rio de Janeiro/Brasil"
          foto={jonatas}
        />
        <CardJogador
          nome="Raul"
          posicao="Ponta de Lança"
          idade="26 anos"
          natural="Ceara/Brasil"
          foto={raul}
        />
      </div>
    </div>
    </section>
  </Container>
  )
}
export default Jogadores