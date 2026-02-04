import styles from './page.module.css';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import InfoCard from '@/components/InfoCard';
import Sidebar from '@/components/Sidebar';
import FooterAddress from '@/components/Footer';
import BootstrapCard from '@/components/BootstrapCard';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Navbar />

      <div className={styles.contentWrapper}>
        <div className={styles.mainColumn}>
          <BootstrapCard />
          <BootstrapCard />
        </div>

        <div className={styles.sidebarColumn}>
          <div className={styles.searchMobile}>
          </div>
          <Sidebar />
        </div>
      </div>

      <FooterAddress />
    </main>
  );
}
