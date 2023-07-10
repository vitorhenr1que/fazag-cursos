import Image from "next/image";
import styles from './styles.module.scss'
import administracao from '../../../../public/courses/administracao.jpg'

import Link from "next/link";

export function Course({image, course, totalValue, saleValue, link, hr}){

    return (
        <>
    <div className={styles.courseContainer}>
        <div className={styles.imgCourseDiv}>
            <Image className={styles.imgCourse} src={image} fill objectFit="cover" alt={""}/>
        </div>

        <div className={styles.textCourseContainer}>
            <h3>{course}</h3>
            <s>{totalValue}/mês</s>
            <span>{saleValue}/mês</span>
        </div>

        <Link className={styles.buttonMore} href={link}>
            <button>Saiba mais</button>
        </Link>
    </div>
    {hr && <hr/>}
    </>
    )
}