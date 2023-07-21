import { Course } from './Course'
import styles from './styles.module.scss'
import administracao from '../../../../public/courses/administracao.jpg'
import contabeis from '../../../../public/courses/ciencias-contabeis.png'
import educacaoFisica from '../../../../public/courses/educacao-fisica.jpeg'
import psicologia from '../../../../public/courses/psicologia.png'
import { getClient } from '../../services/prismic'
import { PrismicNextImage } from '@prismicio/next'

export async function Courses(){

    const client = await getClient().getAllByType('courses', {  
        orderings: {
            field: 'document.first_publication_date',
            direction: 'asc'
        },
    })
    const response = client.data


    return(
        <section className={`${styles.trueContaiener}`}>
        <div className={`${"container"} ${styles.coursesContainer}`}>
            <h2 id='nossos-cursos'>Escolha seu curso</h2>
            <div className={styles.containerPadding}>
                {client.map((item) => {
                    return <Course image={<PrismicNextImage field={item.data.image} className={styles.imgCourse} alt=""/>} course={item.data.title} totalValue={item.data.totalvalue} saleValue={item.data.salevalue} link={`/cursos/${item.uid}`} key={item.uid} hr/>
                })}
            </div>
           
        </div>
        </section>
    )
}