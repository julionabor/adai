import {FaFacebook, FaInstagram, FaWhatsapp} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer (){
  return (
    <footer className={styles.footer}>
     <span>
          <FaFacebook />
       
          <FaInstagram />
        
           <FaWhatsapp />
      </span>  
      <p className={styles.copy_right}>
        <span>Desenvolvido por Julio Nabor</span> &copy; 2022
      </p>
    </footer>
  )
}
export default Footer