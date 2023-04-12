import Container from '../../layout/Container'
import Voltar from '../Voltar'
import styles from './Jogos.module.css'

function Jogos () {
  return (
    <Container>
      
      <h1>Jogos</h1>
      <br/>
      <Voltar />

      <table className={styles.tabela}>
        <tr>
          <th>Data</th>
          <th>Mandante</th>
          <th>Resultado</th>
          <th>Visitante</th>
          <th>Gols</th>
        </tr>
        <tr>
          <td>22/07/2022</td>
          <td>Arrifanenses</td>
          <td>1x2</td>
          <td>ADAI</td>
          <td>Delcio e Dalton</td>
        </tr>
        <tr>
          <td>21/08/2022</td>
          <td>Arrifanenses</td>
          <td>1x0</td>
          <td>ADAI</td>
          <td>-</td>
        </tr>
        <tr>
          <td>22/07/2022</td>
          <td>Sanjoanense</td>
          <td>1x0</td>
          <td>ADAI</td>
          <td>-</td>
        </tr>
        <tr>
          <td>22/07/2022</td>
          <td>Cucujaes</td>
          <td>1x2</td>
          <td>ADAI</td>
          <td>-</td>
        </tr>
        <tr>
          <td>11/09/2022</td>
          <td>Nogueirense</td>
          <td>3x3</td>
          <td>ADAI</td>
          <td>Julio (2x) e Arthur</td>
        </tr>
        <tr>
          <td>13/09/2022</td>
          <td>Tarei</td>
          <td>7x1</td>
          <td>ADAI</td>
          <td>-</td>
        </tr>
        <tr>
          <td>17/09/2022</td>
          <td>Reguenga Palhota</td>
          <td>1x0</td>
          <td>ADAI</td>
          <td>-</td>
        </tr>
        <tr>
          <td>24/09/2022</td>
          <td>Sanjoanense</td>
          <td>4x2</td>
          <td>ADAI</td>
          <td>-</td>
        </tr>
        <tr>
          <td>29/09/2022</td>
          <td>Nadais</td>
          <td>1x0</td>
          <td>ADAI</td>
          <td>-</td>
        </tr>
        <tr>
          <td>01/10/2022</td>
          <td>Travanca</td>
          <td>4x7</td>
          <td>ADAI</td>
          <td>Raul (3), Mineiro (2x), Henrik, André </td>
        </tr>
        <tr>
          <td>22/10/2022</td>
          <td>ADAI</td>
          <td>2x0</td>
          <td>Real Sociedade da Praça</td>
          <td>Raul (2x)</td>
        </tr>
        <tr>
          <td>29/10/2022</td>
          <td>ADAI</td>
          <td>0x0</td>
          <td>Pessegueiro</td>
          <td>-</td>
        </tr>
        <tr>
          <td>05/11/2022</td>
          <td>ADAI</td>
          <td>2x2</td>
          <td>Pigeirense</td>
          <td>Jogo anulado</td>
        </tr>
        <tr>
          <td>19/11/2022</td>
          <td>ADAI</td>
          <td>0x1</td>
          <td>Rêgo</td>
          <td>-</td>
        </tr>
        <tr>
          <td>27/11/2022</td>
          <td>Nariz</td>
          <td>0x1</td>
          <td>ADAI</td>
          <td>Mineiro</td>
        </tr>
        <tr>
          <td>03/12/2022</td>
          <td>Travanca</td>
          <td>0x1</td>
          <td>ADAI</td>
          <td>Mineiro</td>
        </tr>
        <tr>
          <td>10/12/2022</td>
          <td>ADAI</td>
          <td>1x1</td>
          <td>ADRAV</td>
          <td>Mineiro</td>
        </tr>
        <tr>
          <td>17/12/2022</td>
          <td>ADAI</td>
          <td>0x1</td>
          <td>Arrifanenses</td>
          <td>-</td>
        </tr>
        <tr>
          <td>07/01/2023</td>
          <td>Reguenga Palhota</td>
          <td>2x0</td>
          <td>ADAI</td>
          <td></td>
        </tr>
        <tr>
          <td>13/01/2023</td>
          <td>Nadais</td>
          <td>2x2</td>
          <td>ADAI</td>
          <td>Nino e Lucas</td>
        </tr>
        <tr>
          <td>21/01/2023</td>
          <td>Pigeirense</td>
          <td>7x1</td>
          <td>ADAI</td>
          <td>Anderson</td>
        </tr>
        <tr>
          <td>04/02/2023</td>
          <td>ADAI</td>
          <td>2x1</td>
          <td>Real Sociedade da Praça</td>
          <td>Mineiro e Gêge</td>
        </tr>
        <tr>
          <td>11/02/2023</td>
          <td>Pessegueiro</td>
          <td>2x1</td>
          <td>ADAI</td>
          <td>Julio</td>
        </tr>
        <tr>
          <td>25/02/2023</td>
          <td>ADAI</td>
          <td>2x1</td>
          <td>Nariz</td>
          <td>Anderson e Italo (Di Maria)</td>
        </tr>
        <tr>
          <td>04/03/2023</td>
          <td>Rêgo</td>
          <td>1x3</td>
          <td>ADAI</td>
          <td>Mineiro (x2) e Julio</td>
        </tr>
        <tr>
          <td>11/03/2023</td>
          <td>ADAI</td>
          <td>1x2</td>
          <td>Travanca</td>
          <td>Feitosa</td>
        </tr>
        <tr>
          <td>25/03/2023</td>
          <td>ADRAV</td>
          <td>0x2</td>
          <td>ADAI</td>
          <td>-</td>
        </tr>
        <tr>
          <td>01/04/2023</td>
          <td>ADAI</td>
          <td>0x5</td>
          <td>Reguenga Palhota</td>
          <td>-</td>
        </tr>
      </table>
  </Container>
  )
}
export default Jogos