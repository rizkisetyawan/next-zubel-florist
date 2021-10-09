import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zubel Florist</title>
        <meta name="description" content="Bouquet murah cileungsi" />
        <link rel="icon" href="/logo.jpeg" />
      </Head>

      <Image src="/logo.jpeg" alt="Zubel Logo" width={270} height={258} />
      <h1 className={styles.title}>Zubel Florist</h1>
      <div className={styles.wrapper}>
        <a className={styles.wa} href="https://wa.me/6285156777699?text=Saya%20tertarik%20dengan%20bouquet%20yang%20anda%20jual">WhatsApp</a>
        <a className={styles.shopee} href="https://shopee.co.id/zubel_florist">Shopee</a>
        <a className={styles.line} href="https://lin.ee/ORKv6pE">Line</a>
      </div>
    </div>
  )
}
