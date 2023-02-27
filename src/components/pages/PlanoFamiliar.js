import Container from "../layout/Container"
import SubmitButton from "./form/SubmitButton"
import { useState } from "react";
import Input from "./form/Input";
import Message from "./Message";

import styles from './Associar.module.css'
import mbway from '../../img/mbway.png'

function PlanoFamiliar(){

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contacto, setContacto] = useState('')
  const [morada, setMorada] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')
  const [codigoPostal, setCodigoPostal] = useState('')
  const [rgpd, setrgpd] = useState('')
  const [msg, setMsg] = useState('')
  const [type, setType] = useState('')
  const [membros, setMembros] = useState('')
  function sendEmail(e) {
    e.preventDefault()
    
    if(name === '' || email === '' || contacto === '' || morada === '' || dataNascimento === '' || codigoPostal === '' || rgpd === ''){
      console.log("entrou")
      setMsg('Erro! Por favor, preencha todos os campos!')
      setType('error')
      return
    }   

  } 
  return(
    <Container>
    <div className={styles.boxProject}>
        <h1>Plano Familiar</h1>
          {msg && <Message type={type} msg={msg} />}
          <form className="form" onSubmit={sendEmail} >
            <label>Nº de Membros do agregado: *</label>
            <select onChange={((e)=>setMembros(e.target.value))} >
              <option>-</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <br />
            <Input
                      label={'Nome do titular*: '}
                      name="name"
                      type="text"
                      placeholder="Insira o seu nome"
                      onChange={(e) => setName(e.target.value)}
                    />
              { setMembros && 
                  Array.from({ length : membros-1}).map((_, index) => (
                    <Input
                      label={'Nome do '+(index+2)+'º agregado:*'}
                      name="name"
                      type="text"
                      placeholder="Insira o seu nome"
                      onChange={(e) => setName(e.target.value)}
                      key={index}
                    />
                 ))
              }   
              <h3>Dados do titular:</h3>
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
              <img src={mbway} alt ="" className={styles.mbway} /> <strong>Valor:</strong> 12,50€
              
              <p><input type="checkbox" name="rgpd" onChange={(e) => setrgpd(e.target.value)} /> Autorizo o tratamento dos meus dados por parte da ADAI </p>
              <SubmitButton text="Submeter Pedido" />
            </form>
            
      </div>
  </Container>
  )
}
export default PlanoFamiliar