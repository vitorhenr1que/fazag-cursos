import Link from 'next/link'
import styles from './style.module.scss'
import Image from 'next/image'
import tree from '../../../../public/tree.png'
import { ModalMatriz } from '../ModalMatriz'
export function InfoCourse({course, discipline1, discipline2, discipline3, discipline4, discipline5, discipline6}){
    
    const disciplines = 
    [
    discipline1,
    discipline2,
    discipline3,
    discipline4,
    discipline5,
    discipline6
    ]

    
    return(
        <div className={`container ${styles.cont}`}>
            <div className={styles.infoContainer}>
                <p>
                <strong>Confira algumas das disciplinas que você vai estudar e baixe a matriz curricular do curso: </strong>
                </p>
                <ul>
                    {disciplines.map((index, position) => {
                        return (
                            <li key={position}>
                                <div className={styles.liCircle}></div>
                                <span>{index}</span>
                            </li>
                        )
                    })}
                </ul>
                <ModalMatriz course={course}/>
            </div>
            <div className={styles.divImgTree}>
                <Image className={styles.imgTree} src={tree} alt={"Árvore do conhecimento"} height={400} />
            </div>
        </div>
        
    )
}