import Image from "next/image";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>Advance Network Technolgy</h1>
        <h1 className={styles.linkTitle}>
          <a href="/contact" passHref>
            <span className={styles.linkText}>Trabaja con nosotros</span>
            <Image src="/link.png" width="40px" height="40px" alt="imagen" />
          </a>
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          12 ADAM STREET NY <br /> USA
        </div>
        <div className={styles.cardItem}>
          antsoftdesign@gmail.com <br /> +57 315 745 62 80
        </div>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          SÍGUENOS: <br /> __FB __IN __BE __TW
        </div>
        <div className={styles.cardItem}>
          © 2022 ANT <br /> TODOS LOS DERECHOS RESERVADOS
        </div>
      </div>
    </div>
  );
}

export default Footer;
