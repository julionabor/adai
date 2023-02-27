import { FcApproval } from 'react-icons/fc';
import { Link } from "react-router-dom";

import individual from '../../img/individual.png'
import familiar from '../../img/familiar.png'

import styles from './Associar.module.css'
import Container from "../layout/Container";

function Associar () {

 return (
    <Container>
      <h1>
        Seja você também um associado da ADAI.
      </h1>
      <h3>E você que pretende ser associado, obtenha descontos especiais nos seguintes segmentos:</h3>
      <div className={styles.section}>
        <h2>Vantagens de ser associado</h2>
        <ul className={styles.check_list}>
          <li><FcApproval /> Desconto de 10% em parceiros</li>
          <li><FcApproval /> Aulas Funcionais gratuitas</li>
          <li><FcApproval /> Participar das atividades promovidas pela associação</li>
          <li><FcApproval /> Entre outras</li>
        </ul>
      </div>
      <div className={styles.container}>
        <h3> Selecione o seu plano: </h3>
          <div className={styles.selectPlan}>
            <Link to="/associar/individual">
              <div className={styles.cardPlano} /*onClick={(e) => showplano(e,"individual")}*/>
                <h2>Plano Individual</h2>
                <img src={individual} alt="Plano Individual"  />
                <legend>
                  <strong>Valor:</strong> 
                  5,00€ por mês
                </legend>
              </div>
            </Link>
            <Link to="/associar/familiar">
              <div className={styles.cardPlano}>
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
  </Container>
  )
}
export default Associar
