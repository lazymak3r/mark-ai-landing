import styles from './page.module.scss'
import {Hero} from "@/components/Hero/Hero";
import {Header} from "@/components/Header/Header";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <Hero/>
    </main>
  )
}
