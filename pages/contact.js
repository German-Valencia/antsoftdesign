import styles from "../styles/Contact.module.css";
import { Circle } from "../components/Circle";

const contact = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#596a8d" left="-40vh" top="-20vh" />
      <Circle backgroundColor="#596a8d" right="-30vh" bottom="-60vh" />
      <h1 className={styles.title}>Contáctanos</h1>
      <form className={styles.form}>
        <input className={styles.inputS} placeholder="Nombre" />
        <input className={styles.inputS} placeholder="Teléfono" />
        <input className={styles.inputL} placeholder="Email" />
        <input className={styles.inputL} placeholder="Comentario" />
        <textarea className={styles.textArea} placeholder="Mensaje" rows={6} />
        <button className={styles.button}>Enviar</button>
      </form>
    </div>
  );
};

export default contact;
