import styles from "./EspeciariasPedras.module.css";

import foto1 from "../../assets/foto1.jpg"
import foto2 from "../../assets/foto2.jpg"
import foto3 from "../../assets/foto3.jpg"
import foto13 from "../../assets/foto13.jpg"
import foto19 from "../../assets/foto19.jpg"
import foto23 from "../../assets/foto23.jpg"
import foto25 from "../../assets/foto25.jpg"
import foto26 from "../../assets/foto26.jpg"
const EspeciariasPedras = () => {
  return (
    <div className={styles.pedras}>
        <div>
        <h1>Paredes Decorativas de Pedras</h1>
        <img src={foto3} alt="canjicnha" />
        <img src={foto1} alt="canjicnha" />
        <img src={foto2} alt="canjicnha" />
        </div>
        <div>
        <h1>Trabalhos Piscina</h1>
        <img src={foto13} alt="piscina" />
        <img src={foto19} alt="piscina" />
        <img src={foto23} alt="piscina" />
        <img src={foto25} alt="piscina" />
        <img src={foto26} alt="piscina" />
        </div>
    </div>
  )
}

export default EspeciariasPedras