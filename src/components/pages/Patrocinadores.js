import patrocinador from "../../img/patrocinador (1).jpg"
import patrocinador2 from "../../img/patrocinador (2).jpg"
import patrocinador3 from "../../img/patrocinador (3).jpg"
import patrocinador4 from "../../img/patrocinador (4).jpg"
import patrocinador5 from "../../img/patrocinador (5).jpg"
import patrocinador6 from "../../img/patrocinador (6).jpg"
import patrocinador7 from "../../img/patrocinador (7).jpg"
import fotografa from "../../img/kamylle.png"


import Container from "../layout/Container"

import styles from './Patrocinadores.module.css'

function Patrocinadores () {
  return (
    <Container>
        <h1> Seja você também um patrocinador da Associação. </h1>
        <p>Entre em contacto connosco e descubra os benefícios em ser nosso parceiro.</p><br />
        <h3>E você que pretende ser associado, obtenha descontos especiais nos seguintes segmentos:</h3>
        <div className={styles.patrocinadores}>
          <div>
            <a href="https://instagram.com/48_e_pico?igshid=YmMyMTA2M2Y="><img src={patrocinador} alt="48 e Pico" /></a>
            R. Infante Dom Henrique 48, 3700-120 São João da Madeira <br/>
            Telefone: 256 032 492
          </div>
          <div>
            <a href="https://instagram.com/mouberg_?igshid=YmMyMTA2M2Y="><img src={patrocinador2} alt="Mouberg" /></a>
            Largo de Santo António 121, 3700-261 São João da Madeira <br/>
            Telefone: 926 450 044
          </div>
          <div>
            <a href="https://instagram.com/sabor_da_asia?igshid=YmMyMTA2M2Y="><img src={patrocinador3} alt="Sabor da Asia" /></a>
            R. Dr. Maciel 142, 3700-240 São João da Madeira<br/>
            Telefone: 256 818 109</div>
          <div>
            <a href="https://instagram.com/bebiceskid?igshid=YmMyMTA2M2Y="><img src={patrocinador4} alt="Bebices Moda Infantil" /></a>
            R. António José de Oliveira Júnior 250, 3700-203 São João da Madeira<br/>
            Telefone: 939 562 853
          </div>
          <div>
            <a href="https://instagram.com/optica_renatoazevedo?igshid=YmMyMTA2M2Y="><img src={patrocinador5} alt="Optica Renato Azevedo" /></a>
            R. António José de Oliveira Júnior 309, 3700-207 São João da Madeira<br/>
            Telefone: 256 822 271
          </div>
          <div>
            <a href="https://instagram.com/hsrlda?igshid=YmMyMTA2M2Y="><img src={patrocinador6} alt="Oficina SHR" /></a>
            R. do Orreiro, 3700-211 São João da Madeira<br/>
            Telefone: 256 881 039
          </div>
          <div>
            <a href="https://instagram.com/ecocarwashsaojoaodamadeira?igshid=YmMyMTA2M2Y="><img src={patrocinador7} alt="EcoCarWash Sao Joao da Madeira" /></a>
            Centro Comercial 8ª Avenida, Av. Dr. Renato Araújo 1625 Piso -1, 3700-346 São João da Madeira<br/>
            Telefone: 937 111 180</div>
          <div>
            <a href="https://instagram.com/kamyllefotografias" target="blank"><img src={fotografa} alt="Kamylle Fotografia" /></a>
            Rua Alvares Cabral, Furadouro<br/>
            Telefone: 938 827 773  <br/>
             @kamyllefotografias <br/>
          </div>
        </div>
    </Container>
  )
}
export default Patrocinadores