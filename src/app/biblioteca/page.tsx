import InfoCard from '@/components/InfoCard';
import styles from '../page.module.css';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import FooterAddress from '@/components/Footer';
import BootstrapCard from '@/components/BootstrapCard';

export default function BibliotecaPage() {
    return (
        <main className={styles.main}>
            <Header />
            <Navbar />

            <div className={styles.contentWrapper} style={{ justifyContent: 'center' }}>
                <div style={{ maxWidth: '600px', width: '100%' }}>
                    <h1 style={{ margin: '20px 0', textAlign: 'center' }}>Biblioteca Escolar</h1>
                    <BootstrapCard />
                    <InfoCard
                        title="Almería"
                        description="Tierra de alumnos de ASIR y DAW"
                        imageSrc="/portada-almeria-1-scaled.webp"
                    />
                </div>
            </div>

            <FooterAddress />
        </main>
    );
}
