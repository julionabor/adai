import styles from './Card.module.css'
import React from 'react';
import { Modal } from 'react-responsive-modal';

function Card({img,title, text}){
  const [open, setOpen] = React.useState(false);
 return(
  <>
    <div className={styles.card}>
      <img src={img} alt="Noticia" />
      <div className={styles.container}>
       <h4><b>{title}</b></h4>
        <p>{text}</p>
        <button onClick={() => setOpen(true)}> + Ver mais</button>
        </div>
    </div>
      <Modal blur="50" open={open} onClose={() => setOpen(false)}>
    <div className={styles.modal}>
        <h2>{title}</h2> <br />
        <img src={img} alt="Noticia" />
          {text}
    </div>
      </Modal>
  </>
  )
}
export default Card