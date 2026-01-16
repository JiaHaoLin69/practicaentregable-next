import Image from 'next/image';
import styles from './Sidebar.module.css';

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.widget}>
                <div className={styles.imageContainer}>
                    <Image
                        src="/BiblioWeb.png"
                        alt="Biblioweb Séneca"
                        width={300}
                        height={150}
                        className={styles.sidebarImage}
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
            </div>

            <div className={styles.widget}>
                <div className={styles.videoContainer}>
                    <iframe
                        width="100%"
                        height="200"
                        src="https://www.youtube.com/embed/BwERsLlAuAc"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className={styles.videoFrame}
                    ></iframe>
                </div>
            </div>
        </aside>
    );
}
