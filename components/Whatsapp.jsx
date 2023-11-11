import styles from "../styles/Whatsapp.module.css";
import Image from "next/image";

import React from "react";

function Whatsapp() {
  return (
    <div className={styles.container}>
      <a
        className={styles.img}
        href="https://api.whatsapp.com/send?phone=+542616094179&amp;text=Hola!%20Me%20comunico%20desde%20la%20p%C3%A1gina%20web%20para"
        rel="noreferrer nofollow"
        target="_blank"
        title="Contáctanos por WhatsApp"
      >
        <Image src="/whatsapp.png" alt="whatsapp" width="80%" height="80%" />
      </a>
    </div>
  );
}

export default Whatsapp;
