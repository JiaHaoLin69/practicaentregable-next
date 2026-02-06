import styles from './page.module.css'; // Estilos específicos de la página de inicio
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import InfoCard from '@/components/InfoCard';
import Sidebar from '@/components/Sidebar';
import FooterAddress from '@/components/Footer';
import BootstrapCard from '@/components/BootstrapCard';


// Componente Home: La página principal ("/")
export default function Home() {
  return (
    <main className={styles.main}>
      {/* Cabecera superior con imagen y logo */}
      <Header />

      {/* Barra de navegación horizontal */}
      <Navbar />

      {/* Contenedor principal del contenido, dividido normalmente en columnas por CSS */}
      <div className={styles.contentWrapper}>

        {/* Columna Izquierda/Central: Contenido principal (Noticias, tarjetas...) */}
        <div className={styles.mainColumn}>
          {/* Ejemplo de uso de tarjetas estilizadas con Bootstrap */}
          <BootstrapCard />
          <BootstrapCard />
        </div>

        {/* Columna Derecha: Barra lateral */}
        <div className={styles.sidebarColumn}>
          {/* Espacio reservado para búsqueda en móvil si se requiere */}
          <div className={styles.searchMobile}>
          </div>
          {/* Componente de barra lateral (Biblioweb, Video, etc.) */}
          <Sidebar />
        </div>
      </div>

      {/* Pie de página con dirección */}
      <FooterAddress />
    </main>
  );
}
