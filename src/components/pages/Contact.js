import { useState } from 'react'
import emailjs from '@emailjs/browser'

import styles from './Contact.module.css'
import Input from "./form/Input"
import SubmitButton from "./form/SubmitButton"
import Message from './Message'
import Container from '../layout/Container'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contacto, setContacto] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [msg, setMsg] = useState('')
  const [type, setType] = useState('')

  function sendEmail(e) {
    e.preventDefault()
    
    if(name === '' || email === '' || contacto === '' || mensagem === ''){
      alert('Preencha todos os campos')
      return
    }
    var text = `Tipo de mensagem: Contactos; Telefone: ${contacto},Mensagem: ${mensagem}`
    const templateParams = {
      from_name: name,
      message: text,
      email: email
    }

    
    emailjs.send("service_8p2hn7o","template_9xbi639", templateParams, "l8YcvNTgAvEVIXXLi")
    .then((response) => {
      //console.log("Email enviado", response.status, response.text)
      setMsg('Pedido de Contacto enviado com sucesso!')
      setType('success')
      setName('')
      setEmail('')
      setContacto('')
      setMensagem('')
    }, (err) => { 
      setMsg('Ocorreu um erro no envio da mensagem!')
      setType('error')
    })
  }
  return (
    <Container>
        <h1>Contactos</h1>
          <p>Entre em contacto connosco e descubra os benefícios em ser nosso parceiro.</p><br />
          <h3>E você que pretende ser associado, obtenha descontos especiais nos seguintes segmentos:</h3>
          <div className={styles.contact}>
            {msg && <Message type={type} msg={msg} />}
            <form onSubmit={sendEmail} >
              <Input
                name="name"
                type="text"
                placeholder="Insira o seu nome"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <Input
                name="email"
                type="text"
                placeholder="Insira o seu e-mail"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <Input
                name="contacto"
                type="tel"
                placeholder="Insira o seu contacto"
                onChange={(e) => setContacto(e.target.value)}
                value={contacto}
              />
              
              <textarea 
                name="mensagem"
                className={styles.msg} 
                placeholder="Escreva a sua mensagem "
                onChange={(e) => setMensagem(e.target.value)}
                value={mensagem}
               />
              <SubmitButton text="Enviar" />
            </form>
          </div>
    </Container>
  )
}
export default Contact