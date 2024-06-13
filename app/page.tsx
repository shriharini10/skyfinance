import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.hero}>
      {/* Header of the main page */}
      <div className={styles.header}>
        <Image src='/Logo.svg' alt="Logo image" height={40} width={190} />

        {/* <div className={styles.controls}>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>FAQ</li>
            </ul>

        </div> */}

        <button>Get in touch</button>
      </div>

      {/* first section of hero page */}
      <div className={styles.first_section}>

        <p className={styles.specialheading}>WELCOME TO SKY FINANCIAL</p>

        <h1>Life's a Journey,&nbsp; Fly Confidently&nbsp; with our&nbsp; Protection<span className={styles.dot}>.</span></h1>


        <div className={styles.heropara}>
          <p>At Sky Financial, we specialize in providing comprehensive&nbsp; life insurance and annuity options tailored to meet the&nbsp; unique needs of individuals across all age groups and&nbsp; income levels. As a licensed provider in all 50 states, we&nbsp; are dedicated to helping clients nationwide secure their&nbsp; financial futures with innovative insurance solutions.</p>
          <p>Explore our website to learn more about our products and how we can help you achieve peace of mind and financial security.</p>
        </div>

        <p className={styles.specialheading}>Get in touch <Image src='/Arrow 1.svg' alt="arrow image" width={24} height={12} /></p>
      </div>

      
    </div>
  );
}
