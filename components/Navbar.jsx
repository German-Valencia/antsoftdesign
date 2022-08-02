import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <>
          <Image src="/antcomplet.png" alt="logo" width="200%" height="50%"/>
        </>
      </Link>
    </div>
  );
}

export default Navbar;
