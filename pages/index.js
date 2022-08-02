import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Advanced Network Technology</title>
        <meta name="description" content="Web Developers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      This is home page   
    </div>
  );
}
