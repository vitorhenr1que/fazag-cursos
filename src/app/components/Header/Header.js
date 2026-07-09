import Image from "next/image"
import Link from "next/link"
import logobranca from '../../../../public/logobranca.png'
import styles from './style.module.scss'

const whatsappLink = 'https://api.whatsapp.com/send?phone=5575981048077&text=Ol%C3%A1,%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas'

export function Header(){
    return (
        <header>
        <nav className={styles.nav} aria-label="Navegação principal">
            <div className={styles.headerContainer}>

                <div className={styles.divImg}>
                    <Link href={'/'} aria-label="Ir para a página inicial">
                        <Image src={logobranca} className={styles.logoImg} alt="FAZAG" width={200} />
                    </Link>
                </div>

                <ul className={styles.ul}>
                    <li>
                        <Link href={'/'}>INÍCIO</Link>
                    </li>
                    <li>
                        <Link href={'/#nossos-cursos'}>CURSOS</Link>
                    </li>
                    <li>
                        <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">CONTATO</Link>
                    </li>
                </ul>

                <Link href={'/matriculas'} className={styles.button}>MATRICULE-SE</Link>

            </div>
        </nav>
        </header>
    )
}
