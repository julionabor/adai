import Input from "./form/Input"
import SubmitButton from "./form/SubmitButton"
import { FcApproval } from 'react-icons/fc';


import styles from './Associar.module.css'

function Associar () {
  return (
    <section>
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
    <div className={styles.boxProject}>
    <Input
      label="Nome: "
      name="nome"
      type="text"
      placeholder="Insira o seu nome"
    />
    <Input
      label="E-mail"
      name="email"
      type="text"
      placeholder="Insira o seu e-mail"
    />
    <Input
      label="Contacto"
      name="contacto"
      type="tel"
      placeholder="Insira o seu contacto"
    />
    <SubmitButton text="Tornar Associado" />
    </div>
    </section>
  )
}
export default Associar
