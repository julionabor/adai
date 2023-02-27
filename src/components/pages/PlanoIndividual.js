import { useState } from "react";
import Input from "./form/Input";
import SubmitButton from "./form/SubmitButton";
import Message from "./Message";
import mbway from '../../img/mbway.png'

import styles from './Associar.module.css'

import emailjs from '@emailjs/browser'
import Container from "../layout/Container";

 function PlanoIndividual(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contacto, setContacto] = useState('')
  const [morada, setMorada] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')
  const [codigoPostal, setCodigoPostal] = useState('')
  const [rgpd, setrgpd] = useState('')
  const [msg, setMsg] = useState('')
  const [type, setType] = useState('')

  function sendEmail(e) {
    e.preventDefault()
    
    if(name === '' || email === '' || contacto === '' || morada === '' || dataNascimento === '' || codigoPostal === '' || rgpd === ''){
      console.log("entrou")
      setMsg('Erro! Por favor, preencha todos os campos!')
      setType('error')
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
  return(
  <Container>
    <div className={styles.boxProject}>
        <h1>Plano Individual</h1>
          {msg && <Message type={type} msg={msg} />}
          <form className="form" onSubmit={sendEmail} >
              <Input
                label="Nome do Associado"
                name="name"
                type="text"
                placeholder="Insira o seu nome"
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                label="NIF "
                name="nif"
                type="number"
                placeholder="Nº de Contribuinte"
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                label="Passaporte/ Título de Residencia ou CC "
                name="name"
                type="text"
                placeholder="Nº Documento de identificação"
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                label="Data de Nascimento"
                name="data"
                type="date"
                placeholder="Data de Nascimento"
                onChange={(e) => setDataNascimento(e.target.value)}
              />
              <Input
                label="E-mail"
                name="email"
                type="email"
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
              <Input
                label="Morada"
                name="morada"
                type="text"
                placeholder="Insira a morada"
                onChange={(e) => setMorada(e.target.value)}
              />
              <Input
                label="Código Postal"
                name="codigoPostal"
                type="text"
                placeholder="xxxx-xxx"
                onChange={(e) => setCodigoPostal(e.target.value)}
              />
              <p>Forma de pagamento do Plano: *</p>

              <input type="radio" id="methodPayment" value="MBWAY" checked/>
              <img src={mbway} alt ="" className={styles.mbway} /> <strong>Valor:</strong> 5,00€

              <p><input type="checkbox" name="rgpd" onChange={(e) => setrgpd(e.target.value)} /> Autorizo o tratamento dos meus dados por parte da ADAI </p>
              <SubmitButton text="Submeter Pedido" />
            </form>
    </div>
  </Container>
  )
}
export default PlanoIndividual