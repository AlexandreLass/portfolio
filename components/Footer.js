import styles from '../styles/Footer.module.css'

export default function Footer() {
    return (
        <div className={styles.footer}>
          <p className={styles.name}>
            © {new Date().getFullYear()} Alexandre Lassaigne
          </p>
        </div>
      );
}