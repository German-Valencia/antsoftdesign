import Head from "next/head";
import styles from "../styles/Contact.module.css";
import { Circle } from "../components/Circle";

const contact = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contacto | ANT Soft Design</title>
        <meta
          name="description"
          content="Ponte en contacto con ANT Soft Design para hablar sobre tu próximo proyecto digital."
        />
        <link
          rel="canonical"
          href="https://antsoftdesign.vercel.app/contact"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_LA" />
        <meta property="og:site_name" content="ANT Soft Design" />
        <meta property="og:title" content="Contacto | ANT Soft Design" />
        <meta
          property="og:description"
          content="Ponte en contacto con ANT Soft Design para hablar sobre tu próximo proyecto digital."
        />
        <meta
          property="og:url"
          content="https://antsoftdesign.vercel.app/contact"
        />
        <meta name="twitter:card" content="summary" />
      </Head>
      <Circle backgroundColor="#596a8d" left="-60vh" top="-50vh" />
      <Circle backgroundColor="#596a8d" right="-50vh" bottom="-70vh" />
      <h1 className={styles.title}>Contáctanos</h1>
      <form
        action="https://formspree.io/f/mbjbdjdq"
        method="POST"
        className={styles.form}
      >
        <div className={`${styles.field} ${styles.fieldS}`}>
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Nombre"
            required
          />
        </div>
        <div className={`${styles.field} ${styles.fieldS}`}>
          <label htmlFor="tel">Teléfono</label>
          <input
            id="tel"
            type="tel"
            name="tel"
            autoComplete="tel"
            placeholder="Teléfono"
            required
          />
        </div>
        <div className={`${styles.field} ${styles.fieldL}`}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Email"
            required
          />
        </div>
        <div className={`${styles.field} ${styles.fieldL}`}>
          <label htmlFor="asunto">Asunto</label>
          <input
            id="asunto"
            type="text"
            name="asunto"
            placeholder="Asunto"
            required
          />
        </div>
        <div className={`${styles.field} ${styles.fieldL}`}>
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            placeholder="Mensaje"
            rows={6}
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default contact;
