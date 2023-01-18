import { useState} from "react";
// import { useParams } from "react-router-dom";
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
  async function Votar () {
      
      await fetch(`http://localhost:5000/enquete/`,{
          method : 'GET',
          headers: {
                'Content-Type' : 'application/json'
              },
        })
      .then((data) => data.json())
      .then((response) => {
        return setShowList(response)
        })
        .catch((err) => console.log(err))
          
    }
    function SubmitVoto(e){
      e.preventDefault()
      setResultado(showList)
      showList.map((item) => {
          if(item.name === voto){
            item.votos++
            
            fetch(`http://localhost:5000/enquete/${item.id}/`,{
              method: 'PATCH',
              headers: {
                'Content-Type' : 'application/json',
              },
              body: JSON.stringify(item)
            })
            .then((data) => data.json())
            .catch((err) => console.log(err))
          }
        }
      )
      setShowResult(true)
       
    }
    
  
  return (
      <div className={styles.enquete}>
        <img src={trofeu} alt="" onClick={onOpenModal} />
        <legend>Vote aqui no craque do jogo</legend>
        <strong>Reguenga Palhota 2 x 0 ADAI </strong>
        <Modal open={open} onClose={onCloseModal}>
      <div>
      <FaPoll />
      <h4>Craque da galera: </h4>
      { !showResult ? (
        <>
          <p>Quem foi o nosso melhor jogador do último jogo?</p> <br />
          <form onSubmit={SubmitVoto}>
              <select id="nome" name={voto}
                onChange={(e)=> setVoto(e.target.value)}
              >
                <option value="Selecione o jogador">Selecione o jogador</option>
              { showList ?
              showList.map((item,index) => (
                <Option
                  props={item.name}
                  key={index}
                  value={index}
                />
              )) : <p>Não há jogadores a apresentar</p>}
              </select>
              <SubmitButton text="Votar" />
          </form>
        </>
        ):(
          <div className={styles.resultado}>
            <h3> Resultados</h3> 
            <h4>Jogador | Votos</h4>
           {  
             resultado.map((element,index) =>  <p key={index}>  {element.name} - {element.votos} </p>) 
            }
            
          </div>
        )}
        </div>
      </Modal>
    </div>
  ); 
}
export default Enquete