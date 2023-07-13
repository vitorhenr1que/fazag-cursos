import styles from './style.module.scss'
import mec from '../../../../public/mec.png'
import { PiNumberSquareTwoFill, PiNumberSquareOneFill, PiStudentFill } from 'react-icons/pi'
import { LiaChalkboardTeacherSolid } from 'react-icons/lia'
import { GiMicroscope } from 'react-icons/gi'
import Image from 'next/image'

export function FiveReasons(){
    return(
        <div className={styles.trueContainer}>
            <div className={`container ${styles.containerReasons}`}>
                <h2>Por que escolher a FAZAG?</h2>
                <div className={styles.divIcons}>
                    <div className={styles.iconsCircle}>
                        <PiNumberSquareTwoFill size={40} color='#479eff'/>
                        <PiNumberSquareOneFill size={40} color='#479eff'/>
                    </div>
                    <div className={styles.iconsParagraph}>
                        <p>Faculdade com mais de 20 anos de história</p>
                    </div>    
                </div>

                <div className={styles.divIcons}>
                    <div className={styles.iconsCircle}>
                        <Image src={mec} alt={"Ícone Reconhecido pelo MEC"} width={80}/>
                    </div>
                    <div className={styles.iconsParagraph}>
                        <p>Cursos autorizados e reconhecidos pelo MEC</p>
                    </div>    
                </div>

                <div className={styles.divIcons}>
                    <div className={styles.iconsCircle}>
                        <LiaChalkboardTeacherSolid size={80} color='#479eff'/>
                    </div>
                    <div className={styles.iconsParagraph}>
                        <p>Professores mestres e doutores</p>
                    </div>    
                </div>

                <div className={styles.divIcons}>
                    <div className={styles.iconsCircle}>
                        <PiStudentFill size={80} color='#479eff'/>
                    </div>
                    <div className={styles.iconsParagraph}>
                        <p>Mais de 10 cursos de Graduação</p>
                    </div>    
                </div>

                <div className={styles.divIcons}>
                    <div className={styles.iconsCircle}>
                        <GiMicroscope size={80} color='#479eff'/>
                    </div>
                    <div className={styles.iconsParagraph}>
                        <p>7 Laboratórios para aulas práticas</p>
                    </div>    
                </div>


            </div>
        </div>
    )
}