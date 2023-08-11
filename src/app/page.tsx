import styles from './page.module.scss'
import {Hero} from "@/components/Hero/Hero";
import {Header} from "@/components/Header/Header";
import {ValueProposition} from "@/components/ValueProposition/ValueProposition";
import {Process} from "@/components/Process/Process";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <Hero/>
      <ValueProposition/>
      <Process/>
    </main>
  )
}
