import { PrismicNextImage } from '@prismicio/next'
import { getClient } from '../../services/prismic'
import { Course } from './Course'
import styles from './styles.module.scss'

export async function Courses(){

    const client = await getClient().getAllByType('courses', {
        orderings: {
            field: 'document.first_publication_date',
            direction: 'asc'
        },
    })
    const sortedCourses = [...client].sort((a, b) => {
        return a.data.title.localeCompare(b.data.title, 'pt-BR', { sensitivity: 'base' })
    })

    return(
        <section className={`${styles.trueContaiener}`}>
        <div className={`${"container"} ${styles.coursesContainer}`}>
            <h2 id='nossos-cursos'>Conheça todos os cursos da FAZAG</h2>
            <div className={styles.containerPadding}>
                {sortedCourses.map((item) => {
                    return <Course image={<PrismicNextImage field={item.data.image} className={styles.imgCourse} alt=""/>} course={item.data.title} totalValue={item.data.totalvalue} saleValue={item.data.salevalue} link={`/cursos/${item.uid}`} key={item.uid} hr/>
                })}
            </div>

        </div>
        </section>
    )
}
