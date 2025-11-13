import Link from "next/link";
import styles from './style.module.scss'

export default function Matriculas() {
    return (
        <div className={styles.container}>
            <h1>Inscrições FAZAG 2026</h1>

            <div className={styles.containerLinks}>
                <h3>Formas de Ingresso</h3>
                <div className={styles.linkContainer}>
                <Link className={styles.link} target="_blank" href={'https://portais.qualinfonet.com.br/fazag/portalcandidato.vestibular.php?acao=directclean&vest_codigo=20261A'}>Vestibular Online</Link>
                <Link className={styles.link} target="_blank" href={'https://portais.qualinfonet.com.br/fazag/portalcandidato.vestibular.php?acao=directclean&vest_codigo=20261E'}>Nota do ENEM</Link>
                <Link className={styles.link} target="_blank" href={'https://portais.qualinfonet.com.br/fazag/portalcandidato.vestibular.php?acao=directclean&vest_codigo=20261T'}>Transferência Externa</Link>
                <Link className={styles.link} target="_blank" href={'https://portais.qualinfonet.com.br/fazag/portalcandidato.vestibular.php?acao=directclean&vest_codigo=20261S'}>Segunda Graduação</Link>
                </div>
            </div>
        </div>
    )
}