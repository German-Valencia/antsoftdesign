import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Services.module.css";

export const Services = ({ services }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Qué hacemos por tí?</h1>
      <h1 className={styles.subtitle}>
        Nuestros Servicios:
      </h1>
      <div className={styles.services}>
        {services.map((service) => (
          <Link passHref key={service.id} href={`/products/${service.name}`}>
            <div className={styles.service}>
                <div className={styles.desc}>{service.desc}</div>
              <span className={styles.cat}>{service.title}</span>
              <div className={styles.media}>
                {service.video ? (
                  <video
                    src={`/${service.video}`}
                    autoPlay                   
                    loop
                    className={styles.video}
                  />
                ) : (
                  <Image
                    src={`/${service.photo}`}
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="cover"
                    alt="imagen"
                  />
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
