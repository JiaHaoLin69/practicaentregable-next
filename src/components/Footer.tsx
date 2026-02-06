import styles from './Footer.module.css';
import Logo from './logo';

export default function FooterAddress() {
    return (
        <div className={styles.footerAddress}>
            <div className={styles.content}>

               <div className={styles.addressBlock}>
                    <span className={styles.label}>Encuéntranos en...</span>
                    <div className={styles.addressInfo}>
                        <span className={styles.infoLabel}>DIRECCIÓN POSTAL:</span>
                        <span>Avda. Guillermo Reyna, 35</span>
                        <span>04600 HUÉRCAL-OVERA</span>
                    </div>
                </div>
                <div className={styles.web50}>
                    Web 50 aniversario
                </div>
                
                <div className={styles.socialArea}>
                    <Logo size={36} />
                </div>

                <div>
                    <h1>By Jia Hao Lin Wu</h1>
                </div>
            </div>
        </div>
    );
}
