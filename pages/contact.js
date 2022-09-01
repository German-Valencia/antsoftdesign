import styles from "../styles/Contact.module.css";
import { Circle } from "../components/Circle";

const contact = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#596a8d" left="-60vh" top="-50vh" />
      <Circle backgroundColor="#596a8d" right="-50vh" bottom="-70vh" />
      <h1 className={styles.title}>Contáctanos</h1>
      <form
        action="https://formsubmit.co/antsoftdesign@gmail.com"
        method="POST"
        className={styles.form}
      >
        <input
          type="text"
          name="name"
          className={styles.inputS}
          placeholder="Nombre"
          required
        />
        <input
          type="text"
          name="tel"
          className={styles.inputS}
          placeholder="Teléfono"
          required
        />
        <input
          type="email"
          name="email"
          className={styles.inputL}
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="asunto"
          className={styles.inputL}
          placeholder="Asunto"
          required
        />
        <textarea
          type="text"
          name="mensaje"
          className={styles.textArea}
          placeholder="Mensaje"
          rows={6}
          required
        />
        <button type="submit" className={styles.button}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default contact;
