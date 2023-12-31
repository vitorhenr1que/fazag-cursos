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
                    <Link href={'/matricular'}>MATRICULE-SE</Link>
                </button>

            </div>
        </nav>
        </header>
    )
}