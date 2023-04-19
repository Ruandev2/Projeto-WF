import styles from "./EspeciariasPedras.module.css";

import foto1 from "../../assets/foto1.jpg"
import foto2 from "../../assets/foto2.jpg"
import foto3 from "../../assets/foto3.jpg"
const EspeciariasPedras = () => {
  return (
    <div className={styles.pedras}>
        <h1>Obra do Ano de 2018</h1>
        <img src={foto3} alt="canjicnha" />
        <img src={foto1} alt="canjicnha" />
        <img src={foto2} alt="canjicnha" />
    </div>
  )
}

export default EspeciariasPedras