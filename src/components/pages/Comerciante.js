import Container from "../layout/Container"
import CardComerciante from "./CardComerciante"
import styles from "./Comerciante.module.css"


function Comerciante (){
    return (
    <Container>
        <h1>Espaço do Comerciante</h1>
        <div className={styles.espaco_comerciante}>
            <CardComerciante
                title="Loja 1"
                description="Loja de objetos"
                image={<img src="https://craftypixels.com/placeholder-image/200x200&text=Comerciante" alt="" />}
            />
            <CardComerciante
                title="Loja 1"
                description="Loja de objetos"
                image={<img src="https://craftypixels.com/placeholder-image/200x200&text=Comerciante" alt="" />}

            />
            <CardComerciante
                title="Loja 1"
                description="Loja de objetos"
                image={<img src="https://craftypixels.com/placeholder-image/200x200&text=Comerciante" alt="" />}

            />
            <CardComerciante
                title="Loja 1"
                description="Loja de objetos"
                image={<img src="https://craftypixels.com/placeholder-image/200x200&text=Comerciante" alt="" />}

            />
            <CardComerciante
                title="Loja 1"
                description="Loja de objetos"
                image={<img src="https://craftypixels.com/placeholder-image/200x200&text=Comerciante" alt="" />}

            />
            <CardComerciante
                title="Loja 1"
                description="Loja de objetos"
                image={<img src="https://craftypixels.com/placeholder-image/200x200&text=Comerciante" alt="" />}

            />
            <CardComerciante
                title="Loja 1"
                description="Loja de objetos"
                image={<img src="https://craftypixels.com/placeholder-image/200x200&text=Comerciante" alt="" />}

            />
            <CardComerciante
                title="Loja 1"
                description="Loja de objetos"
                image={<img src="https://craftypixels.com/placeholder-image/200x200&text=Comerciante" alt="" />}

            />
               
        </div>
    </Container>
    )
}
export default Comerciante