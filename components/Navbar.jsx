import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <Link href="/">
        <a className={styles.img}>
          <Image src="/antligth.png" alt="logo" width="200%" height="60%" />
        </a>
      </Link>
      <ul className={styles.list}>
        <Link href="/products/design">
          <li className={styles.listItems}>Diseño</li>
        </Link>
        <Link href="/products/development">
          <li className={styles.listItems}>Desarrollo</li>
        </Link>
        <Link href="/products/production">
          <li className={styles.listItems}>Producción</li>
        </Link>
        <Link href="/products/photography">
          <li className={styles.listItems}>Fotografía</li>
        </Link>
        <Link href="/contact">
          <li className={styles.listItems}>Contacto</li>
        </Link>
      </ul>
      <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
      <ul
        onClick={() => setOpen(false)}
        className={styles.menu}
        style={{ right: open ? "0px" : "-50vw" }}
      >
        <li className={styles.menuItems}>
          <Link href="/products/design">Diseño WEB</Link>
        </li>
        <li className={styles.menuItems}>
          <Link href="/products/development">Desarrollo</Link>
        </li>
        <li className={styles.menuItems}>
          <Link href="/products/production">Producción</Link>
        </li>
        <li className={styles.menuItems}>
          <Link href="/products/photography">Fotografía</Link>
        </li>
        <li className={styles.menuItems}>
          <Link href="/contact">Contacto</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
