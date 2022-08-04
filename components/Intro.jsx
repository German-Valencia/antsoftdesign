import Image from "next/image";
import styles from "../styles/Intro.module.css";
import { Circle } from "./Circle";

export const Intro = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#596a8d" top="-50vh" left="-50vh" />
      <Circle backgroundColor="#596a8d" right="-50vh" top="50vh"/>
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brand}>SOMOS TU</span> AGENCIA DE PRODUCTOS
          DIGITALES
        </h1>
        <p className={styles.desc}>
          Creamos segmentos vivos y objetivos para las personas correctas
          basados en sus necesidades. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Assumenda vitae veniam tempore quas, quo
          reprehenderit voluptas in tenetur atque dolorem repellendus eveniet
          odit quia molestiae iste sint, obcaecati, laborum laboriosam. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Impedit quasi
          deserunt ullam ducimus sunt iusto quis ipsa earum commodi itaque! Rem
          nemo, voluptatem sint voluptatibus aliquam ea sit? Assumenda, ullam?
        </p>
        <button className={styles.button}>DESCUBRE</button>
      </div>
      <div className={styles.card}>
        <div>
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
