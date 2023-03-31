import styles from './Card.module.css'
import React from 'react';

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

function Card({...props}){
  const [open, setOpen] = React.useState(false);
 return(
  <>
    <div className={styles.card}>
      <img src={props.img} alt="Noticia" />
      <div className={styles.container}>
       <h4><b>{props.title}</b></h4>
        <p>{props.subtitle}</p>
        <button onClick={() => setOpen(true)}> + Ver mais</button>
        </div>
    </div>
      <Modal blur="10" 
      open={open} 
      onClose={() => setOpen(false)}
      center
      >
    <div className={styles.modal}>
        <h2>{props.title}</h2> <br />
        <img src={props.img} alt="Noticia" />
          <strong>{props.subtitle}</strong>
          <br />
          {props.text}
    </div>
      </Modal>
  </>
  )
}
export default Card