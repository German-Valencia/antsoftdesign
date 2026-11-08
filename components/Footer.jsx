import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <Image src="/logo1.png" width={300} height={60} alt="ANT" />
        {/* <h1 className={styles.title}>ANT</h1> */}
        {/* <h1 className={styles.linkTitle}>
          <Link href="/contact" passHref>
            <a>
              <span className={styles.linkText}>Trabaja con nosotros</span>
              <Image className={styles.linkImg} src="/link.png" width="20px" height="20px" alt="imagen" />
            </a>
          </Link>
        </h1> */}
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          Argentina: <a href="tel:+542616094179">+54 261 609 4179</a>
          <br />
          <br />
          Colombia: <a href="tel:+573028440095">+57 302 844 0095</a>
          <br />
          <br />
          <a href="mailto:antsoftdesign@gmail.com">antsoftdesign@gmail.com</a>
        </div>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          Síguenos en Facebook: <br />
          <a
            href="https://web.facebook.com/profile.php?id=100087498872757"
            title="Visitar la página de ANT Soft Design en Facebook"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar la página de ANT Soft Design en Facebook"
          >
            Facebook
          </a>
        </div>
        <div className={styles.cardItem}>
          © {new Date().getFullYear()} ANT
          <br /> Todos los derechos reservados
        </div>
      </div>
    </div>
  );
}

export default Footer;
