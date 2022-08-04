import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <a>
          <Image src="/antligth.png" alt="logo" width="200%" height="50%" />
        </a>
      </Link>
      <ul className={styles.list}>
        <li className={styles.listItems}>
          <Link href="/products/design">Diseño WEB</Link>
        </li>
        <li className={styles.listItems}>
          <Link href="/products/development">Desarrollo</Link>
        </li>
        <li className={styles.listItems}>
          <Link href="/products/production">Producción</Link>
        </li>
        <li className={styles.listItems}>
          <Link href="/products/photography">Fotografía</Link>
        </li>
        <li className={styles.listItems}>
          <Link href="/products/contact">Contacto</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
