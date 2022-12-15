import styles from './CardJogador.module.css'

function CardJogador ({nome, posicao, idade , natural, foto}) {
  return (
    <div className={styles.a_box}>
      <div className={styles.img_container}>
        <div className={styles.img_inner}>
          <div className={styles.inner_skew}>
            <img src={foto} alt='' className={styles.foto} />
          </div>
        </div>
      </div>
  <div className={styles.text_container}>
    <h3>{nome}</h3>
    <div>
      <p>{posicao}</p>
      <p>{idade}</p>
      <p>{natural}</p>
    </div>
  </div>
</div>
  )
}
export default CardJogador