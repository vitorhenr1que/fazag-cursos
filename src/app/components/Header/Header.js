import Image from "next/image"
import logobranca from '../../../../public/logobranca.png'
import styles from './style.module.scss'
import Link from "next/link"

export function Header(){
    return (
        <header>
        <nav className={styles.nav}>
            <div className={styles.headerContainer}>

                <div className={styles.divImg}>
                    <Link href={'/'}><Image src={logobranca} className={styles.logoImg} alt="logo" width={200} /></Link>
                </div>

                <ul className={styles.ul}>
                    <li>
                        <Link href={'/'}>INICIO</Link>
                    </li>
                    <li>
                        <Link href={'/'}>O CURSO</Link>
                    </li>
                    <li>
                        <Link href={'/'}>CONTATO</Link>
                    </li>
                </ul>

                <button className={styles.button}>
                    <Link target="_blank" id='click_whatsapp_header' href={'https://api.whatsapp.com/send?phone=5575981048077&text=Ol%C3%A1,%20gostaria%20de%20me%20matricular'}>MATRICULE-SE</Link>
                </button>

            </div>
        </nav>
        </header>
    )
}