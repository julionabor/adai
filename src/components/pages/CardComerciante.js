import styles from './Comerciante.module.css'

function CardComerciante (props){
    return (
        <div className={styles.card_comerciante}>
            <div>
                <div>{props.image}</div>
                <div>
                    <h2>{props.title}</h2>
                    {props.description}
                    <p>Instagram:</p>
                    <p>WhatsApp:</p>
                </div>
            </div>
        </div>
    )
}
export default CardComerciante