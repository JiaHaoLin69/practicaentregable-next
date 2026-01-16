import styles from './page.module.css';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import InfoCard from '@/components/InfoCard';
import Sidebar from '@/components/Sidebar';
import FooterAddress from '@/components/Footer';


export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Navbar />

      <div className={styles.contentWrapper}>
        <div className={styles.mainColumn}>
          <InfoCard
            title="Almería"
            description="Tierra de alumnos de ASIR y DAW"
            imageSrc="/portada-almeria-1-scaled.webp"
          />
          <InfoCard
            title="Algo"
            description="Algo pa decir"
            imageSrc="/biblioWeb.png"
          />
        </div>

        <div className={styles.sidebarColumn}>
          <div className={styles.searchMobile}>
            {/* Only for mobile if needed, but keeping structure clean */}
          </div>
          <Sidebar />
        </div>
      </div>

      <FooterAddress />
    </main>
  );
}
