import styles from './Card.module.css'

function Card({img,title, text}){
 return(
    <div className={styles.card}>
      <img src={img} alt="Noticia" />
      <div className={styles.container}>
       <h4><b>{title}</b></h4>
        <p>{text}</p>
      </div>
    </div>
  )
}
export default Card