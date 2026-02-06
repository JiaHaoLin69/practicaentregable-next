import Link from 'next/link'; // Componente Link de Next.js para navegación rápida sin recarga ("SPA feel")
import styles from './Navbar.module.css'; // Estilos CSS Modules para la barra de navegación

// Componente Navbar: Muestra el menú principal y la barra de búsqueda
export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            {/* Lista principal del menú */}
            <ul className={styles.menu}>

                {/* Elemento de menú simple: Inicio */}
                <li className={styles.menuItem}>
                    <Link href="/" className={styles.active}>Inicio</Link>
                </li>

                {/* Elemento de menú con Dropdown (Desplegable): Noticias */}
                <li className={`${styles.menuItem} ${styles.dropdown}`}>
                    <span>Noticias</span>
                    {/* Contenido del dropdown que aparece al pasar el ratón (controlado por CSS) */}
                    <div className={styles.dropdownContent}>
                        <Link href="/noticias" className={styles.dropdownItem}>Ir a Noticias</Link>
                        <Link href="/trofeo-del-director" className={styles.dropdownItem}>Trofeo del director</Link>
                    </div>
                </li>

                {/* Dropdown: Oferta Educativa */}
                <li className={`${styles.menuItem} ${styles.dropdown}`}>
                    <span>Oferta Educativa</span>
                    <div className={styles.dropdownContent}>
                        <Link href="/oferta-educativa" className={styles.dropdownItem}>Ir a Oferta Educativa</Link>
                        <Link href="/fp-del-centro" className={styles.dropdownItem}>FP del centro</Link>
                    </div>
                </li>

                {/* Dropdown: Biblioteca */}
                <li className={`${styles.menuItem} ${styles.dropdown}`}>
                    <span>Biblioteca Escolar</span>
                    <div className={styles.dropdownContent}>
                        <Link href="/biblioteca" className={styles.dropdownItem}>
                            Provincias Andaluzas
                        </Link>
                    </div>
                </li>

                {/* Dropdown: Contacto */}
                <li className={`${styles.menuItem} ${styles.dropdown}`}>
                    <span>Contacto</span>
                    <div className={styles.dropdownContent}>
                        <Link href="/contacto" className={styles.dropdownItem}>Ir a Contacto</Link>
                        <Link href="#" className={styles.dropdownItem}>Formulario de contacto</Link>
                    </div>
                </li>
            </ul>

            {/* Barra de búsqueda lateral */}
            <div className={styles.searchContainer}>
                <input type="text" placeholder="Search" className={styles.searchInput} />
                <button className={styles.searchButton}>Search</button>
            </div>
        </nav>
    );
}
