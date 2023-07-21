'use client'
import { BiMailSend } from 'react-icons/bi'
import { MdWhatsapp } from 'react-icons/md'
import styles from './style.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Matriz(){
    const route = useRouter()
    console.log('AQUIIIII!!!', route)
    function backRoute(){
        return route.back()
    }
return (
    <div className={styles.matrizContainer}>
        <div className={styles.matrizGrid}>
            <div className={styles.a}>
                <BiMailSend size={132} color='#479eff'/>
            </div>
            <div className={styles.b}>
                <p>A matriz foi enviada! 
                    <span>Verifique em sua caixa de e-mail.</span>
                </p>
            </div>
            <div className={styles.c}>
                <p>Se você não recebeu o e-mail ou possui alguma dúvida, sinta-se à vontade para entrar em contato diretamente com um de nossos atendentes.</p>
            </div>
            <div className={styles.d}>
                <Link href="/" className={styles.linkWhatsapp}>
                    <MdWhatsapp size={32} color="#fff"/>
                    <span>ENTRE EM CONTATO</span>
                </Link>
            </div>
            <div className={styles.e}>
            <Link href="#" onClick={() => backRoute()} className={styles.linkBack}>
                    <span>VOLTAR</span>
                </Link>
            </div>
        </div>
    </div>
)
}