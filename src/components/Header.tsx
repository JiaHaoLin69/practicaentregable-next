import Image from 'next/image'; // Componente Image optimizado de Next.js (carga perezosa, redimensionado automático, etc.)
import styles from './Header.module.css';

// Componente Header: La cabecera visual grande con la imagen de fondo y el logo
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.imageContainer}>
        {/* Imagen de fondo del header */}
        <Image
          src="/header.jpg"
          alt="IES Cura Valera Header"
          fill // Propiedad para llenar el contenedor padre (position: relative necesario en el padre)
          priority // Carga esta imagen con prioridad alta (útil para LCP - Largest Contentful Paint)
          className={styles.headerImage}
        />

        {/* Capa superpuesta con el logo y el texto */}
        <div className={styles.overlay}>
          <div className={styles.logoContainer}>
            <Image
              src="/logo.png" // Ruta a la imagen del logo en public/
              alt="Logo"
              width={80} // Dimensiones explícitas requeridas si no se usa 'fill'
              height={80}
              className={styles.logo}
            />
          </div>
          <h1 className={styles.title}>IES Cura Valera</h1>
          <p className={styles.subtitle}>HUÉRCAL-OVERA</p>
        </div>
      </div>
    </header>
  );
}
