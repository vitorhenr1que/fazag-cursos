import Image from 'next/image'
import styles from './page.module.scss'
import { oswald } from './layout'
import fotoFazag from '../../public/fazag.jpg'
import Link from 'next/link'


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        <div className={styles.mainTextContainer}>

          <div className={styles.textDiv}>
            <h1 className={`${oswald.className} ${styles.divh1}`}><span className={styles.spanBlue}>MATRICULE-SE AGORA</span><span>E GANHE ATÉ 50% DE DESCONTO DURANTE TODO O CURSO</span></h1>
            <span className={styles.spanValue}>Cursos a partir de R$ 180,60/mês</span>

          <div className={styles.divButtons}>
            
            <Link href="#nossos-cursos" scroll={true} data-bs-spy="scroll" data-bs-target="#nossos-cursos">
              <button>Conhecer as graduações</button>
            </Link>
            
            <Link target="blank" href={'https://docs.google.com/forms/d/e/1FAIpQLScJfSdlpyltqrLxa21H8bJE62xNkwI-BwqrPOoES1wu9pCSyA/viewform?pli=1'} className={styles.link}>Matricular agora</Link>
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
