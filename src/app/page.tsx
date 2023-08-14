import styles from './page.module.scss'
import {Hero} from "@/components/Hero/Hero";
import {Header} from "@/components/Header/Header";
import {Footer} from "@/components/Footer/Footer";
import {Process} from "@/components/Process/Process";
import {Roadmap} from "@/components/Roadmap/Roadmap";
import {ValueProposition} from "@/components/ValueProposition/ValueProposition";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <Hero/>
      <ValueProposition/>
      <Process/>
      <Roadmap/>
      <Footer/>
    </main>
  )
}
