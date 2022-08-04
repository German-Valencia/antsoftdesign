import Image from "next/image";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.carL}>
        <h1 className={styles.title}>Advance Network Technolgy</h1>
        <h1 className={styles.linkTitle}>
          <a href="/contact" passHref>
            <span>Trabaja con nosotros</span>
            <Image src="/yahoo.png" width="40px" height="40px" alt="imagen" />
          </a>
        </h1>
      </div>
      <div className={styles.carS}></div>
      <div className={styles.carS}></div>
    </div>
  );
}

export default Footer;
