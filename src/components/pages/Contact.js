import { useState } from 'react'
import axios from 'axios'
/* import emailjs from '@emailjs/browser' */

import styles from './Contact.module.css'
import Input from "./form/Input"
import SubmitButton from "./form/SubmitButton"
import Message from './Message'
import Container from '../layout/Container'
import Textarea from './form/Textarea'

function Contact() {

  const [campos, setCampos] = useState({
    nome: "",
    email: "",
    contacto: "",
    mensagem: ""
  })
  const [msg, setMsg] = useState('')
  const [type, setType] = useState('')
  const [button, setButton] = useState('Enviar')
  
  function handleInputChange(event){
    campos[event.target.name] = event.target.value
    setCampos(campos) 
  }
  function handleFormSubmit(e){
    e.preventDefault()
    setButton("A enviar...")
    console.log(campos)
    send()
  }
  
  function send(){

    const formData = new FormData()
    
    Object.keys(campos).forEach(key => formData.append(key, campos[key]))
    axios.post('http://localhost:3030/send', formData, {
      headers : {
        "Content-Type": "Application/json"
      }
    })
    .then(response => alert(response.data))
      setMsg('Pedido de Contacto enviado com sucesso!')
      setType('success')
      setButton("Enviar")
  }

  /* const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contacto, setContacto] = useState('')
  const [mensagem, setMensagem] = useState('') */
  /* function sendEmail(e) {
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
  } */
  return (
    <Container>
        <h1>Contactos</h1>
          <h3>Entre em contacto connosco preenchendo os campos abaixo:</h3>
          <div className={styles.contact}>
            {msg && <Message type={type} msg={msg} />}
            <form onSubmit={handleFormSubmit} >
              <Input
                name="nome"
                type="text"
                placeholder="Insira o seu nome"
                onChange={handleInputChange}
                
              />
              <Input
                name="email"
                type="text"
                placeholder="Insira o seu e-mail"
                onChange={handleInputChange}
                
              />
              <Input
                name="contacto"
                type="tel"
                placeholder="Insira o seu contacto"
                onChange={handleInputChange}
                
              />
              
              <Textarea 
                name="mensagem"
                placeholder="Escreva a sua mensagem "
                onChange={handleInputChange}
                
               />
              <SubmitButton text={button} />
            </form>
          </div>
    </Container>
  )
}
export default Contact