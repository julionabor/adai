import CardJogador from './CardJogador'
import styles from './Jogadores.module.css'

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
        />
        <CardJogador
          nome="Emanuel"
          posicao="Guarda Redes"
          idade="28 anos"
          natural="Maceda/Portugal"
        />
      </div>
      <h2>Defesas</h2>
      <div className={styles.posicao}>
        <CardJogador
          nome="Thiago Rodrigues"
          posicao="Defesa Central"
          idade="30 anos"
          natural="Rio de Janeiro/Brasil"
        />
        <CardJogador
          nome="Anderson"
          posicao="Defesa Central"
          idade="37 anos"
          natural="Bahia/Brasil"
        />
        <CardJogador
          nome="Vitinho"
          posicao="Defesa Central"
          idade="24 anos"
          natural="Rio de Janeiro/Brasil"
        />
        <CardJogador
          nome="Lucas Poli/Gegê"
          posicao="Defesa Central /Médio Centro"
          idade="28 anos"
          natural="Minas Gerais/Brasil"
        />
        <CardJogador
          nome="Ricardinho"
          posicao="Defesa Central"
          idade="38 anos"
          natural="São Paulo/Brasil"
        />
      </div>
      <h2>Laterais</h2>
      <div className={styles.posicao}>
        <CardJogador
          nome="João"
          posicao="Defesa Direito"
          idade="19 anos"
          natural="Minas Gerais/Brasil"
        />
        <CardJogador
          nome="André"
          posicao="Defesa Esquerdo"
          idade="28 anos"
          natural="Minas Gerais/Brasil"
        />
        <CardJogador
          nome="Washington"
          posicao="Defesa / Médio"
          idade="28 anos"
          natural="Pernambuco/Brasil"
        />
        <CardJogador
          nome="Thiaguinho"
          posicao="Defesa "
          idade="28 anos"
          natural="Minas Gerais/Brasil"
        />
        <CardJogador
          nome="Edu / Pedrinho"
          posicao="Defesa Direito"
          idade="28 anos"
          natural="Minas Gerais/Brasil"
        />
      </div>
        <h2>Médios</h2>
      <div className={styles.posicao}>
        <CardJogador
          nome="Ítalo/Di Maria"
          posicao="Médio Centro"
          idade="27 anos"
          natural="Pernambuco/Brasil"
        />
        <CardJogador
          nome="Hiago"
          posicao="Médio Defensivo"
          idade="23 anos"
          natural="Paraíba/Brasil"
        />
        <CardJogador
          nome="Paulo"
          posicao="Medio Centro/Ofensivo"
          idade="28 anos"
          natural="Minas Gerais/Brasil"
        />
        <CardJogador
          nome="Weslley"
          posicao="Medio Centro"
          idade="28 anos"
          natural="-/Brasil"
        />
        <CardJogador
          nome="Nino"
          posicao="Medio Ofensivo/ Defesa Esquerdo"
          idade="19 anos"
          natural="Pernambuco/Brasil"
        />
        <CardJogador
          nome="Gui Bala"
          posicao="Medio Centro/Ofensivo"
          idade="46 anos"
          natural="Rio de Janeiro/Brasil"
        />
        <CardJogador
          nome="Russo"
          posicao="Medio Ofensivo/ Defesa Esquerdo"
          idade="20 anos"
          natural="-/Russo"
        />
        <CardJogador
          nome="Paqueta"
          posicao="Medio Ofensivo"
          idade="19 anos"
          natural="-/Colombia"
        />
        <CardJogador
          nome="Henrik"
          posicao="Medio Ofensivo/Extremo"
          idade="28 anos"
          natural="Alagoas/Brasil"
        />
        <CardJogador
          nome="Julio"
          posicao="Medio Ofensivo/Avançado"
          idade="25 anos"
          natural="Pernambuco/Brasil"
        />
        <CardJogador
          nome="Filipe Feitosa"
          posicao="Medio Ofensivo"
          idade="35 anos"
          natural="Pernambuco/Brasil"
        />
      </div>
        <h2>Avançados</h2>
      <div className={styles.posicao}>
        <CardJogador
          nome="Mineiro"
          posicao="Ponta de Lança"
          idade="37 anos"
          natural="Minas Gerais/Brasil"
        />
        <CardJogador
          nome="Raul"
          posicao="Avançado"
          idade="28 anos"
          natural="Ceara/Brasil"
        />
        <CardJogador
          nome="Lucas"
          posicao="Extremo/Avançado"
          idade="19 anos"
          natural="Minas Gerais/Portugal"
        />
        <CardJogador
          nome="Angerson"
          posicao="Extremo/Avançado"
          idade="21 anos"
          natural="Pernambuco/Brasil"
        />
        <CardJogador
          nome="Delcio"
          posicao="Extremo/Avançado"
          idade="28 anos"
          natural="Luanda/Angola"
        />
        <CardJogador
          nome="Beto"
          posicao="Extremo/Avançado"
          idade="39 anos"
          natural="Rio de Janeiro/Brasil"
        />
        <CardJogador
          nome="Marcos Vinicios"
          posicao="Extremo/Avançado"
          idade="39 anos"
          natural="Rio de Janeiro/Brasil"
        />
        <CardJogador
          nome="Jonatas"
          posicao="Avançado"
          idade="32 anos"
          natural="Rio de Janeiro/Brasil"
        />
      </div>
    </div>
    </section>

  )
}
export default Jogadores