import Input from "./form/Input"
import SubmitButton from "./form/SubmitButton"

function Contact() {
  return (
    <section>
      <h1>
        Contactos.
      </h1>
    <p>Entre em contacto connosco e descubra os benefícios em ser nosso parceiro.</p><br />
    <h3>E você que pretende ser associado, obtenha descontos especiais nos seguintes segmentos:</h3>
    <div>
    <Input
      name="nome"
      type="text"
      placeholder="Insira o seu nome"
    />
    <Input
      name="email"
      type="text"
      placeholder="Insira o seu e-mail"
    />
    <Input
      name="contacto"
      type="tel"
      placeholder="Insira o seu contacto"
    />
    <SubmitButton text="Enviar" />
    </div>
    </section>
  )
}
export default Contact