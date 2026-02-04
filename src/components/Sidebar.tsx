import styles from './Sidebar.module.css';

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.widget}>
                <div className={`${styles.biblioweb} ${styles.placeholder}`}>
                    <div className={styles.bibliowebContent}>
                        <span className={styles.bookIcon}></span>
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
                    <div className={styles.playButton}>▶</div>
                </div>
            </div>
        </aside>
    );
}
