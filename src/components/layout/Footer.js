import {FaWhatsapp} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer (){
  return (
    <footer className={styles.footer}>
     <span className={styles.copy_right}>
        <a href="https://wa.me/351938020511?text=Gostaria%20de%20mais%20informaçoes%20sobre%20a%20criacao%20de%20websites"><FaWhatsapp /></a> <span> Desenvolvido por Julio Nabor</span> &copy; 2022
      </span>
    </footer>
  )
}
export default Footer