import Link from 'next/link'
import styles from './style.module.scss'
import Image from 'next/image'
import capelo from '../../../../public/capelo.png'
import mao from '../../../../public/mao.png'

export function InfoCourse(){
    const disciplines = 
    [
    "Linguagens e Métodos Universitários",
    "Psicologia da Educação",
    "Psicologia em Terapia",
    "Psicologia Mental",
    "Psicologia Neurofuncional",
    "Trabalho de Conclusão de Curso"
    ]
    return(
        <div className={`container ${styles.cont}`}>
            <div className={styles.infoContainer}>
                <p>
                <strong>Confira algumas das disciplinas que você vai estudar e baixe a matriz curricular do curso:</strong>
                </p>
                <ul>
                    {disciplines.map((index) => {
                        return (
                            <li>
                                <div className={styles.liCircle}></div>
                                <span>{index}</span>
                            </li>
                        )
                    })}
                </ul>
                <Link href={"/"} className={styles.linkMatriz}>Baixe a matriz do curso</Link>
            </div>

        </div>
        
    )
}