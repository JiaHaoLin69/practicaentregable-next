import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.menu}>
                <li className={styles.menuItem}>
                    <Link href="/" className={styles.active}>Inicio</Link>
                </li>
                <li className={`${styles.menuItem} ${styles.dropdown}`}>
                    <span>Noticias</span>
                    <div className={styles.dropdownContent}>
                        <Link href="/noticias" className={styles.dropdownItem}>Ir a Noticias</Link>
                        <Link href="#" className={styles.dropdownItem}>Trofeo del director</Link>
                    </div>
                </li>
                <li className={`${styles.menuItem} ${styles.dropdown}`}>
                    <span>Oferta Educativa</span>
                    <div className={styles.dropdownContent}>
                        <Link href="/oferta-educativa" className={styles.dropdownItem}>Ir a Oferta Educativa</Link>
                        <Link href="#" className={styles.dropdownItem}>FP del centro</Link>
                    </div>
                </li>
                <li className={`${styles.menuItem} ${styles.dropdown}`}>
                    <span>Biblioteca Escolar</span>
                    <div className={styles.dropdownContent}>
                        <Link href="/biblioteca" className={styles.dropdownItem}>
                            Provincias Andaluzas
                        </Link>
                    </div>
                </li>
                <li className={`${styles.menuItem} ${styles.dropdown}`}>
                    <span>Contacto</span>
                    <div className={styles.dropdownContent}>
                        <Link href="/contacto" className={styles.dropdownItem}>Ir a Contacto</Link>
                        <Link href="#" className={styles.dropdownItem}>Formulario de contacto</Link>
                    </div>
                </li>
            </ul>
            <div className={styles.searchContainer}>
                <input type="text" placeholder="Search" className={styles.searchInput} />
                <button className={styles.searchButton}>Search</button>
            </div>
        </nav>
    );
}
