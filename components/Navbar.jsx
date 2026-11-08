import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.img}>
        <Image
          src="/logo1.png"
          alt="ANT - Inicio"
          width={300}
          height={60}
          loading="eager"
          style={{ width: "100%", height: "auto" }}
        />
      </Link>
      <ul className={styles.list}>
        <li className={styles.listItems}>
          <Link href="/products/design">Diseño</Link>
        </li>
        <li className={styles.listItems}>
          <Link href="/products/development">Desarrollo</Link>
        </li>
        <li className={styles.listItems}>
          <Link href="/products/production">Producción</Link>
        </li>
        <li className={styles.listItems}>
          <Link href="/products/seo">SEO</Link>
        </li>
        <li className={styles.listItems}>
          <Link href="/contact">Contacto</Link>
        </li>
      </ul>
      <button
        type="button"
        className={styles.hamburger}
        onClick={() => setOpen(!open)}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </button>
      <ul
        id="mobile-menu"
        onClick={() => setOpen(false)}
        className={styles.menu}
        style={{ right: open ? "0px" : "-50vw" }}
        aria-hidden={!open}
        inert={!open}
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
          <Link href="/products/seo">SEO</Link>
        </li>
        <li className={styles.menuItems}>
          <Link href="/contact">Contacto</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
