import Image from 'next/image'
import styles from './page.module.scss'
import { oswald } from './layout'
import fotoFazag from '../../public/fazag.png'
import Link from 'next/link'


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        <div className={styles.mainTextContainer}>

          <div className={styles.textDiv}>
            <div className={styles.ofertaContainer}>
              <span>OFERTA LIMITADA!!!</span>
            </div>
            <h1 className={`${oswald.className} ${styles.divh1}`}><span className={styles.spanBlue}>JUNTE-SE A NÓS!</span><span>INDIQUE UM AMIGO E GANHE 10% DE DESCONTO DURANTE TODO O SEMESTRE!</span></h1>
            <span className={styles.spanValue}>Cursos a partir de R$ 361,20/mês</span>

          <div className={styles.divButtons}>
            
            <Link href="#nossos-cursos" data-bs-spy="scroll" data-bs-target="#nossos-cursos">
              <button>Conhecer as graduações</button>
            </Link>
            
            <Link href={'/matricular'} className={styles.link}>Matricular agora</Link>
          </div>

          </div>
          

          <div className={styles.imgDiv}>
            <Image className={styles.fazagImg} src={fotoFazag} objectFit='cover' fill alt={"Foto do Prédio da FAZAG"}/>
          </div>
          
        </div>
      </div>
    </main>
  )
}
