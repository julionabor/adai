import {FaWhatsapp} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer (){
  return (
    <footer className={styles.footer}>
     <span>
         
                   
      </span>  
      <p className={styles.copy_right}>
        <FaWhatsapp /> <span> Desenvolvido por Julio Nabor</span> &copy_right; 2022
      </p>
    </footer>
  )
}
export default Footer