import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <Image src="/logo1.png" width="300px" height="60px" alt="imagen" />
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
          Argentina: +54 261 609 4179
          <br />
          <br />
          Colombia: +57 302 844 0095 <br />
          <br />
          <a href="mailto:antsoftdesign@gmail.com">antsoftdesign@gmail.com</a>
        </div>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          Síguenos: <br />
          <a
            href="https://web.facebook.com/profile.php?id=100087498872757"
            title="Visita nuestra página de Facebook"
            target="_blank"
            rel="noopener noreferrer"
            alt="Enlace a nuestra página de Facebook"
            aria-label="Enlace a nuestra página de Facebook"
          >
            __FB{" "}
          </a>
          __IN __X
        </div>
        <div className={styles.cardItem}>
          © 2022 ANT <br /> Todos los derechos reservados
        </div>
      </div>
    </div>
  );
}

export default Footer;
