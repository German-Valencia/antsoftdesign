import { data } from "../../data";
import styles from "../../styles/Product.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Product = ({ product }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{product.title} | ANT Soft Design</title>
        <meta name="description" content={product.desc} />
        <link
          rel="canonical"
          href={`https://antsoftdesign.vercel.app/products/${product.name}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_LA" />
        <meta property="og:site_name" content="ANT Soft Design" />
        <meta
          property="og:title"
          content={`${product.title} | ANT Soft Design`}
        />
        <meta property="og:description" content={product.desc} />
        <meta
          property="og:url"
          content={`https://antsoftdesign.vercel.app/products/${product.name}`}
        />
        <meta name="twitter:card" content="summary" />
      </Head>
      <div className={styles.cardL}>
        {product.images.map((img, index) => (
          <div key={img.id} className={styles.imgContainer}>
            {img.url ? (
              <Link
                href={img.url}
                target="_blank"
                rel="noreferrer"
                className={styles.imageLink}
              >
                <Image
                  src={img.pag}
                  fill
                  sizes="(max-width: 480px) 250px, 15vw"
                  style={{ objectFit: "cover" }}
                  alt={`${product.title} proyecto ${index + 1}`}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </Link>
            ) : (
              <Image
                src={img.pag}
                fill
                sizes="(max-width: 480px) 250px, 15vw"
                style={{ objectFit: "cover" }}
                alt={`${product.title} proyecto ${index + 1}`}
                loading={index === 0 ? "eager" : "lazy"}
              />
            )}
          </div>
        ))}
      </div>
      <div className={styles.cardS}>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.desc}>{product.longDesc} </p>
        <Link href="/contact" className={styles.button}>
          Contáctanos
        </Link>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const products = data;
  const paths = products.map((item) => {
    return {
      params: { name: item.name },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const name = ctx.params.name;
  const product = data.filter((item) => item.name === name)[0];
  return {
    props: { product },
  };
};

export default Product;
