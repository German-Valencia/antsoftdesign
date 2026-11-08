import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Intro } from "../components/Intro";
import { Services } from "../components/Services";
import { Testimonials } from "../components/Testimonials";
import { data } from "../data";

export default function Home({ services }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>ANT Soft Design | Diseño y desarrollo web</title>
        <meta
          name="description"
          content="Diseñamos y desarrollamos sitios web, tiendas en línea y productos digitales para empresas."
        />
        <link rel="canonical" href="https://antsoftdesign.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_LA" />
        <meta property="og:site_name" content="ANT Soft Design" />
        <meta
          property="og:title"
          content="ANT Soft Design | Diseño y desarrollo web"
        />
        <meta
          property="og:description"
          content="Diseñamos y desarrollamos sitios web, tiendas en línea y productos digitales para empresas."
        />
        <meta property="og:url" content="https://antsoftdesign.vercel.app/" />
        <meta name="twitter:card" content="summary" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
      <Services services={services} />
      <Testimonials />
    </div>
  );
}

export const getStaticProps = async () => {
  const services = data;
  return {
    props: { services },
  };
};
