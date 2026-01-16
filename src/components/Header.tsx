import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.imageContainer}>
        <Image
          src="/header.jpg"
          alt="IES Cura Valera Header"
          fill
          priority
          className={styles.headerImage}
        />
        <div className={styles.overlay}>
          <div className={styles.logoContainer}>
            <Image
              src="/logo.png"
              alt="Logo"
              width={80}
              height={80}
              className={styles.logo}
            />
          </div>
          <h1 className={styles.title}>IES Cura Valera</h1>
          <p className={styles.subtitle}>HUÉRCAL-OVERA</p>
        </div>
      </div>
    </header>
  );
}
