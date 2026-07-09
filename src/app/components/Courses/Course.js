import Link from 'next/link'
import styles from './styles.module.scss'

const courseCtas = {
    administracao: 'Quero liderar negócios',
    'ciencias contabeis': 'Quero atuar com gestão financeira',
    'educacao fisica': 'Quero trabalhar com movimento e saúde',
    enfermagem: 'Quero cuidar de vidas',
    fisioterapia: 'Quero reabilitar movimentos',
    odontologia: 'Quero transformar sorrisos',
    psicologia: 'Quero cuidar de pessoas',
    'servico social': 'Quero promover transformação social',
    fonoaudiologia: 'Quero cuidar da comunicação',
    direito: 'Quero construir minha carreira jurídica',
}

function normalizeText(value) {
    return value
        ?.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim()
}

function getCourseCta(course) {
    const normalizedCourse = normalizeText(course)

    return courseCtas[normalizedCourse] || `Quero conhecer ${course}`
}

export function Course({image, course, totalValue, saleValue, link, hr}){

    return (
        <>
    <div className={styles.courseContainer}>
        <div className={styles.imgCourseDiv}>
            <Link className={styles.links} href={link}>
            {image}
            </Link>
        </div>

        <div className={styles.textCourseContainer}>
            <Link href={link} className={styles.links}>
            <h3>{course}</h3>
            </Link>
            <span>Conheça a matriz, diferenciais e possibilidades de carreira em {course}.</span>
            {/* <span>{totalValue}/mês</span> */}
            {/* <span>{saleValue}/mês</span> */}
        </div>

        <Link className={styles.buttonMore} href={link}>
            <button>{getCourseCta(course)}</button>
        </Link>
    </div>
    {hr && <hr/>}
    </>
    )
}
