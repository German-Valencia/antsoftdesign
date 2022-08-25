import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <Image src="/antligth.png" width="132px" height="40px" alt="imagen" />
        {/* <h1 className={styles.title}>ANT</h1> */}
        <h1 className={styles.linkTitle}>
          <Link href="/contact" passHref>
            <a>
            <span className={styles.linkText}>Trabaja con nosotros</span>
            <Image src="/link.png" width="30px" height="30px" alt="imagen" />
            </a>
          </Link>
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          Cra 26 # 32-21 Palmira V.<br /> Colombia
        </div>
        <div className={styles.cardItem}>
          antsoftdesign@gmail.com <br /> +57 315 745 62 80
        </div>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          Síguenos: <br />__FB __IN __TW
        </div>
        <div className={styles.cardItem}>
          © 2022 ANT <br /> Todos los derechos reservados
        </div>
      </div>
    </div>
  );
}

export default Footer;
