import styles from './Sidebar.module.css'; // Importa los estilos CSS Modules específicos para la barra lateral

// Componente Sidebar: Muestra la barra lateral derecha con widgets y enlaces útiles
export default function Sidebar() {
    return (
        <aside className={styles.sidebar}> {/* Contenedor principal de la barra lateral (aside es semántico) */}
            {/* Widget 1: Biblioweb Séneca */}
            <div className={styles.widget}>
                <div className={`${styles.biblioweb} ${styles.placeholder}`}>
                    <div className={styles.bibliowebContent}>
                        <span className={styles.bookIcon}></span> {/* Icono decorativo del libro */}
                        <div className={styles.bibliowebText}>
                            <span className={styles.bwTitle}>biblioweb</span>
                            <span className={styles.bwSubtitle}>séneca</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.widget}>
                <div className={`${styles.videoPlaceholder} ${styles.placeholder}`}>
                    <div className={styles.videoHeader}>
                        <span className={styles.avatar}>logo</span>
                        <span className={styles.videoTitle}>IES Cura Valera Trof...</span>
                    </div>
                    <div className={styles.playButton}>▶</div> {/* Botón de reproducción simulado */}
                    <iframe width="300" height="215" src="https://www.youtube.com/embed/o_78Ue_EUeI?si=arMRuz6jBBfleQ0f" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
                </div>
            </div>
        </aside>
    );
}
