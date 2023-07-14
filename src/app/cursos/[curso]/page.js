import Image from 'next/image'
import psicologia from '../../../../public/courses/psicologia.jpg'
import styles from './style.module.scss'
import { oswald } from '../../layout'
import { InfoCourse } from '../../components/InfoCourse'
import axios from 'axios'
import { getClient } from '../../services/prismic'
import { PrismicNextImage } from '@prismicio/next'


export default async function Cursos({params}){

    
        const client = getClient()
        const response = await client.getByUID('courses', params.curso, {})
        const course = response.data
        const img = course.image.url.split('?')


    return(
        <div className={styles.containerCourse}>

        <div className={styles.imgContainer}>
            {/*<Image className={styles.imgCourses} src={`${course.image.url}`} fill objectFit='cover' alt={`${params.curso}`}/>*/}
            <PrismicNextImage field={course.image} className={styles.imgCourses} alt=""/>
            <div className={styles.courseTextContainer}>
                <div className={styles.textContainer}>
                    <h1 className={oswald.className}><span>FACULDADE DE</span><span>{course.title.toUpperCase()}</span></h1>
                    <p>{course.description[0].text}</p>
                </div>
                <div className={styles.boxContainer}>

                    <div className={styles.textBoxDiv}>
                        <span className={styles.grau}>{course.grau} em</span>
                        <h2 className={styles.courseName}>{course.title}</h2>
                    </div>

                    <div className={styles.ulDiv}>
                        <ul>
                            <li><strong>Conclusão prevista em:</strong> {course.duration}</li>
                            <li><strong>Modalidade do curso:</strong> {course.modalidade}</li>
                            <li><strong>Turno:</strong> {course.turn}</li>
                        </ul>
                    </div>

                    <div className={styles.saleDiv}>
                        <span>DESCONTO GARANTIDO DURANTE TODO O CURSO</span>
                    </div>

                    <div className={styles.courseValues}>
                        <s>{course.totalvalue}</s>
                        <p>{course.salevalue}<span>/mês</span></p>
                    </div>

                    <div className={styles.inscrevaSeDiv}>
                        <button className={styles.inscrevaSeButton}>
                            Matricule-se
                        </button>
                    </div>
    </div>
            </div>
        </div>
        <InfoCourse 
            course={course.title}
            discipline1={course.discipline1}
            discipline2={course.discipline2}
            discipline3={course.discipline3} 
            discipline4={course.discipline4} 
            discipline5={course.discipline5} 
            discipline6={course.discipline6} />

        
        </div>
    )
}