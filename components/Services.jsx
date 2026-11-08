import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Services.module.css";

export const Services = ({ services }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Qué hacemos por ti?</h1>
      <h1 className={styles.subtitle}>Nuestros Servicios:</h1>
      <div className={styles.services}>
        {services.map((service) => (
          <Link key={service.id} href={`/products/${service.name}`}>
            <div className={styles.service}>
              <div className={styles.desc}>{service.desc}</div>
              <span className={styles.cat}>{service.title}</span>
              <div className={styles.media}>
                {service.video ? (
                  <video
                    type="video/mp4"
                    src={`/${service.video}`}
                    autoPlay
                    muted
                    loop
                    className={styles.video}
                  />
                ) : (
                  <Image
                    src={`/${service.photo}`}
                    fill
                    sizes="(max-width: 480px) 255px, 425px"
                    style={{ objectFit: "cover" }}
                    alt={service.title}
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
