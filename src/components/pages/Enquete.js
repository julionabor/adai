import { useState} from "react";
import "react-responsive-modal/styles.css";
import styles from './Enquete.module.css'
import { Modal } from "react-responsive-modal";
import trofeu from '../../img/trofeu.jpg'
import { FaPoll } from "react-icons/fa";
import Option from "./form/Option";
import SubmitButton from "./form/SubmitButton";

  function Enquete () {
    
    const [open, setOpen] = useState(false)
    const [voto, setVoto] = useState('')
    const [resultado, setResultado] = useState([])

    const [showList, setShowList] = useState([])
    const [showResult, setShowResult] = useState(false)
    let onOpenModal = () => {
      setOpen(true);
      Votar()
    }
    let onCloseModal = () => {
      setOpen(false);
    }
  function Votar () {
      
      fetch(`http://localhost:5000/enquete/`,{
          method : 'GET',
          headers: {
                'Content-Type' : 'application/json'
              },
        })
      .then((data) => data.json())
      .then((response) => {
        return setShowList(response)
        },[])
        .catch((err) => console.log(err))
          
    }
    function SubmitVoto(e){
      e.preventDefault()
      
        //var nome = document.getElementById("voto").value
        //console.log(nome)
        fetch(`http://localhost:5000/enquete/`,{
          method : 'GET',
          headers: {
                'Content-Type' : 'application/json'
              },
        })
      .then((data) => data.json())
      .then((response) => {
       /* response.map((item) => 
          ( item.name === nome ? (console.log(item.votos++)) : console.log("Voto não computado!"))
          )*/
          setResultado(response)
          toggleResult(setShowResult(true))
        })
        .catch((err) => console.log(err))
      
    function toggleResult(){
      setShowResult(!showResult)
    } 
  }
  return (
      <div className={styles.enquete}>
        <img src={trofeu} alt="" onClick={onOpenModal} />
        <legend>Vote aqui no craque do jogo</legend>
        <strong>ADAI 0 x 1 Arrifanenses</strong>
        <Modal open={open} onClose={onCloseModal}>
      <div>
      <FaPoll />
      <h4>Craque da galera: </h4>
      { !showResult ? (
        <>
          <p>Quem foi o melhor jogador do último jogo?</p> <br />
          <form onSubmit={SubmitVoto}>
              <select id="nome" name={voto} 
                onChange={(e)=> setVoto(e.target.value)}
              >
                <option value="Selecione o jogador">Selecione o jogador</option>
              { showList.map((item,index) => (
               
                <Option
                  props={item.name}
                  key={index}
                  
                />
                  ))}
              </select>
              <SubmitButton text="Votar" />
          </form>
        </>
        ):(
          <>
            <h3> Resultados</h3> <br />
            <p>Jogador | Votos</p> <br />
              
            { resultado.map((item) => 
             <div key={item.id}> {item.name} - {item.votos} </div> ) }
            
          </>
        )}
        </div>
      </Modal>
    </div>
  ); 
}
export default Enquete