import Link from 'next/link'
import styles from './style.module.scss'

export function InfoCourse(){
    return(
        <div className={`container`}>
            <div className={styles.infoContainer}>
                <p>
                <strong>Confira algumas das disciplinas que você vai estudar e baixe a matriz curricular do curso:</strong>
                </p>
                <ul>
                    <li>Linguagens e Métodos Universitários</li>
                    <li>Psicologia da Educação</li>
                    <li>Psicologia em Terapia</li>
                    <li>Psicologia Mental</li>
                    <li>Psicologia Neurofuncional</li>
                    <li>Trabalho de Conclusão de Curso</li>
                </ul>
                <Link href={"/"} className={styles.linkMatriz}>Baixe a matriz do curso</Link>
            </div>
        </div>
        
    )
}