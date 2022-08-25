import Image from "next/image";
import styles from "../styles/Intro.module.css";
import { Circle } from "./Circle";
import Typewriter from "typewriter-effect";
import Link from "next/link";

export const Intro = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#596a8d" top="-50vh" left="-50vh" />
      <Circle backgroundColor="#596a8d" right="-50vh" top="50vh" />
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span>Necesitas </span>
          <Typewriter
            options={{
              strings: [
                "Potenciar tu empresa?",
                "Una landing page?",
                "Un sitio web?",
                "Estrategias SEO?",
                "Estrategias de marketing?",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 10,
            }}
          />
          <span className={styles.brand}>ANT LA MEJOR OPCIÓN</span> <br /> SOMOS
          TU AGENCIA DE PRODUCTOS DIGITALES
        </h1>
        <p className={styles.desc}>
          Creamos segmentos vivos, centrados en las personas correctas
          basándonos en sus necesidades, nuestras soluciones cuentan con las
          herramientas necesarias para su óptimo desempeño, te asesoramos en la
          creación de sitios ajustados a tus necesidades: landing page, corporativos,
          e-commerce, entre una gran variedad de opciones.
        </p>
        <Link href="/contact" passHref>
        <button className={styles.button}>DESCUBRE</button>            
          </Link>
      </div>
      <div className={styles.card}>
        <div className={styles.img}>
          <Image
            src="/responsive.png"
            width="111%"
            height="60%"
            layout="responsive"
            objectFit="cover"
            alt="pcs"
          />
        </div>
      </div>
    </div>
  );
};
