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
        <title>Advanced Network Technology</title>
        <meta name="description" content="Web Developers" />
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
