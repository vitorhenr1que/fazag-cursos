import Image from 'next/image'
import psicologia from '../../../../public/courses/psicologia.jpg'
import styles from './style.module.scss'
import { oswald } from '@/app/layout'
import { InfoCourse } from '@/app/components/InfoCourse'
import axios from 'axios'
import { getClient } from '@/app/services/prismic'

export default async function Cursos({params}){

    
        const client = getClient()
        const response = await client.getByUID('courses', params.curso, {})
    
    

    return(
        <div className={styles.containerCourse}>

        <div className={styles.imgContainer}>
            <Image className={styles.imgCourses} src={psicologia} fill objectFit='cover' alt={""}/>
            
            <div className={styles.courseTextContainer}>
                <div className={styles.textContainer}>
                    <h1 className={oswald.className}><span>FACULDADE DE</span><span>{response.data.title.toUpperCase()}</span></h1>
                    <p>O curso de graduação em Psicologia é uma formação acadêmica que oferece aos estudantes a oportunidade de compreender a complexidade da mente humana, do comportamento e das relações interpessoais. Ao longo do curso, os alunos mergulham em um estudo aprofundado das teorias, métodos e práticas psicológicas.</p>
                </div>
                <div className={styles.boxContainer}>

                    <div className={styles.textBoxDiv}>
                        <span className={styles.grau}>Bacharelado em</span>
                        <h2 className={styles.courseName}>Psicologia</h2>
                    </div>

                    <div className={styles.ulDiv}>
                        <ul>
                            <li><strong>Conclusão prevista em:</strong> 5 anos</li>
                            <li><strong>Modalidade do curso:</strong> Presencial</li>
                            <li><strong>Turno:</strong> Vespertino ou Noturno</li>
                        </ul>
                    </div>

                    <div className={styles.saleDiv}>
                        <span>DESCONTO GARANTIDO DURANTE TODO O CURSO</span>
                    </div>

                    <div className={styles.courseValues}>
                        <s>R$ 1050,00/mês</s>
                        <p>R$ 525,00<span>/mês</span></p>
                    </div>

                    <div className={styles.inscrevaSeDiv}>
                        <button className={styles.inscrevaSeButton}>
                            Matricule-se
                        </button>
                    </div>
    </div>
            </div>
        </div>
        <InfoCourse/>
        {console.log(response.data)}
        
        </div>
    )
}