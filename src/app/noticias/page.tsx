import InfoCard from '@/components/InfoCard'; // Componente reutilizable para mostrar tarjetas con información
import styles from '../page.module.css'; // Reutilizamos estilos de la página principal (o propios si creas uno nuevo)
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import FooterAddress from '@/components/Footer';


// Página de Biblioteca: Muestra recursos o enlaces relacionados con la biblioteca
export default function noticiaspage() {
    return (
        <main className={styles.main}>
            {/* Cabecera y Navegación comunes */}
            <Header />
            <Navbar />

            {/* Contenido principal centrado */}
            <div className={styles.contentWrapper} style={{ justifyContent: 'center' }}>
                <div style={{ maxWidth: '600px', width: '100%' }}>
                    <h1 style={{ margin: '20px 0', textAlign: 'center' }}>Noticias Escolar</h1>

                    {/* Lista de tarjetas informativas (InfoCards) */}
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
                    <InfoCard
                        title="Otra cosa"
                        description="Más cosas que decir"
                        imageSrc="/biblioWeb.png"
                    />
                </div>
            </div>

            {/* Pie de página común */}
            <FooterAddress />
        </main>
    );
}
