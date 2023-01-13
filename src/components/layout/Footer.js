import {FaWhatsapp} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer (){
  return (
    <footer className={styles.footer}>
     <span className={styles.copy_right}>
        <span>&copy; 2022 - Desenvolvido por <a href="http://julionabor.netlify.app">Julio Nabor</a></span> <br />
        <p><i>Quer construir um website para sua empresa? </i></p>
          <p className={styles.whatsapp}> <a href="https://wa.me/351938020511?text=Gostaria%20de%20mais%20informaçoes%20sobre%20a%20criacao%20de%20websites"><FaWhatsapp />+351 938 020 511</a> </p>
         
      </span>
    </footer>
  )
}
export default Footer