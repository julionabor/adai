import CardJogador from './CardJogador'
import styles from './Jogadores.module.css'

import christian from '../../../img/jogadores/christian.jpg'
import emanuel from '../../../img/jogadores/emanuel.jpg'
import anderson from '../../../img/jogadores/anderson.jpg'
import thiago from '../../../img/jogadores/thiago.jpg'
import angerson from '../../../img/jogadores/angerson.jpg'
import beto from '../../../img/jogadores/beto.jpg'
import delcio from '../../../img/jogadores/delcio.jpg'
import edu from '../../../img/jogadores/edu.jpg'
import feitosa from '../../../img/jogadores/feitosa.jpg'
import guibala from '../../../img/jogadores/guibala.jpg'
import henrik from '../../../img/jogadores/henrik.jpg'
import hiago from '../../../img/jogadores/hiago.jpg'
import italo from '../../../img/jogadores/italo.jpg'
import jonatas from '../../../img/jogadores/jonatas.jpg'
import Julio from '../../../img/jogadores/Julio.jpg'
import marcus_vinicios from '../../../img/jogadores/marcus_vinicios.jpg'
import mineiro from '../../../img/jogadores/mineiro.jpg'
import nino from '../../../img/jogadores/nino.jpg'
import raul from '../../../img/jogadores/raul.jpg'
import foto from '../../../img/user.png'

function Jogadores () {
  return (
    <section>
      <h1>Jogadores</h1>
      <div className={styles.jogadores}>
        <h2>Guarda Redes</h2>
        <div className={styles.posicao}>
        <CardJogador
          nome="Cristian"
          posicao="Guarda Redes"
          idade="31 anos"
          natural="Minas Gerais/Brasil"
          foto={christian}
        />
        <CardJogador
          nome="Emanuel"
          posicao="Guarda Redes"
          idade="28 anos"
          natural="Maceda/Portugal"
          foto={emanuel}
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
          foto={foto}
        />
        <CardJogador
          nome="Lucas Poli/Geg??"
          posicao="Defesa Central /M??dio Centro"
          idade="28 anos"
          natural="Minas Gerais/Brasil"
          foto={foto}
        />
        <CardJogador
          nome="Ricardinho"
          posicao="Defesa Central"
          idade="38 anos"
          natural="S??o Paulo/Brasil"
          foto={foto}
        />
      </div>
      <h2>Laterais</h2>
      <div className={styles.posicao}>
        <CardJogador
          nome="Jo??o"
          posicao="Defesa Direito"
          idade="19 anos"
          natural="Minas Gerais/Brasil"
          foto={foto}
        />
        <CardJogador
          nome="Andr??"
          posicao="Defesa Esquerdo"
          idade="28 anos"
          natural="Minas Gerais/Brasil"
          foto={foto}
        />
        <CardJogador
          nome="Washington"
          posicao="Defesa / M??dio"
          idade="28 anos"
          natural="Pernambuco/Brasil"
          foto={foto}
        />
        <CardJogador
          nome="Thiaguinho"
          posicao="Defesa "
          idade="28 anos"
          natural="Minas Gerais/Brasil"
          foto={foto}
        />
        <CardJogador
          nome="Edu / Pedrinho"
          posicao="Defesa Direito"
          idade="28 anos"
          natural="Minas Gerais/Brasil"
          foto={edu}
        />
      </div>
        <h2>M??dios</h2>
      <div className={styles.posicao}>
        <CardJogador
          nome="??talo/Di Maria"
          posicao="M??dio Centro"
          idade="25 anos"
          natural="Pernambuco/Brasil"
          foto={italo}
        />
        <CardJogador
          nome="Hiago"
          posicao="M??dio Defensivo"
          idade="24 anos"
          natural="Para??ba/Brasil"
          foto={hiago}
        />
        <CardJogador
          nome="Paulo"
          posicao="Medio Centro/Ofensivo"
          idade="28 anos"
          natural="Minas Gerais/Brasil"
          foto={foto}
        />
        <CardJogador
          nome="Weslley"
          posicao="Medio Centro"
          idade="28 anos"
          natural="-/Brasil"
          foto={foto}
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
          nome="Russo"
          posicao="Medio Ofensivo/ Defesa Esquerdo"
          idade="20 anos"
          natural="-/Russo"
          foto={foto}
        />
        <CardJogador
          nome="Paqueta"
          posicao="Medio Ofensivo"
          idade="19 anos"
          natural="-/Colombia"
          foto={foto}
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
          posicao="Medio Ofensivo/Avan??ado"
          idade="25 anos"
          natural="Pernambuco/Brasil"
          foto={Julio}
        />
        <CardJogador
          nome="Filipe Feitosa"
          posicao="Medio Ofensivo"
          idade="35 anos"
          natural="Pernambuco/Brasil"
          foto={feitosa}
        />
      </div>
        <h2>Avan??ados</h2>
      <div className={styles.posicao}>
        <CardJogador
          nome="Mineiro"
          posicao="Ponta de Lan??a"
          idade="37 anos"
          natural="Minas Gerais/Brasil"
          foto={mineiro}
        />
        <CardJogador
          nome="Raul"
          posicao="Avan??ado"
          idade="28 anos"
          natural="Ceara/Brasil"
          foto={raul}
        />
        <CardJogador
          nome="Lucas"
          posicao="Extremo/Avan??ado"
          idade="19 anos"
          natural="Minas Gerais/Portugal"
          foto={foto}
        />
        <CardJogador
          nome="Angerson"
          posicao="Extremo/Avan??ado"
          idade="21 anos"
          natural="Pernambuco/Brasil"
          foto={angerson}
        />
        <CardJogador
          nome="Delcio"
          posicao="Extremo/Avan??ado"
          idade="28 anos"
          natural="Luanda/Angola"
          foto={delcio}
        />
        <CardJogador
          nome="Beto"
          posicao="Extremo/Avan??ado"
          idade="39 anos"
          natural="Rio de Janeiro/Brasil"
          foto={beto}
        />
        <CardJogador
          nome="Marcos Vinicios"
          posicao="Extremo/Avan??ado"
          idade="24 anos"
          natural="Rio de Janeiro/Brasil"
          foto={marcus_vinicios}
        />
        <CardJogador
          nome="Jonatas"
          posicao="Avan??ado"
          idade="32 anos"
          natural="Rio de Janeiro/Brasil"
          foto={jonatas}
        />
      </div>
    </div>
    </section>

  )
}
export default Jogadores