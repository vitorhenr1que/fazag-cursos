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
            <h1 className={`${oswald.className} ${styles.divh1}`}><span className={styles.spanBlue}>MATRICULE-SE AGORA</span><span>E GANHE ATÉ 50% DE DESCONTO DURANTE TODO O CURSO</span></h1>
            <span className={styles.spanValue}>Cursos a partir de R$ 180,60/mês</span>

          <div className={styles.divButtons}>
            
            <Link href="#nossos-cursos" data-bs-spy="scroll" data-bs-target="#nossos-cursos">
              <button>Conhecer as graduações</button>
            </Link>
            
            <Link target="_blank" id='click_whatsapp_home' href={'https://api.whatsapp.com/send?phone=5575981048077&text=Ol%C3%A1,%20gostaria%20de%20me%20matricular'} className={styles.link}>Matricular agora</Link>
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
