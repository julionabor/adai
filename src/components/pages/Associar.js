import { useState } from "react";
import Input from "./form/Input"
import Message from "./Message"
import SubmitButton from "./form/SubmitButton"
import { FcApproval } from 'react-icons/fc';
import emailjs from '@emailjs/browser'

import styles from './Associar.module.css'
import Container from "../layout/Container";

function Associar () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contacto, setContacto] = useState('')
  const [msg, setMsg] = useState('')
  const [type, setType] = useState('')

  function sendEmail(e) {
    e.preventDefault()
    
    if(name === '' || email === '' || contacto === ''){
      alert('Preencha todos os campos')
      return
    }
    var text = `Tipo de mensagem: Novo Associado; Telefone: ${contacto}`
    const templateParams = {
      from_name: name,
      message: text,
      email: email
    }
    
    emailjs.send("service_8p2hn7o","template_9xbi639", templateParams, "l8YcvNTgAvEVIXXLi")
    .then((response) => {
      //console.log("Email enviado", response.status, response.text)
      setName('')
      setEmail('')
      setContacto('')
      setMsg('Pedido de Associado enviado com sucesso!')
      setType('success')
    }, (err) => { 
      console.log("Erro",err)
    })
  }

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
      <div className={styles.boxProject}>
      {msg && <Message type={type} msg={msg} />}
        <form className="form" onSubmit={sendEmail} >
          <Input
            label="Nome: "
            name="name"
            type="text"
            placeholder="Insira o seu nome"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="E-mail"
            name="email"
            type="text"
            placeholder="Insira o seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Contacto"
            name="contacto"
            type="tel"
            placeholder="Insira o seu contacto"
            onChange={(e) => setContacto(e.target.value)}
          />
          <SubmitButton text="Tornar Associado" />
        </form>
      </div>
  </Container>
  )
}
export default Associar
