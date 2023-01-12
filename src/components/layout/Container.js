import styles from './Container.module.css'
import Navbar from './Navbar'
import Footer from './Footer'

function Container (props) {
  //const history = useNavigate();
  //<button  onClick={() => history(-1)} >Voltar</button>
  return (
    <>
    <Navbar />
    <div className={`${styles.container}  ${styles[props.customClass]}`}>
      {props.children}
    </div>
    <Footer />
    </>
  )
}
export default Container