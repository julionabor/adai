import { useNavigate } from 'react-router-dom';
import styles from './Voltar.module.css'

function Voltar (){
    const navigate = useNavigate('')
    return (
        <div>
            <button className={styles.back} onClick={() => navigate(-1)}>&larr; Voltar</button>
        </div>
    )
}
export default Voltar