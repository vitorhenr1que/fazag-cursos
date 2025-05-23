
import Image from 'next/image'
import psicologia from '../../../../public/courses/psicologia.jpg'
import styles from './style.module.scss'
import { metadata, oswald } from '../../layout'
import { InfoCourse } from '../../components/InfoCourse'
import axios from 'axios'
import { getClient } from '../../services/prismic'
import { PrismicNextImage } from '@prismicio/next'
import Link from 'next/link'
import { PiWhatsappLogo } from 'react-icons/pi'
import { LiaWhatsapp } from 'react-icons/lia'
import {Vagas} from '../../components/Vagas/Vagas'

export async function generateMetadata({params}){

        const client = getClient()
        const response = await client.getByUID('courses', params.curso, {})
        const course = response.data

    return {
        title: `${course.title} | FAZAG`,
        description: `Graduação em ${course.title}, ${course.modalidade}, em ${course.duration}`,
    }
  }



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
                        
                        <h2 className={styles.courseName}>{course.title.includes('(') ? course.title.split('(')[0] : course.title}</h2>
                    </div>

                    <div className={styles.ulDiv}>
                        <ul>
                            <li><strong>Conclusão prevista em:</strong> {course.duration}</li>
                            <li><strong>Modalidade do curso:</strong> {course.modalidade}</li>
                            <li><strong>Turno:</strong> {course.turn}</li>
                        </ul>
                    </div>

                    <div className={styles.saleDiv}>
                        <span>ENTRE EM CONTATO PARA MAIS INFORMAÇÕES</span>
                    </div>

                    {/* <div className={styles.courseValues}>
                        <s>{course.totalvalue}</s>
                        <p>{course.salevalue}<span>/mês</span></p>
                        {params.curso === 'psicologia' && <p className={styles.obtenhaDesconto}>30% de desconto através de convênios.</p>}
                    </div> */}

                       <Vagas course={params.curso}/>

    </div>
            </div>
        </div>
        <InfoCourse 
            course={course.title}
            courseId={params.curso}
            discipline1={course.discipline1}
            discipline2={course.discipline2}
            discipline3={course.discipline3} 
            discipline4={course.discipline4} 
            discipline5={course.discipline5} 
            discipline6={course.discipline6} />

        
        </div>
        
    )
}