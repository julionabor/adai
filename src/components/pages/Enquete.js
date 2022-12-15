import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import styles from './Enquete.module.css'
import { Modal } from "react-responsive-modal";
import trofeu from '../../img/trofeu.jpg'
import { FaPoll } from "react-icons/fa";

  function Enquete () {
    const [open, setOpen] = useState(false)
    let onOpenModal = () => {
      setOpen(true);
    }
    let onCloseModal = () => {
      setOpen(false);
    }
  return (
      <div className={styles.enquete}>
        <img src={trofeu} alt="" onClick={onOpenModal} />
        <legend>Vote aqui no craque do jogo</legend>
        <strong>ADAI 1 x 1 ADRAV</strong>
        <Modal open={open} onClose={onCloseModal}>
      <div>
      <FaPoll />
      <h4>Craque da galera: </h4>
      <p>Quem foi o melhor jogador do último jogo?</p> <br />
        <select>
            <option>Selecione o jogador</option>
            <option>12- Christian</option>
            <option>3- Anderson</option>
            <option>4- Thiago</option>
            <option>5- Gegê</option>
            <option>2- João</option>
            <option>6- Washington</option>
            <option>8- Hiago</option>
            <option>7- Di Maria</option>
            <option>10- Feitosa</option>
            <option>11- Julio</option>
            <option>9- Mineiro</option>
            <option>12- Emanuel</option>
            <option>13- Vitinho</option>
            <option>15- Paulo</option>
            <option>14- Nino</option>
            <option>16- Angerson</option>
            <option>18- Henrik</option>
            <option>17- Lucas</option>
          </select>
          <button>Votar</button>
        </div>
      </Modal>
    </div>
  ); 
}
export default Enquete