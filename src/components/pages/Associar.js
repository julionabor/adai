import Input from "./form/Input"
import SubmitButton from "./form/SubmitButton"

import styles from './Associar.module.css'

function Associar () {
  return (
    <section>
      <h1>
        Seja você também um associado da ADAI.
      </h1>
    <p>Entre em contacto connosco e descubra os benefícios em ser nosso parceiro.</p><br />
    <h3>E você que pretende ser associado, obtenha descontos especiais nos seguintes segmentos:</h3>
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
