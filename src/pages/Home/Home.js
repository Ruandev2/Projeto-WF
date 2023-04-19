import React from 'react'
import wel from "../../assets/wel.jpg"
import styles from "./Home.module.css"
const Home = () => {
  return (
    <div className={styles.img}>
        <h1>Perfil do Propeitario</h1>
        <img src={wel} alt="w" />
    </div>
  )
}

export default Home