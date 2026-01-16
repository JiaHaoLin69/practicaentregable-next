import InfoCard from '@/components/InfoCard';
import styles from '../page.module.css';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import FooterAddress from '@/components/Footer';


export default function BibliotecaPage() {
    return (
        <main className={styles.main}>
            <Header />
            <Navbar />

            <div className={styles.contentWrapper} style={{ justifyContent: 'center' }}>
                <div style={{ maxWidth: '600px', width: '100%' }}>
                    <h1 style={{ margin: '20px 0', textAlign: 'center' }}>Biblioteca Escolar</h1>
                    
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
            </div>

            <FooterAddress />
        </main>
    );
}
