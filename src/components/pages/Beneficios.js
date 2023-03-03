import Container  from "../layout/Container"

import styles from './Beneficios.module.css'

function Beneficios (){
    return (
        <div className={styles.carousel}>
        <Container>
            <h1>Qual benefício em ser associado?</h1>

            <h2>Ao se associar ao ADAI, você poderá usufruir dos seguintes beneficios:</h2>
            <ul>
                <li>Treino Funcional: Terças e Quintas (20h as 21h)</li>
                <li>Desconto de 10% nos seguintes espaços: 48 E PICO, HSR Auto e EcoWash Sao Joao da Madeira</li>
                <li>Futebol semanal (Pelada) gratuita - (não associado paga 3€)</li>
                <li>Rifas mensais com ofertas nos patrocinadores aderentes.</li>
                <li>Poder participar gratuitamente do espaço comerciante.</li>
                <li>Orientação em como e onde tirar determinadas documentações.</li>
            </ul>


        </Container>
        </div>
    )
}
export default Beneficios