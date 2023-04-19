import { NavLink } from "react-router-dom"
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
        <nav className={styles.navlink}>
            <NavLink to="/" className={styles.brand}>Reformas em Geral<span>Especialista em Pedras</span></NavLink>
            <ul className={styles.links_list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Informações do Profissinal
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/especiarias"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Trabalhos com Pedras
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacts"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Entra Contato
            </NavLink>
          </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar